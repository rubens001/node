angular.module('app', [ 'ngRoute', 'ngSanitize', 'ui.bootstrap',
	'Commom.Factory','security.authorization',
	'home.module','songs.module','adm.module','service.modalbox',
	'service.app','service.login','userlogged.module'
	]);

//security interceptor
angular.module('app').config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('securityInterceptor');
}]);

// Constantes da App
angular.module('app').constant('APP_CONFIG', {
	baseUrl : '/api',	// http://rock-radios.rhcloud.com/api
//	baseUrl : 'http://localhost:8080/api',			// rbz desenv
	timeOutNotification : 3000,
	rowsPerPage : 10
});

angular.module('app').config(
		['$httpProvider',
function ($httpProvider) {
	$httpProvider.defaults.timeout = 3000;
}]);

angular.module('app').run(
				['APP_CONFIG','$rootScope','$http','$location','AppService',
function( APP_CONFIG,  $rootScope,  $http,  $location,  AppService) {
	// disponibiliza funcoes para todas as paginas
	$rootScope.regexEmail = /^[A-Za-z0-9-*_.+:();#$!-]+@[-_.+:A-Za-z0-9-]+(\.[a-zA-Z]{2,3})$/i;
	$rootScope.secIsLogged = AppService.secIsLogged;
	$rootScope.secGetUserName = AppService.secGetUserName;
	$rootScope.secHasRole = AppService.secHasRole;
	$rootScope.renderHtml = AppService.renderHtml;
	$rootScope.hasAjax = function () { return $http.pendingRequests.length > 0; };
	$rootScope.getPathMenu = AppService.getPathMenu;
	$rootScope.i18n = AppService.i18n;

	}]
);

//Adicao style para notifyjs
$.notify.addStyle("bootstrap", {
	  html: "<div>\n<span data-notify-text></span>\n</div>",
	  classes: {
	    base: {
	      "font-weight": "bold",
	      "padding": "8px 15px 8px 14px",
	      "text-shadow": "0 1px 0 rgba(255, 255, 255, 0.5)",
	      "background-color": "#fcf8e3",
	      "border": "1px solid #fbeed5",
	      "border-radius": "4px",
	      "white-space": "nowrap",
/*	      "padding-left": "25px", */
	      "background-repeat": "no-repeat"
/*	      "background-position": "3px 7px" */
	    },
	    error: {
	      "color": "#B94A48",
	      "background-color": "#F2DEDE",
	      "border-color": "#EED3D7"
	    },
	    success: {
	      "color": "#468847",
	      "background-color": "#DFF0D8",
	      "border-color": "#D6E9C6"
	    },
	    info: {
	      "color": "#3A87AD",
	      "background-color": "#D9EDF7",
	      "border-color": "#BCE8F1"
	    },
	    warn: {
	      "color": "#C09853",
	      "background-color": "#FCF8E3",
	      "border-color": "#FBEED5"
	    }
	  }
});
