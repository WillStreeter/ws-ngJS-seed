import mainToolbar from './main-toolbar.module'
import mainToolbarComponent from './main-toolbar.component';
import mainToolbarTemplate from './main-toolbar.html';

describe('mainToolbar', () => {
  let $rootScope, makeController;

  beforeEach(window.module(mainToolbar));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      // return new mainToolbarController();
      return new mainToolbarComponent.controller();
    };
  }));

  // describe('Module', () => {
  //   // top-level specs: i.e., routes, injection, naming
  // });

  describe('Controller', () => {
    // controller specs
    it('has a name property', () => {
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    it('has pageTitle in template', () => {
      expect(mainToolbarTemplate).to.match(/{{\s?\$ctrl\.pageTitle\s?}}/g);
    });

    it('has userName in template', () => {
      expect(mainToolbarTemplate).to.match(/{{\s?\$ctrl\.userName\s?}}/g);
    });
    
    it('has openMainMenu in template', () => {
      expect(mainToolbarTemplate).to.match(/\s?\$ctrl\.openMainMenu\(\)\s?/g);
    });    
  });

  describe('Component', () => {
      // component/directive specs
      let component = mainToolbarComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(mainToolbarTemplate);
      });
  });
});
