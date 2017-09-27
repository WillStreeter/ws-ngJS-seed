import auth from './auth.module'
// import authController from './auth.controller';
// import authComponent from './auth.component';
// import authTemplate from './auth.html';

describe('auth', () => {
  let $rootScope, makeController;

  beforeEach(window.module(auth));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new authController();
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
      expect(authTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  // describe('Component', () => {
  //     // component/directive specs
  //     let component = authComponent;

  //     it('includes the intended template',() => {
  //       expect(component.template).to.equal(authTemplate);
  //     });

  //     it('invokes the right controller', () => {
  //       expect(component.controller).to.equal(authController);
  //     });
  // });
});
