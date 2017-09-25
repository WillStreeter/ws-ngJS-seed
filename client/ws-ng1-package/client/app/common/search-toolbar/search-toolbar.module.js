import searchToolbarComponent from './search-toolbar.component';

const searchToolbar = angular
  .module('common.search-toolbar', [])
  .component('searchToolbar', searchToolbarComponent)
  .name;

export default searchToolbar;
