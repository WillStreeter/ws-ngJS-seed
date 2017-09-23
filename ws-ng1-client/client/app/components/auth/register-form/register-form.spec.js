import registerForm from './register-form.module'
// import registerFormController from './register-form.controller';
import registerFormComponent from './register-form.component';
import registerFormTemplate from './register-form.html';

describe('registerForm', () => {
  let $rootScope, makeController;

  beforeEach(window.module(registerForm));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new registerFormController();
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
      expect(registerFormTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = registerFormComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(registerFormTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(registerFormController);
      });
  });
});
