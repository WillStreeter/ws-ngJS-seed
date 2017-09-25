import customerMain from './customer-main/customer-main.module';
import customerHotels from './customer-hotels/customer-hotels.module';
import customerStays from './customer-stays/customer-stays.module';
import customerSidenav from './customer-sidenav/customer-sidenav.module';
import customersService from './customer.service';

const customer = angular
  .module('components.customer', [
    customerMain,
    customerHotels,
    customerStays,
    customerSidenav,
  ])
  .config(($stateProvider) => {
    "ngInject";

    $stateProvider
      .state('customer', {
        url: '/customer',
        redirectTo: 'customer.hotels',      
        data: {
          requiresAuth: true,
          requiresPermission: 'customer',
        },
        component: 'customerMain',
      });
  })  
  .service('CustomersService', customersService)
  .name;

export default customer;
