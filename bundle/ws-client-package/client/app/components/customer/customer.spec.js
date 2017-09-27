import customer from './customer.module'
// import customerController from './customer.controller';
// import customerComponent from './customer.component';
// import customerTemplate from './customer.html';

describe('customer', () => {
  let $rootScope, makeController;

  beforeEach(window.module(customer));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new customerController();
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
      expect(customerTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  // describe('Component', () => {
  //     // component/directive specs
  //     let component = customerComponent;

  //     it('includes the intended template',() => {
  //       expect(component.template).to.equal(customerTemplate);
  //     });

  //     it('invokes the right controller', () => {
  //       expect(component.controller).to.equal(customerController);
  //     });
  // });
});
