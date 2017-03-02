angular.module('service.modalbox', ['ui.bootstrap.modal']).factory('ModalBox', 
		[ '$http', '$modal', 
  function($http,   $modal) {

	// The return API (metodos=error/wait/notify/confirm/custom)
	function ModalBox() { }
	
	// Modais parametros : msg, header, size
	// size pode ser : null=normal, lg=large ou sm=small
	ModalBox.error = function (msg, header, size) {
		if (!header) {
			header = "Atenção";
		}
	    var modalInstance = $modal.open({
	      templateUrl: '/modal/modal.error.tpl.html',
	      controller: 'ModalBoxErrCtrl',
	      size: size,
	      resolve: { msg: function () { return msg; },
	    	  header: function () { return header; } }
	    });
	};
	
	
	ModalBox.wait = function (msg, header, size) {
		if (!header) {
			header = "Aguarde...";
		}
	    var modalInstance = $modal.open({
	      templateUrl: '/modal/modal.wait.tpl.html',
	      controller: 'ModalBoxWaitCtrl',
	      size: size,
	      resolve: { msg: function () { return msg; },
	    	  header: function () { return header; } }
	    });
	    
	};
	
	// Metodo para atualizar a barra de progresso da janela de wait
	// parametro : de 0 a 100
	ModalBox.waitSetProgress = function(progress) {
		// o callback desta funcao eh criado em ModalBoxWaitCtrl
	};
	
	ModalBox.notify = function (msg, header, size) {
		if (!header) {
			header = "Aviso";
		}
	    var modalInstance = $modal.open({
	      templateUrl: '/modal/modal.notify.tpl.html',
	      controller: 'ModalBoxNotifyCtrl',
	      size: size,
	      resolve: { msg: function () { return msg; },
	    	  header: function () { return header; } }
	    });
	};
	
	// parametros : msg body, string para header, size, callback OK, callback Cancel
	ModalBox.confirm = function (msg, header, size, onOk, onCancel) {
		if (!header) {
			header = "Confirmação";
		}
	    var modalInstance = $modal.open({
	      templateUrl: '/modal/modal.confirm.tpl.html',
	      controller: 'ModalBoxConfirmCtrl',
	      size: size,
	      resolve: { msg: function () { return msg; },
	    	  header: function () { return header; } }
	    }); //.result.then(onOk, onCancel);
	    
	    modalInstance.result.then(function () {
		      if (onOk) {
		    	  onOk();
		      }
		    }, function () {
		    	if (onCancel) {
		    		onCancel();
			      }
		    });
	};
	
	// parametros : objeto de configuracao (templateUrl, controller, size, resolve); 
	// function que recebera' objeto de retorno para OK;
	// function para cancel
	ModalBox.custom = function (objConfig, onOk, onCancel) {
		var modalInstance = $modal.open(objConfig);
		
		var env = this.findBootstrapEnvironment();
		// foco no 1o. input da tela modal
		window.setTimeout(function() {
			$(".modal-body").find(':input:enabled:visible:first').focus();
			// mobile : modal largura 100%
			if (env == 'xs') {
				$(".modal-dialog").css('width', '100%');
				$(".modal-dialog").css('margin', '0px');
			}
		}, 400 );
		
		if (onOk || onCancel) {
			modalInstance.result.then(onOk, onCancel);
		}
	};
	
	// Detecta environment view Bootstrap (xs < sm < md < lg)
	ModalBox.findBootstrapEnvironment = function() {
        var envs = ['xs', 'sm', 'md', 'lg'];

        $el = $('<div>');
        $el.appendTo($('body'));

        for (var i = envs.length - 1; i >= 0; i--) {
            var env = envs[i];

            $el.addClass('hidden-'+env);
            if ($el.is(':hidden')) {
                $el.remove();
                return env;
            }
        }
    };
    
	// The return API
	return ModalBox;
} ]);

angular.module('service.modalbox').controller('ModalBoxErrCtrl', 
		['$scope','$modalInstance', 'msg', 'header', 
function ($scope,  $modalInstance,   msg,   header) {
	  $scope.msg = msg;
	  $scope.header = header;
	  $scope.ok = function () {
	    $modalInstance.close();
	  };
	  $scope.cancel = function () {
	    $modalInstance.dismiss('cancel');
	  };
}]);

