angular.module('plnx.module', ['service.wsconnect']);

angular.module('plnx.module').config(
		['$routeProvider',
function ($routeProvider) {

	$routeProvider.when('/plnx', {
		templateUrl: 'html/templates/plnx/plnx.tpl.html',
	    controller:'PolnxCtrl'
	  });
}]);

//Pagina Home (controller tambem usado para revalidacao de login)
angular.module('plnx.module').controller('PolnxCtrl',
		['$scope','$http','$location','WSService',
function ($scope,  $http,  $location,  WSService) {

	// _.each([1,2,3],function(o){ console.log('o=',o); });

	$scope.usbc=[];
	$scope.tick = {last:999,lowestAsk:999,highestBid:999,high24hr:999,low24hr:999};

	var plnxInterval, requestDate;
	var tickCount=0;

	$scope.onStart = function(){
		// WSService.start([{name:'ticker', event:tickerEvent}]);
		plnxInterval = setInterval(function(){
			requestTick();
		},1000);
	};
	
	$scope.onStop = function(){
		// WSService.stop();
		clearInterval(plnxInterval);
	};
	
	function requestTick() {
		var jqxhr = $.get( 'https://poloniex.com/public?command=returnTicker', function(ret) {
			tickerReturn(ret.USDT_BTC);
			});
	}

	function tickerReturn(data) {
		var obj = data;
		obj.date=new Date();
		obj.currencyPair='USDT_BTC';
		$scope.usbc.push(obj);
		
		// atingiu 100 tira o 1o.
		if ($scope.usbc.length > 100) {
			$scope.usbc.splice(0,1);
		}
		// se mudou atualiza tela
		if (obj.last != $scope.tick.last) {
			$scope.tick = obj;
			$scope.$apply();
		}
	}

	function tickerEvent (args,kwargs) {
		if (args[0]=='USDT_BTC') {
			console.log('### USDT_BTC');
			$scope.usbc.push({date:new Date(),currencyPair:args[0],
				last:args[1],lowestAsk:args[2],highestBid:args[3],percentChange:args[4],baseVolume:args[5],
				quoteVolume:args[6],isFrozen:args[7],high24Hs:args[8],low24Hs:args[9]});
			$scope.last=args[1];
			$scope.lowestAsk=args[2];
			$scope.highestBid=args[3];
			$scope.high24Hs=args[8];
			$scope.low24Hs=args[9];
			// atingiu 100 tira o 1o.
			if ($scope.usbc.length > 100) {
				$scope.usbc.splice(0,1);
			}
		}
	}
}]);
