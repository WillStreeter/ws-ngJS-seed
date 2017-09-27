(function(){

  'use strict';

     function UserServicesFactory(HttpAjaxFactory, PubSub, $injector){
       return {
          getLoggedInUser: function (params) {
            return HttpAjaxFactory.httpAjaxRequest({
              url: '',
              mehtod: 'POST',
              headers: '',
              data: JSON.stringify(params)
            });
          }
       }
     }


  angular
    .module('ws.services')
    .service('UserServicesFactory', UserServicesFactory);

     UserServicesFactory.$inject = [ '$injector'];

}());
