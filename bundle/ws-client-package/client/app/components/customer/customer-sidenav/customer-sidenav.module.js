import customerSidenavComponent from './customer-sidenav.component';

const customerSidenav = angular
  .module('components.customer.customer-sidenav', [])
  .component('customerSidenav', customerSidenavComponent)
  .name;

export default customerSidenav;
