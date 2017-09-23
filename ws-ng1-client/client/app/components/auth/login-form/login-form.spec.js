import loginForm from './login-form.module'
// import loginFormController from './login-form.controller';
import loginFormComponent from './login-form.component';
import loginFormTemplate from './login-form.html';

describe('loginForm', () => {
  let $rootScope, makeController;

  beforeEach(window.module(loginForm));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new loginFormController();
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
      expect(loginFormTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = loginFormComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(loginFormTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(loginFormController);
      });
  });
});
