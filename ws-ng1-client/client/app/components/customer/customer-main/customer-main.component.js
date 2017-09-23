import template from './customer-main.html';
import './customer-main.scss';

const customerMainComponent = {
  template,
  controller: class CustomerMainComponent {
    constructor($state, $mdMedia, AuthService, $mdSidenav) {
      'ngInject';

      this.authService = AuthService;
      this.$state = $state;
      this.$mdMedia = $mdMedia;
      this.$mdSidenav = $mdSidenav;
    }

    openSidenav() {
      this.$mdSidenav('customer-sidenav').toggle();
    }

    get userName() {
      return this.authService.authData.name;
    }

    get pageTitle() {
      return this.$state.current.data.pageTitle;
    }

    get isMainToolbarShown() {
      if (this.$mdMedia('xs')) {
        // Don't show on small screens 
        // if current state is child of 'customer.hotels'
        return !this.$state.includes('customer.hotels.*');
      }
      else return true;
    }

    get isSearchToolbarShown() {
      return this.$state.includes('customer.hotels');
    }
  }
};

export default customerMainComponent;