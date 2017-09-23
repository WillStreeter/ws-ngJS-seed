import customerHotelsComponent from './customer-hotels.component';

const customerHotels = angular
  .module('components.customer.customer-hotels', [])
  .config(($stateProvider) => {
    "ngInject";

    $stateProvider
      .state('customer.hotels', {
        url: '/hotels?rating&name&favorites',
        data: {
          pageTitle: 'Hotels',
        },    
        params: {
          rating: {
            type: 'int',
            value: null,
            dynamic: false,
          },
          name: {
            value: null,
            dynamic: false,
          },
          favorites: {
            type: 'bool',
            value: null,
            dynamic: false,
            squash: true,
          },
        },
        component: 'customerHotels',
      });
  })
  .component('customerHotels', customerHotelsComponent)
  .name;



export default customerHotels;
