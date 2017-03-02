angular.module('service.app', ['ngProgress.provider']).factory('AppService',
				['$http', '$compile','$interpolate','$sce','ModalBox','ngProgress','MSG_PT','MSG_EN','MSG_ES','LITERAL_PT','LITERAL_EN','LITERAL_ES',
function ($http,   $compile,  $interpolate,  $sce,  ModalBox,  ngProgress,  MSG_PT,  MSG_EN,  MSG_ES,  LITERAL_PT,  LITERAL_EN,  LITERAL_ES) {

	// The return API
	function AppService() { }

	// Carrega template no elemento DOM informado e vincula ao scope.
	AppService.loadTpl = function(tplName, $element, $scope) {
		$http({method: 'GET', url: tplName}).
	    success(function(result, status, headers, config) {
	    	$element.html(result).show();
			$compile($element.contents())($scope);
	    }).
	    error(function(data, status, headers, config) {
	      console.log("ERROR AppService.loadTpl [http Get] template\r\ntplName=" + tplName);
	      console.log("status=" + status);
	      $element.html(data);
	    });
	};

	// procura indice de um objeto num array
	// parametros : o array, a propriedade procurada, o valor procurado
	// retorno: indice encontrado ou -1 se nao encontrado
	AppService.indexOfPropertyValue = function(array, prop, value){
		if (!(array instanceof Array)) {
			return -1;
		}
	      for (var index = 0; index < array.length; index++){
	        if (prop in array[index]){
	          if (array[index][prop] == value){
	            return index;
	          }
	        }
	      }
	      return -1;
	    };

	// Coloca um layer transparente protetor em toda tela; Param: true/false
	AppService.lockScreen = function (lockIt) {
		if (lockIt) {
			if (!AppService.countLock) {
				AppService.countLock=0;
			}
			AppService.countLock++;
			ngProgress.start();
			AppService.$lock = $('<div>');
			AppService.$lock.appendTo($('body'));
			AppService.$lock.css({'position': 'absolute','top':'0','left':'0',
	        	'width':'100%','height': $(document).height() + 'px',
	        	'background-color':'rgba(0,0,0,0.01)','z-index':'999999999999'});
		} else {
			AppService.countLock--;
			if (AppService.countLock <= 0) {
				try {
					AppService.unlockScreen();
				} catch (err) {}
			}
		}
	};

  AppService.unlockScreen=function(){
		AppService.countLock=0;
		ngProgress.complete();
		AppService.$lock.remove();
	};

	// Detecta environment view Bootstrap (xs < sm < md < lg)
    AppService.findBootstrapEnvironment = function() {
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

	// Emite mensagem notificacao (plugin jquery Notify.js)
	// parametros : 1=cod mensagem 2=success/info/warn/error, 3=properties para substituicao, 4=elemento (default=navBar)
	AppService.notify = function (codMsg, level, properties, element) {
		var msg;
		msg = MSG_PT[codMsg];
		if (!msg) {
			msg="msg.undefined";
		}
		var msgFinal = msg;
		if (properties) {
			msgFinal = $interpolate(msg)(properties);
		}
		if (!level) {
			level = "warn";
		}

		// se mobile: ModalBox, senao Notify.js
		var env = this.findBootstrapEnvironment();
		if (env == 'xs') {
			switch (level) {
			case "success":
				ModalBox.notify(msgFinal,"Aviso","sm");
		        break;
			case "info":
				ModalBox.notify(msgFinal,"Atenção","sm");
		        break;
			case "warn":
				ModalBox.notify(msgFinal,"Aviso","sm");
		        break;
			case "error":
				ModalBox.error(msgFinal,"Atenção","sm");
		        break;
			}
			return;
		}

		if (element) {
			$(element).notify(msgFinal, { style: 'bootstrap', position : "bottom right", className : level });
		} else {
			$(".navbar").notify(msgFinal, { style: 'bootstrap', position : "bottom right", className : level });
		}
////	$.notify.defaults( {globalPosition: 'bottom left'} );
//		$.notify(msgFinal, level);
	};


	// Interpreta mensagem notificacao (sem exibi-la)
	// parametros : 1=cod mensagem 2=properties para substituicao
	AppService.msg = function (codMsg, properties) {
		var msg = MSG_PT[codMsg];
		if (!msg) {
			return;
		}
		var msgFinal = msg;
		if (properties) {
			msgFinal = $interpolate(msg)(properties);
		}
		return msgFinal;
	};

	// para poder exibir mensagens formatadas em html
	AppService.renderHtml = function (htmlCode) {
        return $sce.trustAsHtml(htmlCode);
    };

	// Funcoes de seguranca
    AppService.secGetUser = function() {
    	if (AppService.user) {
			return AppService.user;
		} else {
			AppService.user = JSON.parse(localStorage.getItem("user"));
			return AppService.user;
		}
    };

    AppService.secSetUser = function(user) {
    	AppService.user = user;
    	if (localStorage) {
    		localStorage.setItem("user", JSON.stringify(user));
    	}
		if (user.uuid) {
			$http.defaults.headers.common['X-Auth-Token'] = angular.copy(user.uuid);
		}
    };

    AppService.secLogout = function() {
    	if (localStorage) {
    		localStorage.removeItem("user");
    	}
		AppService.user = null;
		delete $http.defaults.headers.common['X-Auth-Token'];
    };

	AppService.secIsLogged = function() {
		if (AppService.secGetUser()) {
			return true;
		} else {
			return false;
		}
	};
	AppService.secGetUserName = function () {
		if (!AppService.secGetUser()) {
			return null;
		}
		var loginType = AppService.secGetUser().loginType;
		var username = "logged";
//		if (loginType == 0) { // email
//			username = AppService.secGetUser().login.substring(0,AppService.secGetUser().login.indexOf("@"));
//		}
//		if (loginType == 1 || loginType == 2) { // oauths
			username = AppService.secGetUser().givenName;
//		}
		return username;
	};
	// verifica se possui ALGUMA das authorities (roles) informadas. Param=uma role ou uma lista de roles
	AppService.secHasRole = function(roles) {
		if (!AppService.secGetUser()) {
			return false;
		}
		var roleList = [];
		if (Array.isArray(roles)) {
			for (var i=0; i<roles.length; i++) {
				roleList.push(roles[i]);
			}
		} else {
			roleList.push(roles);
		}
		for (var k=0; k<roleList.length; k++) {
			for (var j=0; j<AppService.secGetUser().authorities.length; j++) {
				if (roleList[k]==AppService.secGetUser().authorities[j].authority) {
					return true;
				}
			}
		}
		return false;
	};

	// recuperar configurações
	AppService.getConfiguration = function() {
		if (AppService.configuration) {
			return AppService.configuration;
		} else {
			var configuration = localStorage.getItem("configuration");
			if (configuration) {
				AppService.configuration = JSON.parse(configuration);
				return AppService.configuration;
			} else {
				configuration = {language:navigator.language, metricSystem:true, dateFormat:0};
				// somente EUA
				if (configuration.language.toLowerCase() == 'en-us') {
					configuration.metricSystem = false;
					configuration.dateFormat = 1;
				}
				AppService.setConfiguration(configuration);
				return configuration;
			}
		}
	};

	// armazenar configurações
	AppService.setConfiguration = function(configuration) {
		AppService.configuration = configuration;
		if (localStorage) {
			localStorage.setItem("configuration", JSON.stringify(configuration));
		}
	};

	AppService.i18n = function(code, properties) { // @@@
		var userLang = 'PT'; //AppService.secGetUser().configuration.language;

		var messages = LITERAL_PT;

		switch (userLang) {
		case 'EN':
			messages = LITERAL_EN;
			break;
		case 'ES':
			messages = LITERAL_ES;
			break;
		default:
			break;
		}

		var msgFinal = messages[code];
		if (!msgFinal){msgFinal = "???"+code;}
		if (properties) {
			msgFinal = $interpolate(msg)(properties);
		}
		return msgFinal;
	};

	// The return API
	return AppService;
} ]);
