angular.module('service.wsconnect', ['service.app']).factory('WSService', 
		[ 'AppService', '$location',
function ( AppService,   $location) {

	// The return API
	function WSService() { }
	
	WSService.connection=null;
	WSService.session=null;

	WSService.connect = function() {
		var wsuri = "wss://api.poloniex.com";
		if (!WSService.connection || !WSService.isConnected()) {
			WSService.connection = new autobahn.Connection({url:wsuri,realm:"realm1"});

			WSService.connection.onopen = function (session) {
				WSService.session = session;
				if (WSService.subscribes) {
					WSService.subscribes.forEach(function (subscribe) {
						WSService.session.subscribe(subscribe.name, subscribe.event);
					});
				}
			};
		}
		
		return WSService.connection;
	};

	// passar um array de {name:subscribeName, event:method}
	// ex : [{name:'ticker', event:tickerEvent}]
	WSService.start = function(subscribes){
		if (WSService.session) {
			return;
		}
		if (!WSService.connection) {
			WSService.connect();
		}
		
		WSService.subscribes = subscribes;
		WSService.connection.open();
	};
	
	WSService.stop = function(){
		WSService.connection.close();
	};

	// The return API
	return WSService;
} ]);
