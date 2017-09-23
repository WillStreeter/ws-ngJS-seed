import searchToolbar from './search-toolbar.module'
// import searchToolbarController from './search-toolbar.controller';
import searchToolbarComponent from './search-toolbar.component';
import searchToolbarTemplate from './search-toolbar.html';

describe('searchToolbar', () => {
  let $rootScope, makeController;

  beforeEach(window.module(searchToolbar));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new searchToolbarController();
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
      expect(searchToolbarTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = searchToolbarComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(searchToolbarTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(searchToolbarController);
    });
  });
});
