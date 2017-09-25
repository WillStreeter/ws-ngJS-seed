import customerStays from './customer-stays.module'
// import customerStaysController from './customer-stays.controller';
import customerStaysComponent from './customer-stays.component';
import customerStaysTemplate from './customer-stays.html';

describe('customerStays', () => {
  let $rootScope, makeController;

  beforeEach(window.module(customerStays));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new customerStaysController();
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
      expect(customerStaysTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = customerStaysComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(customerStaysTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(customerStaysController);
    });
  });
});
