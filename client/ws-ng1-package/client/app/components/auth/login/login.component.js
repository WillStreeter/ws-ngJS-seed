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
      this.user$ = {};
      this.userMdodel$ =  new Rx.Subject();
      this.Subscription = null;

      this.setUp();

      this.userMdodelSub$ = this.userMdodel$.subscribe( (value) =>{
           console.log('[LoginComponent.js]--- apiServiceUpdate -   self.user$=',   value )
           this.user$ = value;
      });

    }




    setUp(){
       let self = this;
       const apiServiceUpdate = function(data){
             self.userMdodel$ = data;
       };

       this.pubSub.subscribe(this.pubSub.pubsubType().apiRemoteUserServicesResponse, apiServiceUpdate, false, 1);

       let dataApiObjects = Object.assign({}, { route : 'user', params:{ } });
       this.dispatch(dataApiObjects);
    }

    dispatch(dataApiObjects){
      this.pubSub.publish(this.pubSub.pubsubType().apiRemoteUserService, dataApiObjects);
    }


    login(event) {
      this.authService.login(event.credentials);
    }

    createUser(account_type) {
       let dataApiObjects = Object.assign({}, {
                                          route : 'user/login',
                                          params:{ user:'something',
                                                   password:'stranger'}
                                        });

      this. dispatch(dataApiObjects);
    }
  }
};

export default loginComponent;