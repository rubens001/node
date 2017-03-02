var plnx = require('plnx');

// REF : https://github.com/rferro/plnx

var key = 'MMP3AFAA-3B7BZA7Y-QODOG1R1-FBGVNT40';
var secret = 'a98e6183bd2aee85eb82099e1cecf44d6f962e04a3ea610dba3d82e30bddc26f6d0ac75ecf5b4c08e147a53e58aeef6dc2c2c09023a22d596615b8b21a154be9';

// console.log(plnx.returnAvailableAccountBalances);

function tickerCB(err,data) {
	console.log('tickerCB err=',err);
//	if (data.BTC_ETH) {
//		console.log('data.BTC_ETH=',data.BTC_ETH)
//	}
	if (data.USDT_BTC) {
		console.log('data.USDT_BTC=',data.USDT_BTC)
	}
}

function balanceCB(err, data) {
	console.log('balanceCB err, data=',err, data);
}

// plnx.returnTicker(tickerCB);

// plnx.returnAvailableAccountBalances({key:key,secret:secret},balanceCB);
plnx.returnCompleteBalances({key:key,secret:secret},balanceCB);

