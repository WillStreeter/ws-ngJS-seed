import loginComponent from './login.component';

const authLogin = angular
  .module('components.auth.login', [])
  .config(($stateProvider) => {
    "ngInject";

    $stateProvider
      .state('auth.login', {
        url: '/login',
        component: 'login',
        // resolve: {
        //   customers(CustomersService) {
        //     return CustomersService.get();
        //   }
        // }
      });
  })
  .component('login', loginComponent)
  .name;

export default authLogin;
