import authLogin from './auth-login.module'
// import authLoginController from './auth-login.controller';
import authLoginComponent from './auth-login.component';
import authLoginTemplate from './auth-login.html';

describe('authLogin', () => {
  let $rootScope, makeController;

  beforeEach(window.module(authLogin));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new authLoginController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(authLoginTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = authLoginComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(authLoginTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(authLoginController);
      });
  });
});
