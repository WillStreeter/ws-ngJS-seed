import template from './register.html';
import './register.scss';

const registerComponent = {
  bindings: {
    userType: '<',
  },
  template,
  controller: class RegisterComponent {
    constructor($state, AuthService) {
      'ngInject';

      this.name = 'register';
      this.$state = $state;
      this.authService = AuthService;
    }

    register(event) {
      let createUser;

      if (this.userType === 'customer') {
        createUser = this.authService.createCustomer(event.credentials);
      }
      createUser.then((response) => this.authService.login(event.credentials));
    }

    cancel() {
      this.$state.go('auth.login');
    }
  }
};

export default registerComponent;