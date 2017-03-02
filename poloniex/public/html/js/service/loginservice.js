angular.module('service.login', ['ui.bootstrap.modal', 'service.app']).factory('LoginService', 
		[ '$modal', 'AppService', '$location',
  function($modal,   AppService,   $location) {

	// The return API
	function LoginService() { }
	
	LoginService.dialog = function() {
		
		// supostamente chegou aqui por 403, entao melhor matar user
		AppService.secLogout();

		$location.path('/home/revalidate');
		
		return ;
	};
	
	// The return API
	return LoginService;
} ]);
