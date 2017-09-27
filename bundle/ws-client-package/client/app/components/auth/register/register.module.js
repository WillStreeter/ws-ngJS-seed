import registerComponent from './register.component';

const register = angular
  .module('register', [])
  .config(($stateProvider) => {
    "ngInject";

    $stateProvider
      .state('auth.register', {
        url: '/register',
        // params: {
        //   accountType: {
        //     type: 'string',
        //   },
        // },
        component: 'register'
      });
  })
  .component('register', registerComponent)
  .name;

export default register;
