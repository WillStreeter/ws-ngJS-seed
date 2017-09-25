import registerFormComponent from './register-form.component';

const registerForm = angular
  .module('components.auth.register-form', [])
  .component('registerForm', registerFormComponent)
  .name;

export default registerForm;
