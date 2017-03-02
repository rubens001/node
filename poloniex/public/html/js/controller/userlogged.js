angular.module('userlogged.module', ['resources.userlogged', 'resources.profile']);

angular.module('userlogged.module').config(['$routeProvider',
function (routeProvider) {

	routeProvider.when('/userlogged', {
		templateUrl:'html/templates/userlogged/userlogged.tpl.html',
	    controller:'UserLoggedCtrl',
	    resolve : {
			userLoggedList : ['UserLogged', function (UserLogged) {
		    	  return UserLogged.filter({page:1, rowsPerPage:5,
		    		  paramsFilter:[{param:'active', valueParam:1, operator:'eq' } ]
		    	  } );
			} ]
		}
	  });

	routeProvider.when('/userlogged/profile', {
		templateUrl:'html/templates/userlogged/userlogged.profile.tpl.html',
	    controller:'UserLoggedProfileCtrl',
	    resolve : {
	    	userProfile : ['UserProfile', function (UserProfile) {
	    		return UserProfile.queryPathVariable('/get',null,null,false);
	    	}]
	    }
	  });
}]);

angular.module('userlogged.module').controller('UserLoggedCtrl',
		['$scope', 'UserLogged', 'userLoggedList',
function ($scope,   UserLogged,   userLoggedList) {
	$scope.userLoggedList=userLoggedList.list;
}]);

angular.module('userlogged.module').controller('UserLoggedProfileCtrl',
		['$scope', 'userProfile', 'AppService', '$location', 'RsaService', 'UserProfile',
function ($scope,   userProfile,   AppService,   $location,   RsaService,   UserProfile) {

	$scope.userProfileItem = userProfile;

	$scope.editMode = false;
	$scope.editPassword = false;
	$scope.newPassword2 = null;

	if ($scope.userProfileItem.loginType === 0) {
		$scope.loginType = "email";
	}

	switch($scope.userProfileItem.loginType) {
    case 0:
    	$scope.loginType = "email";
        break;
    case 1:
    	$scope.loginType = "facebook";
        break;
    case 2:
    	$scope.loginType = "google";
        break;
    default:
    	$scope.loginType = "???";
	}

	$scope.onConfirm = function() {
		if ($scope.editMode) {
			if (!$scope.userProfileItem.givenName) {
				AppService.notify("msg.invalid.error", "error", {name: "Nome de exibição"}, "#idGivenName");
				return;
			}
		}
		if ($scope.editPassword) {
			if (!$scope.userProfileItem.password) {
				AppService.notify("msg.invalid.error", "error", {name: "Senha atual"}, "#idPassAtu");
				return;
			}
			if (!$scope.userProfileItem.newPassword) {
				AppService.notify("msg.invalida.error", "error", {name: "Nova senha"}, "#idPassTo1");
				return;
			}
			if (!$scope.newPassword2) {
				AppService.notify("msg.invalida.error", "error", {name: "confirmação senha"}, "#idPassTo2");
				return;
			}
			if ($scope.newPassword2 != $scope.userProfileItem.newPassword) {
				AppService.notify("msg.password.confirm.error", "error", {}, "#idPassTo1");
				return;
			}
		}

		// move dados para entidade
		var userProfileTo = new UserProfile();
		userProfileTo.givenName = null;
		userProfileTo.password = null;
		userProfileTo.newPassword = null;

		if ($scope.editMode) {
			userProfileTo.givenName = $scope.userProfileItem.givenName;
		}
		if ($scope.editPassword) { // crypto
			userProfileTo.password = RsaService.encrypt($scope.userProfileItem.password);
			userProfileTo.newPassword = RsaService.encrypt($scope.userProfileItem.newPassword);
		}
		userProfileTo.$postService('update', onUpdateOk, onUpdateError);

		function onUpdateOk(restDto, status, headers, config) {
			var idErr = "#idGivenName";
			if ($scope.editPassword) {
				idErr = "#idPassAtu";
			}
			if (!restDto) {
				AppService.notify("msg.save.error", "error", {name: "o perfil"}, idErr);
				return;
			}
			if (restDto.msg) {
				AppService.notify(restDto.msg, "error", {}, idErr);
				return;
			}
			if (!restDto.id) {
				AppService.notify("msg.save.error", "error", {name: "o perfil!"}, idErr);
				return;
			}

			// alt de nome de exibicao
			if ($scope.editMode) {
				var userAtu = AppService.secGetUser();
				userAtu.givenName = $scope.userProfileItem.givenName;
				AppService.secSetUser(userAtu);
			}

			AppService.notify("msg.save.success", "success", {name: "perfil"});
			$location.path("/");
		}
		function onUpdateError(result, status, headers, config) {
			var idErr = "#idGivenName";
			if ($scope.editPassword) {
				idErr = "#idPassTo1";
			}
			console.log("onUpdateError", result, status, headers, config);
			AppService.notify("msg.process.error", "error", {name: "alteração de perfil"}, idErr);
		}
	};

	$scope.onCancel = function() {
		$location.path("/");
	};

}]);
