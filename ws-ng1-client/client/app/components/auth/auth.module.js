import loginForm from './login-form/login-form.module';
import registerForm from './register-form/register-form.module';
import login from './login/login.module';
import register from './register/register.module';
import authService from './auth.service';
import { httpInterceptor } from './auth.hooks';
import { authHookRunBlock } from './auth.hooks';
import { errorHookRunBlock } from './auth.hooks';
import { permissionHookRunBlock } from './auth.hooks';


const auth = angular
  .module('components.auth', [
    login,
    loginForm,
    register,
    registerForm
  ])
  .config(($stateProvider, $urlRouterProvider, $httpProvider) => {
    "ngInject";

    // Push unauthorized interceptor
    $httpProvider.interceptors.push(httpInterceptor);

    $stateProvider
    .state('auth', {
            abstract: true,
            url: '/auth',

            // Note: abstract still needs a ui-view for its children to populate.
            // You can simply add it inline here.
            template: '<ui-view/>'
        })
      .state('auth.customer.login', {
             url: '/login',
             component: 'login'
      })
      .state('auth.customer.register', {
             url: '/register',
             component: 'register'
      });
  })
  .service('AuthService', authService)
  // .run(authHookRunBlock)
  // .run(errorHookRunBlock)
  // .run(permissionHookRunBlock)
  .name;

export default auth;
