import customerSidenav from './customer-sidenav.module'
// import customerSidenavController from './customer-sidenav.controller';
import customerSidenavComponent from './customer-sidenav.component';
import customerSidenavTemplate from './customer-sidenav.html';

describe('customerSidenav', () => {
  let $rootScope, makeController;

  beforeEach(window.module(customerSidenav));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new customerSidenavController();
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
      expect(customerSidenavTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = customerSidenavComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(customerSidenavTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(customerSidenavController);
      });
  });
});
