(function(){

  'use strict';

   HttpAjaxFactory.$inject = ['$http', '$q'];

   function HttpAjaxFactory($http, $q){

      return {
        httpAjaxRequest: function (req, cb) {
          var deferred = $q.defer();
          $http(req)
            .success(function (data, status, headers, cfg) {
              if (cb) {
                deferred.resolve(cb({
                  status: status,
                  data: data
                }));
              }
              else {
                deferred.resolve(data);
              }
            })
            .error(function (data, status, headers, cfg) {
              deferred.reject({
                status: status,
                data: data
              });
            });
          return deferred.promise;
        }
      }
    };

  angular
    .module('ws.services')
    .factory('HttpAjaxFactory', HttpAjaxFactory);

})();
