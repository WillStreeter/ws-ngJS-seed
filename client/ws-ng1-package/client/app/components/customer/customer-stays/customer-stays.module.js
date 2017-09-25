import customerStaysComponent from './customer-stays.component';

const customerStays = angular
  .module('components.customer.customer-stays', [])
  .config(($stateProvider) => {
    "ngInject";

    $stateProvider
      .state('customer.stays', {
        url: '/stays',
        data: {
          pageTitle: 'My Stays',
        },
        component: 'customerStays',

        // resolving stays in state definition causes ui freezes
        // which is pretty noticeable with side-nav component
        resolve: {
          stays(StaysService) {
            return StaysService.get();
          }
        }
      });
  })
  .component('customerStays', customerStaysComponent)
  .name;

export default customerStays;
