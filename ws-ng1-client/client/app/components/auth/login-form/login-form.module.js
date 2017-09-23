import loginFormComponent from './login-form.component';

const loginForm = angular
  .module('components.auth.login-form', [])
  .component('loginForm', loginFormComponent)
  .name;

export default loginForm;
