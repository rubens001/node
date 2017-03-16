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
		['$scope', '$location','WSService',
function ($scope,   $location,  WSService) {

	// _.each([1,2,3],function(o){ console.log('o=',o); });

	$scope.usbc=[];
	
	// var wsuri = "wss://api.poloniex.com";
	// var connection = WSService.connect();

	// connection.onopen = function (session) {
	// 	session.subscribe('ticker', tickerEvent);
	// };

	$scope.onStart = function(){
		// connection.open();
		WSService.start([{name:'ticker', event:tickerEvent}]);
	};
	
	$scope.onStop = function(){
		// connection.close();
		WSService.stop();
	};
	
	function tickerEvent (args,kwargs) {
		if (args[0]=='USDT_BTC') {
			console.log('### USDT_BTC');
			$scope.usbc.push({date:new Date(),currencyPair:args[0],
				last:args[1],lowestAsk:args[2],highestBid:args[3],percentChange:args[4],baseVolume:args[5],
				quoteVolume:args[6],isFrozen:args[7],high24Hs:args[8],low24Hs:args[9]});
			if ($scope.usbc.length > 100) {
				$scope.usbc.splice(0,1);
			}
		}
	}
}]);
