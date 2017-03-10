angular.module('home.module', ['resources.userlogged', 'service.modalbox',
		'resources.contact', 'service.rsa', 'resources.profile' ]);

angular.module('home.module').config(
		['$routeProvider',
function ($routeProvider) {

	$routeProvider.when('/', {
		templateUrl: 'html/templates/home/home.tpl.html',
	    controller:'HomeCtrl',
	    resolve : {
	    	isRevalidate : function() { return false; }
	    }
	  });

	$routeProvider.when('/home/revalidate', {
		templateUrl: 'html/templates/home/home.tpl.html',
	    controller:'HomeCtrl',
	    resolve : {
	    	isRevalidate : function() { return true; }
	      }
	  });
}]);

//Pagina Home (controller tambem usado para revalidacao de login)
angular.module('home.module').controller('HomeCtrl',
		['$scope', 'isRevalidate','$location',
function ($scope,   isRevalidate,  $location) {



}]);


//NavBarCtrl - chamado diretamente no html
angular.module('home.module').controller('NavBarCtrl',
				['$scope','$rootScope','AppService','UserLogged','ModalBox','UserProfile','$location','$route','$http',
function ($scope,  $rootScope,  AppService,  UserLogged,  ModalBox,  UserProfile,  $location,  $route,  $http) {

	if (localStorage) {
		var user = AppService.secGetUser();
		if (user) {
			var sid = user.uuid;
			if (sid) {
				$http.defaults.headers.common['X-Auth-Token'] = sid;
			}
		}
	}
	$http.defaults.headers.common['X-CSRF-Token'] = AppService.getConfiguration().language;

	// Manuseio de historico, tratamento de back, ffw, etc
	// chama pagina home ("/") porem passando parametro AppService.path
	$scope.onMenu = function(path) {
		$location.path(path.substring(1));
	};

	$scope.onLogin = function() {

		var onLoginOk = function (user) {
	    	if (user.passRec) {
	    		ModalBox.notify('Foi enviado um email de recuperação<br />' +
		    			'para o endereço informado. Verifique.','Recuperação de senha','sm');
	    		return;
	    	}
	    	if (!user.loginMode) {
	    		ModalBox.notify('Foi enviado um email de confirmação<br />' +
		    			'para o endereço informado. Verifique.','Cadastro efetuado','sm');
	    		return;
	    	}
		    };

		ModalBox.custom({
		      templateUrl: 'html/templates/home/modal.login.tpl.html',
		      controller: 'LoginCtrl',
		      size: null,
		      resolve : {
		    	  isRevalidate : function() { return false; },
		    	  AppService : ['AppService', function(AppService) { return AppService; }],
		    	  UserLogged : ['UserLogged', function(UserLogged) { return UserLogged; }],
		    	  ModalBox : ['ModalBox', function(ModalBox) { return ModalBox; }]
		      }
		    },onLoginOk);
	};

	$scope.onLogout = function() {
		UserProfile.queryPathVariable('/logout', onOkLogout, onErrorLogout, false);
		AppService.secLogout();
		function onOkLogout() {
			$location.path('/');
		}
		function onErrorLogout(data, status, headers, config) {
			console.log("Err logout ", data, status);
			//AppService.notify("msg.process.error", "error", {name : "logout"});
			$location.path('/');
		}
	};

	$scope.onContact = function() {
		ModalBox.custom({
		      templateUrl: 'html/templates/home/modal.contact.tpl.html',
		      controller: 'ContactCtrl',
		      size: null,
		      resolve : {
		    	  AppService : ['AppService', function(AppService) { return AppService; }],
		    	  contactItem : ['Contact', function(Contact) { return new Contact(); }]
		      }
		    },function () {
	    		ModalBox.notify('Sua mensagem foi enviada.<br />' +
		    			'Obrigado :-).',null,'sm');
			    });

	};

	$scope.onInfo = function() {
		switch($location.path()) {
	    case '/':
	    	$location.path("/info");
	        break;
	    case '/crypto':
	    	$location.path("/info/crypto");
	        break;
	    case '/decrypto':
	    	$location.path("/info/decrypto");
	        break;
	    case '/cryptook':
	    	$location.path("/info/crypto");
	        break; // browse
	    case '/browse':
	    	$location.path("/info/browse");
	    	break;
	    default:
	    	$location.path("/info");
	    	break;
		}
	};

}]);



