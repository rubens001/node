/*
 * Tratamento de timeout, 403, metodos padrao para $save, $delete, etc
 * */
angular.module('restResource', []).factory('restResource',
				['APP_CONFIG','$http','$q','LoginService','AppService','$location',
function (APP_CONFIG,  $http,  $q,  LoginService,  AppService,  $location) {

  function restResourceFactory(substantive,baseUrl) {

    var url = APP_CONFIG.baseUrl;
		if (baseUrl) { // rbz @@@ assume url do contrutor se informado
			url=baseUrl;
		}
    var defaultParams = {};

    var thenFactoryMethod = function (httpPromise, successcb, errorcb, isArray, isFilter) {
      var successFn = successcb || angular.noop;
      var errorFn = errorcb || angular.noop;

      if (typeof isFilter == 'undefined') {
    	  isFilter = false;
  		}

      return httpPromise.then(function (response) {
    	  if (!response) {
    		  return;
    	  }
    	  AppService.lockScreen(false);
        var result;
        if (isFilter) {
        	result = {pageableFilter: response.data.pageableFilter, list:[]};
        	if (response.data.list) {
        		for (var i = 0; i < response.data.list.length; i++) { // pageableFilter.totalRows
    	            result.list.push(new Resource(response.data.list[i]));
    	          }
        	}
        } else {
	        if (isArray) {
	          result = [];
	          for (var i1 = 0; i1 < response.data.length; i1++) {
	            result.push(new Resource(response.data[i1]));
	          }
	        } else {
	          //Resource rest full has rather peculiar way of reporting not-found items, I would expect 404 HTTP response status...
	          if (!response || !response.data || response.data === " null "){
	            return $q.reject({
	              code:'resource.notfound',
	              collection:substantive
	            });
	          } else {
	            result = new Resource(response.data);
	          }
	        }
        }
        successFn(result, response.status, response.headers, response.config);
        return result;
      }, function (response) {
    	  AppService.lockScreen(false);
    	  if(response){
    		  if (response.status == 403 || response.status == 401) {
    			  //LoginService.dialog();
						$location.path('/');
    		  }
    		  errorFn(response.data, response.status, response.headers, response.config);
    	  }
        return undefined;
      });
    };

    var Resource = function (data) {
      angular.extend(this, data);
    };

    // retorna lista sem filtro
    Resource.get = function (successcb, errorcb, isArray) {
			if (isArray===undefined) {
				isArray=true;
			}
    	AppService.lockScreen(true);
    	var httpPromise = $http.get(url.concat('/').concat(substantive) );
        return thenFactoryMethod(httpPromise, successcb, errorcb, isArray);
//      return Resource.query({}, cb, errorcb);
    };

    // assume que sera retornada uma LIST, se desejar utilizar este metodo para retornar
    // um objeto, passar parametro isList=FALSE
    Resource.queryPathVariable = function (pathVariable, successcb, errorcb, isList) {
    	AppService.lockScreen(true);
    	if (isList === undefined) {
    		isList = true;
    	}
      var httpPromise = $http.get(url.concat('/').concat(substantive).concat(pathVariable));
      return thenFactoryMethod(httpPromise, successcb, errorcb, isList);
    };

    // query com parametro object em json
    // TODO: podia deixar parametro no final opcional
    Resource.query = function (queryJson, successcb, errorcb) {
    	AppService.lockScreen(true);
      var params = angular.isObject(queryJson) ? {q:JSON.stringify(queryJson)} : {};
      var httpPromise = $http.get(url.concat('/').concat(substantive), {params:angular.extend({}, defaultParams, params)});
      return thenFactoryMethod(httpPromise, successcb, errorcb, true);
    };

    Resource.filter = function (filterObj, successcb, errorcb, substantiveCustom) {
    	AppService.lockScreen(true);
    	if (typeof filterObj.rowsPerPage == 'undefined') {
    		filterObj.rowsPerPage = APP_CONFIG.rowsPerPage; // assume qtd linhas constant
    	}
    	var params = angular.isObject(filterObj) ? {filters:JSON.stringify(filterObj)} : {};
    	var httpPromise;
    	if (substantiveCustom === undefined) {
    		httpPromise = $http.get(url.concat('/').concat(substantive).concat('/filter'), {params:angular.extend({}, defaultParams, params)});
    	} else {
    		httpPromise = $http.get(url.concat('/').concat(substantive).concat(substantiveCustom).concat('/filter'), {params:angular.extend({}, defaultParams, params)});
    	}
        return thenFactoryMethod(httpPromise, successcb, errorcb, false, true);
      };

//    Resource.filterCustom = function (filterObj,substantiveCustom , successcb, errorcb) {
//	  	if (typeof filterObj.rowsPerPage == 'undefined') {
//	  		filterObj.rowsPerPage = APP_CONFIG.rowsPerPage; // assume qtd linhas constant
//	  	}
//	  	var params = angular.isObject(filterObj) ? {filters:JSON.stringify(filterObj)} : {};
//	      var httpPromise = $http.get(url.concat('/').concat(substantive).concat(substantiveCustom).concat('/filter'), {params:angular.extend({}, defaultParams, params)});
//	      return thenFactoryMethod(httpPromise, successcb, errorcb, false, true);
//    };

    Resource.getById = function (id, successcb, errorcb) {
    	AppService.lockScreen(true);
      var httpPromise = $http.get(url.concat('/').concat(substantive) + '/' + id, {params:defaultParams});
      return thenFactoryMethod(httpPromise, successcb, errorcb);
    };

    Resource.getByIds = function (ids, successcb, errorcb) {
    	AppService.lockScreen(true);
      var qin = [];
      angular.forEach(ids, function (id) {
         qin.push({$oid: id});
      });
      return Resource.query({_id:{$in:qin}}, successcb, errorcb);
    };

    Resource.removeVariable = function (successcb, errorcb, pathDelete, id) {
    	AppService.lockScreen(true);
        var httpPromise = $http['delete'](url.concat('/').concat(substantive) + "/" + pathDelete + "/" + id, {params:defaultParams});
        return thenFactoryMethod(httpPromise, successcb, errorcb);
    };

    Resource.postData = function (pathVariable, data, successcb, errorcb, isArray) {
    	var httpPromise;
	  	httpPromise = $http.post(url.concat('/').concat(substantive).concat(pathVariable), data);
        return thenFactoryMethod(httpPromise, successcb, errorcb, isArray);
      };

	Resource.putData = function (pathVariable, data, successcb, errorcb) {
	  var httpPromise = $http.put(url.concat('/').concat(substantive).concat(pathVariable), data);
	  return thenFactoryMethod(httpPromise, successcb, errorcb);
	};

    Resource.removeAll = function (elements, successcb, errorcb) {
        	AppService.lockScreen(true);
        	var params = {list:JSON.stringify(elements)};
        	var httpPromise;
        	httpPromise = $http['delete'](url.concat('/').concat(substantive).concat('/deleteall'), {params:angular.extend({}, defaultParams, params)});
            return thenFactoryMethod(httpPromise, successcb, errorcb, false, false);
          };

    Resource.pagination = function (scope, result, fnRefresh, substantiveCustom) {
    	var thisResource = this;

    	if (!(scope.calcPagination)) {
    		scope.calcPagination = function (resultado) {
    			if(resultado){
    			  scope.currentPage = resultado.pageableFilter.page;
    			  scope.numPages = parseInt((resultado.pageableFilter.totalRows -1) / resultado.pageableFilter.rowsPerPage) + 1;
    			}
    		  };
    	}
    	if (!(scope.selectPage)) {
    		scope.selectPage = function(page){
    			result.pageableFilter.page = page;
    			thisResource.filter(result.pageableFilter, substantiveCustom).then(function(newResult) {
    				fnRefresh(newResult);
    				scope.calcPagination(newResult);
    			  });
    		};
    	}
    	scope.calcPagination(result);
    };

    //instance methods

    Resource.prototype.$id = function () {
      if (this.id) {
        return this.id;
      }
    };

    Resource.prototype.$postService = function (pathVariable, successcb, errorcb) {
    	AppService.lockScreen(true);
        var httpPromise = $http.post(url.concat('/').concat(substantive).concat('/').concat(pathVariable), this); // , {timeout:2000}
        return thenFactoryMethod(httpPromise, successcb, errorcb, false);
      };

    Resource.prototype.$save = function (successcb, errorcb) {
    	AppService.lockScreen(true);
      var httpPromise = $http.post(url.concat('/').concat(substantive), this); // , {params:defaultParams}
      return thenFactoryMethod(httpPromise, successcb, errorcb, false);
    };

    Resource.prototype.$saveAll = function (successcb, errorcb, elements) {
    	AppService.lockScreen(true);
        var httpPromise = $http.post(url.concat('/').concat(substantive).concat('/saveall'), elements);
        return thenFactoryMethod(httpPromise, successcb, errorcb);
      };

    Resource.prototype.$update = function (successcb, errorcb) {
    	AppService.lockScreen(true);
      var httpPromise = $http.put(url.concat('/').concat(substantive) + "/" + this.$id(), angular.extend({}, this, {_id:undefined})); // , {params:defaultParams}
      return thenFactoryMethod(httpPromise, successcb, errorcb);
    };

    Resource.prototype.$remove = function (successcb, errorcb) {
    	AppService.lockScreen(true);
      var httpPromise = $http['delete'](url.concat('/').concat(substantive) + "/" + this.$id()); // , {params:defaultParams}
      return thenFactoryMethod(httpPromise, successcb, errorcb);
    };

    Resource.prototype.$saveOrUpdate = function (successcb, errorcb) {
        if (this.$id()) {
          return this.$update(successcb, errorcb);
        } else {
          return this.$save(successcb, errorcb);
        }
      };

    return Resource;
  }
  return restResourceFactory;
}]);
