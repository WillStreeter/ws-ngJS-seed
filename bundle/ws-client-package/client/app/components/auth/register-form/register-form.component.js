import template from './register-form.html';
import './register-form.scss';

const registerFormComponent = {
  bindings: {
    onSubmit: '&',
    onCancel: '&',
  },
  template,
  controller: class RegisterFormComponent {
    constructor() {
      'ngInject';
      this.name = 'register-form';
    }

    submit() {
      this.onSubmit({
        $event: {
          credentials: this.credentials,
        },
      });
    }
    cancel() {
      this.onCancel();
    }
  }
};

export default registerFormComponent;