angular.module('home.module').controller('LoginCtrl',
		['$scope','$modalInstance', 'AppService', 'UserLogged', 'ModalBox', 'RsaService', 'isRevalidate',
function ($scope,  $modalInstance,   AppService,   UserLogged,   ModalBox,   RsaService,   isRevalidate) {

	$scope.user = {name : null, password : null, password2: null, loginMode: true, id:null}; // loginMode = true  = login / false=signin

	$scope.isRevalidate = isRevalidate;

	$scope.cancel = function() {
		$modalInstance.dismiss('canceled');
	};

	$scope.onOk = function() {
		if (!$scope.user.name) {
			AppService.notify("msg.invalid.error", "error", {name: "email"}, "#inputEmail3");
			return;
		}
		if (!$scope.user.password) {
			AppService.notify("msg.invalida.error", "error", {name: "senha"}, "#inputPassword3");
			return;
		}
		if (!$scope.user.loginMode) {
			if (!$scope.user.password2) {
				AppService.notify("msg.invalida.error", "error", { name : "confirmação de senha" }, "#inputPassword4");
				return;
			}
			if ($scope.user.password != $scope.user.password2) {
				AppService.notify("msg.password.confirm.error", "error", {}, "#inputPassword4");
				return;
			}
		}
		$scope.save();
	};

	$scope.save = function(){
		if ($scope.user.loginMode) {
    		processLogin();
    	} else {
    		processSignin();
    	}
	};

	function processLogin() {
		var userLogged = new UserLogged();
		userLogged.login = $scope.user.name;
		userLogged.password = RsaService.encrypt($scope.user.password);  // crypto
//		userLogged.password = $scope.user.password;
		userLogged.loginType = 0; // email

		userLogged.$postService('login', onLoginOk, onLoginErr);
	}

	function onLoginOk(userLoggedDto, status, headers, config) {
		if (!userLoggedDto) {
			AppService.notify("msg.login.error", "error", {}, "#inputEmail3");
			return;
		}
		if (!userLoggedDto.username) {
			AppService.notify("msg.login.error", "error", {}, "#inputEmail3");
			return;
		}
		AppService.secSetUser(userLoggedDto);
		$modalInstance.close($scope.user);
	}

	function onLoginErr(data, status, headers, config) {
		console.log(data);
		console.log(status);
		console.log(headers);
		console.log(config);
		if (status == 401) {
			AppService.notify('msg.login.invalid', "error", {}, "#inputEmail3");
			return;
		}
		AppService.notify("msg.login.error", "error", {}, "#inputEmail3");
	}

	function processSignin() {
		var userLogged = new UserLogged();
		userLogged.login = $scope.user.name;
		userLogged.password = RsaService.encrypt($scope.user.password);
//		userLogged.password = $scope.user.password;
		userLogged.loginType = 0; // email

		userLogged.$postService('signin', onSignOk, onSignErr);

	}

	function onSignOk(restDto, status, headers, config) {
		if (!restDto) {
			AppService.notify("msg.save.error", "error", {name: "o email"}, "#inputEmail3");
			return;
		}
		if (restDto.msg) {
			AppService.notify(restDto.msg, "error", {}, "#inputEmail3");
			return;
		}
		if (!restDto.id) {
			AppService.notify("msg.save.error", "error", {name: "o email!"}, "#inputEmail3");
			return;
		}
		$scope.user.id = restDto.id; // sucesso
		$modalInstance.close($scope.user);
	}
	function onSignErr(data, status, headers, config) {
		console.log(data, status, headers, config);
		AppService.notify("msg.save.error", "error", {name: "o email."}, "#inputEmail3");
	}

	$scope.hitEnterUser = function(evt) {
		if (angular.equals(evt.keyCode, 13) && $scope.user.name) {
			$("#inputPassword3").focus();
		}
	};

	$scope.hitEnterPassword = function(evt) {
		if (angular.equals(evt.keyCode, 13) && $scope.user.password) {
			if ($scope.user.loginMode) {
				$scope.onOk();
			} else {
				$("#inputPassword4").focus();
			}
		}
	};

	$scope.hitEnterPassword2 = function(evt) {
		if (angular.equals(evt.keyCode, 13) && $scope.user.password) {
			$scope.onOk();
		}
	};

	$scope.signin = function() {
		if ($scope.user.loginMode) {
			$scope.user.loginMode = false;
		} else {
			$scope.user.loginMode = true;
		}
	};

	$scope.facebook = function() {
		var path = window.location.href;
		var callBack = "http://www.7chaos.com/html/oauth/facecallback.html";
		if (environment == "des") {
			callBack = "http://localhost:7070/html/oauth/facecallback.html";
		}
		if (environment != "prod" && environment != "apk") {
			environment = environment + "_" + environment_inic;
		}
		var urlTo = "https://www.facebook.com/dialog/oauth?client_id=1503208176588180&redirect_uri=" + callBack + "&state=crypto/html/index.html" + "_" + environment + "&response_type=token";
		if (environment != "apk") {
			window.location.href = urlTo;
		} else { // apk :
			var ref = cordova.InAppBrowser.open(urlTo, '_blank', 'location=no');
			ref.addEventListener('loadstart', function(event) {
				if((event.url).startsWith(callBack)) {
					requestToken = (event.url).split("access_token=")[1];
			        requestToken = requestToken.split("&")[0];
			        ref.close();
			        $.ajax({
			          type: 'GET',
					  dataType: 'json',
					  url: 'https://graph.facebook.com/me?access_token=' + requestToken,
					  success: function (resp) {
					  	var user = resp;
				        var userOauth = {};

				        userOauth.loginType=1;
				        userOauth.token=requestToken;
				        userOauth.id=user.id;
				        userOauth.email=user.email;
				        userOauth.verifiedEmail=user.verified;
				        userOauth.name=user.name;
				        userOauth.givenName=user.first_name;
				        userOauth.familyName=user.last_name;
				        userOauth.gender=user.gender;
				        userOauth.link=user.link;

					  	UserLogged.postData('/loginoauth', userOauth, onloginOauthOk, onloginOauthErr, false);
					  },
					  error: function (request, error) {
				        console.log("valid user error req=",req,error);
				        AppService.notify("msg.process.error", "error", {name: "login"});
				    	}
					});
				}
			});
		}
	};

	$scope.google = function() {
		var path = window.location.href;
		var callBack = "http://www.7chaos.com/html/oauth/oauth2callback.html";
		if (environment == "des") {
			callBack = "http://localhost:7070/html/oauth/oauth2callback.html";
		}
		if (environment != "prod" && environment != "apk") {
			environment = environment + "_" + environment_inic;
		}
		var urlTo = "https://accounts.google.com/o/oauth2/auth?scope=email&state=crypto/html/index.html" + "_" + environment + "&redirect_uri=" + callBack + "&client_id=976809327431-mq6c2hprmhrd4qrmk7luulhvpkjeptju.apps.googleusercontent.com&response_type=token";
		if (environment != "apk") {
			window.location.href = urlTo;
		} else { // apk :
			var ref = cordova.InAppBrowser.open(urlTo, '_blank', 'location=no');
			ref.addEventListener('loadstart', function(event) {
			    if((event.url).startsWith(callBack)) {
			        requestToken = (event.url).split("access_token=")[1];
			        requestToken = requestToken.split("&")[0];
			        ref.close();
			        $.ajax({
			          type: 'GET',
					  dataType: 'json',
					  url: 'https://www.googleapis.com/oauth2/v1/userinfo?access_token=' + requestToken,
					  success: function (resp) {
					  	var user = resp;
				        var userOauth = {};

				        userOauth.loginType=2;
				        userOauth.token=requestToken;
				        userOauth.id=user.id;
				        userOauth.email=user.email;
				        userOauth.verifiedEmail=user.verified_email;
				        userOauth.name=user.name;
				        userOauth.givenName=user.given_name;
				        userOauth.familyName=user.family_name;
				        userOauth.gender=user.gender;
				        userOauth.link=user.link;
				        userOauth.picture=user.picture;

					  	UserLogged.postData('/loginoauth', userOauth, onloginOauthOk, onloginOauthErr, false);
					  },
					  error: function (request, error) {
				        console.log("valid user error req=",req,error);
				        AppService.notify("msg.process.error", "error", {name: "login"});
				    	}
					});
			    }
			});
		}
	};

	function onloginOauthOk(restDto, status, headers, config) {
		AppService.secSetUser(restDto);
		$modalInstance.close($scope.user);
	}

	function onloginOauthErr(restDto, status, headers, config) {
		console.log('onloginOauthErr,status=' + status, restDto);
		AppService.notify("msg.process.error", "error", {name: "login"});
	}

	$scope.passwordRecover = function() {
		if (!$scope.user.name) {
			AppService.notify("msg.invalid.error", "error", {name: "email"}, "#inputEmail3");
			return;
		}

		ModalBox.confirm("Será gerado um email de recuperação para seu endereço.", null, "sm", onRecOk, onRecCancel);
	};

	function onRecOk() {
		var userLogged = new UserLogged();
		userLogged.login = $scope.user.name;
		userLogged.loginType = 0; // email
		userLogged.$postService('passrecover', onPassRecOk, onPassRecErr);
	}
	function onRecCancel() {
		return;
	}

	function onPassRecOk(restDto, status, headers, config) {
		if (!restDto) {
			AppService.notify("msg.process.error", "error", {name: "recuperação de senha."}, "#inputEmail3");
		}
		if (restDto.msg) {
			AppService.notify(restDto.msg, "error", {}, "#inputEmail3");
			return;
		}
		if (!restDto.id) {
			AppService.notify("msg.process.error", "error", {name: "recuperação de senha."}, "#inputEmail3");
			return;
		}
		$scope.user.id = restDto.id; // sucesso
		$scope.user.passRec=true;
		$modalInstance.close($scope.user);
	}
	function onPassRecErr(data, status, headers, config) {
		AppService.notify("msg.process.error", "error", {name: "recuperação de senha."}, "#inputEmail3");
	}

}]);


