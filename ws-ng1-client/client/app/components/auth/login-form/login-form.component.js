import template from './login-form.html';
import './login-form.scss';

const loginFormComponent = {
  bindings: {
    users: '<',
    onSubmit: '&',
    onRegister: '&',
  },
  template,
  transclude: true,
  controller: class LoginFormComponent {
    constructor() {
      'ngInject';
      this.name = 'login-form';
    }

    submit() {
      this.onSubmit({
        $event: {
          credentials: this.credentials,
        },
      });
    }

    register() {

      console.log(' loginFormComponent register()' )
      this.onRegister();
    }
  }
};

export default loginFormComponent;