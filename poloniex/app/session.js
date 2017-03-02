// Establish a session object
var request=require('request');
// var config=require('../app/config').get();
var sessionList=[];
var anonymous={username:'anonymous'};

exports.init=function(req,res,next) {
	req.session=anonymous;
	if (req.url.indexOf('/api/')!==0) {
		next();
		return;
	}
	return processToken(req,res,next);
};

exports.get=function(req){
	var authToken=req.headers['x-auth-token'];
	if (!authToken){
		return anonymous;
	}
	var sess = sessionList[authToken];
	if (sess){
		return sess;
	}
	return anonymous;
};

exports.hasRole=function(req,roles){
	return hasRole(req,roles);
};

exports.validRole=function(req,res,roles){
	var authToken=req.headers['x-auth-token'];
	if (!authToken) {
		res.status(401).send('Unauthorized');
		return false;
	}
	if (!hasRole(req,roles)){
		res.status(403).send('Forbidden');
		return false;
	}
	return true;
};

var hasRole=function(req,roles){
	var authToken=req.headers['x-auth-token'];
	if (!authToken){
		return false;
	}
	var user=sessionList[authToken];
	if (!user){
		return false;
	}

	var roleList = [];
	if (Array.isArray(roles)) {
		for (var i=0; i<roles.length; i++) {
			roleList.push(roles[i]);
		}
	} else {
		roleList.push(roles);
	}
	for (var k=0; k<roleList.length; k++) {
		for (var j=0; j<user.authorities.length; j++) {
			if (roleList[k]==user.authorities[j].authority) {
				return true;
			}
		}
	}
	return false;

};

// AUTH token
function processToken(req,res,next) {
	var authToken=req.headers['x-auth-token'];
	if (!authToken){
		// res.status(401).send('Unauthorized');
		next();
		return;
	}
	//console.log('authToken',authToken);
	if (sessionList[authToken]){
		req.session=sessionList[authToken];
		next();
		return;
	}

  return accessToken(req,res,next);
}

function accessToken(req,res,next){
	var authToken=req.headers['x-auth-token'];
	var url = 'http://www.7chaos.com/api/userlogged/user';
  var headers={'x-auth-token':authToken};
  request.get({
			url: url,
	    headers:headers,
	    json: true
	  }, function (error, response, body) {
	    if (!error && response.statusCode === 200) {
				sessionList[authToken]=body;
				req.session=body;
				next();
	    } else {
	      //console.error('accessToken, status='+response.statusCode,error,authToken);
				res.status(403).send('Forbidden');
				//next();
	    }
	});
}
/*
{ username: 'rubz@ig.com.br',
  enabled: 1,
  authorities:
   [ { authority: 'ROLE_ADM' },
     { authority: 'ROLE_ADM_ROCK' },
     { authority: 'ROLE_USER' } ],
  id: '25790056-6774-48d5-8cbc-0b0f3f6f7c14',
  status: 1,
  email: 'rubz@ig.com.br',
  name: 'rubz',
  loginType: 0,
  dtAtiv: 1433296318000,
  givenName: 'rubens',
  uuid: '764489ce-a786-403f-865d-6a32c3bc9e27' }tb
*/
