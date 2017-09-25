import template from './login.html';
import './login.scss';

const loginComponent = {
  template,
  bindings: {
    customers: '<'
  },
  controller: class LoginComponent {
    constructor($state, AuthService, PubSubProvider) {
      'ngInject';

      this.name = 'login';
      this.$state = $state;
      this.authService = AuthService;
      this.pubSub = PubSubProvider;
    }

    login(event) {
      this.authService.login(event.credentials);
    }

    createUser(account_type) {
      console.log('[LoginComponent.js]--- createUser - PubSub=',this.pubSub )
      this.$state.go('auth.register', { accountType: account_type });
    }
  }
};

export default loginComponent;