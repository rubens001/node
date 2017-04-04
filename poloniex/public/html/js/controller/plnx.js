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

	theChart1=null;
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
		if ($scope.usbc.length > 5) { // @@@ 100
			$scope.usbc.splice(0,1);
		}
		// se mudou atualiza tela
		if (obj.last != $scope.tick.last) {
			$scope.tick = obj;
			$scope.$apply();
		}

		var dataNew = _.map($scope.usbc, function(val,key){return val.last;})
		if (dataNew.length == 5) {
			showChart1(dataNew);
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
			if ($scope.usbc.length > 5) { // @@@ 100
				$scope.usbc.splice(0,1);
			}
		}
	}

	setTimeout(function(){ showChart1(null); }, 1000);

	// chartContainer1
	function showChart1(data) {
		// if (!data || data.length != 5) { // @@@ 100
		// 	return;
		// }
		if (!data) { data = [1034.99999983, 1034.99999983, 1034.99999985, 1034.99999985, 1034.99999985];} // 1034.99999983, 1034.99999983, 1034.99999985, 1034.99999985, 1034.99999985
		if (theChart1) { 
			// theChart1.series[0].update({data:data});
			theChart1.yAxis[0].isDirty = true;
			theChart1.series[0].setData(data,true);
			// theChart1.redraw();
			return;
		}
		theChart1 = Highcharts.chart('chartContainer1', {
			credits: {
				enabled: false
			},
			title: {
				text: 'last 100 USDT_BTC'
			},

			subtitle: {
				text: 'Source: Poloniex.com'
			},

			yAxis: {
				title: {
					text: 'lasts'
				}
			},
			legend: {
				layout: 'vertical',
				align: 'right',
				verticalAlign: 'middle'
			},

			plotOptions: {
				series: {
					pointStart: 1, animation: false
				}
			},

			series: [{
				name: 'evolution',
				data: data
			}]

		});
	}

}]);
// dentro de series :
//, {name: 'last hour',
//	data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434] }

// pointStart: 2010