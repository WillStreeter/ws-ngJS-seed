import customerHotels from './customer-hotels.module'
// import customerHotelsController from './customer-hotels.controller';
import customerHotelsComponent from './customer-hotels.component';
import customerHotelsTemplate from './customer-hotels.html';

describe('customerHotels', () => {
  let $rootScope, makeController;

  beforeEach(window.module(customerHotels));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new customerHotelsController();
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
      expect(customerHotelsTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = customerHotelsComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(customerHotelsTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(customerHotelsController);
      });
  });
});