angular.module('home.module').controller('ContactCtrl',
				['$scope','$modalInstance', 'AppService', 'contactItem',
function ($scope,  $modalInstance,   AppService,   contactItem) {

	$scope.user = {emailAddr : null, message : null};

	var userLogged = AppService.secGetUser();
	if (userLogged) {
		if (userLogged.email) {
			$scope.user.emailAddr = userLogged.email;
		}
	}

	$scope.cancel = function() {
		$modalInstance.dismiss('canceled');
	};

	$scope.onOk = function() {
		if (!$scope.user.emailAddr) {
			AppService.notify("msg.invalid.error", "error", {name: "email"}, "#inputEmail3");
			return;
		}
		if (!$scope.user.message) {
			AppService.notify("msg.invalida.error", "error", {name: "mensagem"}, "#message");
			return;
		}
		$scope.save();
	};

	$scope.save = function(){
		contactItem.msg = $scope.user.message;
		contactItem.email = $scope.user.emailAddr;
		contactItem.$save(onContactOk, onContactErr);
	};
	function onContactOk(result, status, headers, config) {
		$modalInstance.close();
	}
	function onContactErr(result, status, headers, config) {
		console.log("onContactErr", result, status, headers, config);
		AppService.notify("msg.process.error", "error", {name: "envio"}, "#message");
	}
}]);
