import mainToolbarComponent from './main-toolbar.component';

const mainToolbar = angular
  .module('common.main-toolbar', [])
  .component('mainToolbar', mainToolbarComponent)
  .name;

export default mainToolbar;
