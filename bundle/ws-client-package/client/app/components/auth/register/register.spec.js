import authRegister from './auth-register.module'
// import authRegisterController from './auth-register.controller';
import authRegisterComponent from './auth-register.component';
import authRegisterTemplate from './auth-register.html';

describe('authRegister', () => {
  let $rootScope, makeController;

  beforeEach(window.module(authRegister));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new authRegisterController();
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
      expect(authRegisterTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = authRegisterComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(authRegisterTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(authRegisterController);
      });
  });
});
