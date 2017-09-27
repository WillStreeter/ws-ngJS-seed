import template from './customer-sidenav.html';
import './customer-sidenav.scss';

const customerSidenavComponent = {
  template,
  controller: class CustomerSidenavComponent {
    constructor($mdSidenav, $state, AuthService) {
      'ngInject';
      this.name = 'customer-sidenav';
      this.$mdSidenav = $mdSidenav;
      this.authService = AuthService;
      this.$state = $state;
    }

    get authData() {
      return this.authService.authData;
    }

    logout() {
      this.closeMainMenu();
      this.authService.logout();
    }

    closeMainMenu() {
      this.$mdSidenav('customer-sidenav').toggle();
    }
  }
};

export default customerSidenavComponent;