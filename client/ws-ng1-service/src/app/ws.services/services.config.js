
(function () {
  'use strict';
  /**
   * @ngdoc object
   * @name app.account:cfgAccountRoute
   *
   * @requires
   * @propertyOf app.account
   *
   * @description
   * State definitions and configuration for the account module
   */

  angular
  .module('ws.services')
  .config(WSConfigServices)
  .run(WSCoreServicesRunBlock);


   function WSConfigServices() {
   }

   WSCoreServicesRunBlock.$inject = ['UserServicesFactory'];

   function WSCoreServicesRunBlock(UserServicesFactory){
     //MdoApiServices();
   }

})();
