import loadingBar from 'angular-loading-bar';
import ngMaterial from 'angular-material';
import angularAnimate from 'angular-animate';
import ngMap from 'ngmap';
import ngFileUpload from 'ng-file-upload';
import ngMessages from 'angular-messages';
import ngInfiniteScroll from 'ng-infinite-scroll';
import readMore from 'angular-read-more';
import ngSanitize from 'angular-sanitize';
import ngStorage from 'ngstorage';

import mainToolbar from './main-toolbar/main-toolbar.module';
import searchToolbar from './search-toolbar/search-toolbar.module';
import infiniteFactory from './infinite.factory';


const commonModule = angular.module('app.common', [
  searchToolbar,
  mainToolbar,
  ngMaterial,
  angularAnimate,
  loadingBar,
  ngMap,
  ngFileUpload,
  ngMessages,
  ngInfiniteScroll,
  readMore,
  ngSanitize,
  'ngStorage'
])
  .config(($mdThemingProvider, cfpLoadingBarProvider) => {
    "ngInject";

    cfpLoadingBarProvider.includeSpinner = false;
    // cfpLoadingBarProvider.spinnerTemplate = '<div><span class="fa fa-spinner">Custom Loading Message...</div>';
    cfpLoadingBarProvider.parentSelector = '#loading-bar-container';

    $mdThemingProvider.theme('default')
      .primaryPalette('teal')
      .accentPalette('brown');
  })
  .factory('InfiniteFactory', infiniteFactory)
  .name;



export default commonModule;