angular.module('service.modalbox').controller('ModalBoxWaitCtrl',
		['$scope','$modalInstance', 'msg', 'header', 'ModalBox',
function ($scope,  $modalInstance,   msg,   header,   ModalBox) {
	  $scope.msg = msg;
	  $scope.header = header;
	  $scope.dynamic = 0;
	  $scope.ok = function () {
	    $modalInstance.close();
	  };
	  $scope.cancel = function () {
	    $modalInstance.dismiss('cancel');
	  };
	  $scope.setProgress = function(progress) {
		  $scope.dynamic = progress;
		  if (progress >= 100) {
			  setTimeout(function(){ $modalInstance.dismiss('cancel'); }, 1000);
		  }
		  $scope.$digest(); // força refresh na barra de progresso
	  };
	  ModalBox.waitSetProgress = $scope.setProgress;
}]);

angular.module('service.modalbox').controller('ModalBoxNotifyCtrl', 
		['$scope','$modalInstance', 'msg', 'header',
function ($scope,  $modalInstance,   msg,   header) {
	  $scope.msg = msg;
	  $scope.header = header;
	  $scope.ok = function () {
	    $modalInstance.close();
	  };
	  $scope.cancel = function () {
	    $modalInstance.dismiss('cancel');
	  };
}]);

angular.module('service.modalbox').controller('ModalBoxConfirmCtrl', 
		['$scope','$modalInstance', 'msg', 'header',
function ($scope,  $modalInstance,   msg,   header) {
	  $scope.msg = msg;
	  $scope.header = header;
	  $scope.msg = msg;
	  $scope.ok = function () {
	    $modalInstance.close();
	  };
	  $scope.cancel = function () {
	    $modalInstance.dismiss('cancel');
	  };
}]);

angular.module('service.modalbox').run(["$templateCache", 
   function($templateCache) { 
	$templateCache.put("/modal/modal.error.tpl.html",'<div class="modal-header dialog-header-error"><button type="button" class="close" ng-click="cancel()">&times;</button><h4 class="modal-title text-danger"><i class="fa fa-times-circle"></i> {{header}}</h4></div><div class="modal-body text-danger" ng-bind-html="renderHtml(msg)"></div><div class="modal-footer"><button class="btn btn-primary" ng-click="ok()"> OK </button></div>');
	$templateCache.put("/modal/modal.wait.tpl.html",'<div class="modal-header dialog-header-wait"><button type="button" class="close" ng-click="cancel()">&times;</button><h4 class="modal-title text-danger"><i class="fa fa-clock-o"></i> {{header}}</h3></div><div class="modal-body"><span>{{renderHtml(msg)}}</span><div><div style="height:15px;"></div><div class="progress progress-striped active"><progressbar animate="true" value="dynamic" type="info"><b>{{dynamic}}%</b></progressbar></div></div></div>');
	$templateCache.put("/modal/modal.notify.tpl.html",'<div class="modal-header dialog-header-notify"><button type="button" class="close" ng-click="cancel()">&times;</button><h4 class="modal-title text-info"><i class="fa fa-info-circle"></i> {{header}}</h4></div><div class="modal-body text-info" ng-bind-html="renderHtml(msg)"></div><div class="modal-footer"><button class="btn btn-primary" ng-click="ok()"> OK </button></div>');
	$templateCache.put("/modal/modal.confirm.tpl.html",'<div class="modal-header dialog-header-confirm"><button type="button" class="close" ng-click="cancel()">&times;</button><h4 class="modal-title"><i class="fa fa-check-square-o"></i> {{header}}</h4></div><div class="modal-body" ng-bind-html="renderHtml(msg)"></div><div class="modal-footer"><button class="btn btn-primary col-xs-4 pull-left" ng-click="ok()">OK</button><button class="btn btn-warning col-xs-4 pull-right" ng-click="cancel()">Cancela</button></div>');
}]);