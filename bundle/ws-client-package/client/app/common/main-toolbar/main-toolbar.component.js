import template from './main-toolbar.html';
import './main-toolbar.scss';

const mainToolbarComponent = {
  bindings: {
    userName: '<',
    pageTitle: '<',
    onMenuOpen: '&',
  },
  template,
  transclude: true,
  controller: class MainToolbarComponent {
    constructor() {
      'ngInject';

      this.name = 'main-toolbar';
    }

    openMainMenu() {
      this.onMenuOpen();
    }
  }
};

export default mainToolbarComponent;