'use strict'
var obj = {id:123,name:"nome Obj",fun:function(){return null;},ee:eval, wwin:require,chut:undefined,nulo:null,nao:NaN};
var obj2 = {id:123,fun:function(){return null;},ee:eval, wwin:require,chut:undefined,nulo:null,nao:NaN,arr:[{id:123}]};
var oo = objFunc([obj2,obj]);
console.log('### 1 ',JSON.stringify(oo));
console.log('### 2 ',JSON.stringify([obj2,obj]));

// return an object transforming it's functions into strings
function objFunc(obj) {
	if (Array.isArray(obj)) {
		return getArr(obj);
	}
	var keys = Object.keys(obj);
	var sobj = {};
	keys.forEach(function(k){
		if (typeof obj[k] == 'function') {
			sobj[k] = obj[k].toString();
		} else if (typeof obj[k] == 'undefined') {
			sobj[k] = undefined;
		} else if (Array.isArray(obj[k])) {
			sobj[k] = getArr(obj[k]);
		} else { // obj not an array
			sobj[k] = obj[k];
		}
	});
	return sobj;
}

function getArr(objArr){
	var arr = [];
	objArr.forEach(function(item) {
		arr.push(objFunc(item));
	});
	return arr;
}
