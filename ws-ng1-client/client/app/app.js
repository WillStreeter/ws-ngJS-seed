import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { trace } from 'angular-ui-router';
import { Visualizer } from '@uirouter/visualizer';

import common from './common/common';
import components from './components/components';
import appComponent from './app.component';
import appConstants from './app.constants';
import services from './services/services';


angular.module('app', [
  uiRouter,
  common,
  components,
  services,
])
  .config(($locationProvider, $urlRouterProvider) => {
    "ngInject";

    // enable ui-router logging
    //trace.enable();

    $locationProvider.html5Mode(true).hashPrefix('!');

    // redirect user to corresponded 'home' page in case invalid url
    // $urlRouterProvider.otherwise(($injector) => {
    //   let userType = $injector.get('AuthService').userType;
    //   console.log('app ---  userType ='+userType)
    //   return userType ? '/' + userType : '/auth/login';
    // });

  })
  // .run(function($uiRouter) {
  //   var pluginInstance = $uiRouter.plugin(Visualizer);
  //  })  
  .constant('AppConstants', appConstants)
  .component('app', appComponent);
