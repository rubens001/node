angular.module('adm.module', ['resources.shell']);

angular.module('adm.module').config(
		['$routeProvider',
function ($routeProvider) {

	$routeProvider.when('/adm', {
		templateUrl: 'html/templates/adm/adm.tpl.html',
	  controller:'AdmCtrl',
		resolve:{
			validRole: ['secAuth', function (secAuth) { secAuth.validRole('ROLE_ADM_ROCK'); }],
		}
	  });

	$routeProvider.when('/adm/shell', {
		templateUrl: 'html/templates/adm/shell.tpl.html',
	  controller:'ShellCtrl',
		resolve:{
			validRole: ['secAuth', function (secAuth) { secAuth.validRole('ROLE_ADM_ROCK'); }],
		}
	  });

	$routeProvider.when('/adm/env', {
		templateUrl: 'html/templates/adm/env.tpl.html',
		controller:'EnvCtrl',
		resolve:{
			validRole: ['secAuth', function (secAuth) { secAuth.validRole('ROLE_ADM_ROCK'); }],
		}
	});
	
	$routeProvider.when('/adm/plnx', {
		templateUrl: 'html/templates/adm/plnx.tpl.html',
		controller:'PlnxCtrl',
		resolve:{
			validRole: ['secAuth', function (secAuth) { secAuth.validRole('ROLE_ADM_ROCK'); }],
		}
	});
	
}]);

angular.module('adm.module').controller('AdmCtrl',
		['$scope', '$location',
function ($scope,  $location) {

}]);

angular.module('adm.module').controller('PlnxCtrl',
		['$scope','$http','AdmService','AppService',
function ($scope,  $http,  AdmService,  AppService) {

	$scope.onStartPlnx = function() {
		$http({method: 'GET',url: 'api/plnxdb/start'
		}).then(function successCallback(response) {
			console.log('plnx ok, data=', response.data);
		}, function errorCallback(response) {
			console.error('plnx ERR response=',response);
		});
	};

	$scope.onStopPlnx = function() {
		$http({method: 'GET',url: 'api/plnxdb/stop'
		}).then(function successCallback(response) {
			console.log('plnx ok, data=', response.data);
		}, function errorCallback(response) {
			console.error('plnx ERR response=',response);
		});
	};

	$scope.onCsvPlnx = function() {
		$http({method: 'GET',url: 'api/plnxdb/csv'
		}).then(function successCallback(response) {
			console.log('plnx ok, data=', response.data);
		}, function errorCallback(response) {
			console.error('plnx ERR response=',response);
		});
	};

	// console.log('ok in PlnxCtrl');
	// const data = {id:1,msg:'teste'};
	// var htmlJson = AdmService.formatJson(data);
	// AdmService.showHtmlJson(htmlJson);

}]);

angular.module('adm.module').controller('EnvCtrl',
				['$scope','Shell','AdmService',
function ($scope,  Shell,  AdmService) {

	Shell.get(successEnv, errorEnv, false);

  function successEnv (data,status){
		console.log(data);
		var htmlJson = AdmService.formatJson(data);
		AdmService.showHtmlJson(htmlJson);
	}
	function errorEnv (data,status){
		alert('errorEnv, status='+status);
		console.log(data);
	}

}]);

angular.module('adm.module').controller('ShellCtrl',
				['$scope','$location','Shell','AdmService',
function ($scope,  $location,  Shell,  AdmService) {

	$scope.txtCmd = "\'use strict\'\n"+
		"var db = require(\'./app/db\').get();\n\n"+
		"exports.execute=function(showReturn) {\n"+
		"\tvar resp = db.get('posts').find({ id: 123 }).value();\n"+
		"\tshowReturn(null,resp); // showReturn(err,resp);\n"+
		"}";

	// $scope.txtCmd
	$scope.execs=function(){
		var shell = new Shell();
		shell.cmd=$scope.txtCmd;
		shell.$save(onCmdOk, onCmdErr);
	};
	function onCmdOk(data, status){
		console.log(data);
		var htmlJson = AdmService.formatJson(data);
		AdmService.showHtmlJson(htmlJson);
	}
	function onCmdErr(data, status){
		alert('onCmdErr, status='+status);
		console.log(data);
	}

}]);

angular.module('adm.module').factory('AdmService',
		['$http',
function ($http) {

	// The return API
	function AdmService() { }

	AdmService.showHtmlJson = function (htmlJson){
		$('.json-container').html(htmlJson);
		$('.json-container').ready(function(){
		$('.json-container').on('mouseover', 'div', function(e) {
				$(e.target).parent().css("background-color","snow");
				$(e.target).children().css("background-color","snow");
				$(e.target).css("background-color","#FFFFCC");

				$(e.target).mouseout(function(){
					$(e.target).css("background-color","snow");
				});
		});

		});
	};

	// search object items recursively and replace some chars
	// to html tags in order to prettyfy
	AdmService.formatJson = function(obj) {
	//		var obj = JSON.parse(json);
		var obj2 = objStr(obj);
		json = JSON.stringify(obj2);

		json = json.replace(/{/g,"<div class=\"item\">{");
		json = json.replace(/\[/g,"<div class=\"item\">[");
		json = json.replace(new RegExp('},', 'g'),"&#125;,</div>");
		json = json.replace(/]\,/g,"&#93;,</div>");
		json = json.replace(/}/g,"}</div>");
		json = json.replace(/\]/g,"]</div>");
		json = json.replace(/,/g,",<br>");
		json = json.replace(/\\n/g,"<br>");

		return json;
	};

	// search for string values and replace their
	// comma, brackets, etc to unicode
	function objStr(obj) {
		if (obj===null||obj===undefined){return obj;}
		if (typeof obj == 'string') {
			if (obj===null||obj===undefined){return obj;}
			var strVal = obj.replace(/,/g,"&#44;");
	//				strVal = strVal.replace(/{/g,"&#x7b;");
	//				strVal = strVal.replace(/}/g,"&#x7d;");
			strVal = strVal.replace(/\[/g,"&#x5b;");
			strVal = strVal.replace(/\]/g,"&#x5d;");
			return strVal;
		}
		if (typeof obj != 'object') {
			return obj;
		}

		if (Array.isArray(obj)) {
			var arr = [];
			obj.forEach(function(item) {
					arr.push(objStr(item));
			});
			return arr;
		} else {
				var keys = Object.keys(obj);
				var sobj = {};
				keys.forEach(function(k){
					sobj[k] = objStr(obj[k]);
				});
				return sobj;
		}
	}

	return AdmService;
}]);
