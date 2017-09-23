import customerMainComponent from './customer-main.component';

const customerMain = angular
  .module('components.customer.customer-main', [])
  .component('customerMain', customerMainComponent)
  .name;

export default customerMain;
