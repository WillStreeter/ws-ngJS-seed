import template from './search-toolbar.html';
import filterPanel from './filter-panel.html';
import './search-toolbar.scss';

const searchToolbarComponent = {
  template,
  controller: class SearchToolbarComponent {
    constructor($mdPanel, $state, QueryFilterService) {
      'ngInject';

      this.name = 'search-toolbar';
      this.$mdPanel = $mdPanel;
      this.$state = $state;
      this.queryFilterService = QueryFilterService;
      this.filterModel = {
        name: null,
        rating: null,
        favorites: null,
      }
    }

    $onInit() {
      this.filterModel = this.queryFilterService.query_filter(
        Object.keys(this.filterModel));
    }

    $onDestroy() {
      this.closeFilterPanel();
    }

    get isFilterActive() {
      return !!Object.values(this.filterModel).some(value => value != null);
    }

    submit() {
      this.$state.go('customer.hotels', this.filterModel, { reload: true });
      this.closeFilterPanel();
    }

    reset() {
      Object.keys(this.filterModel).forEach((key) => {
        this.filterModel[key] = null;
      });
    }

    closeFilterPanel() {
      this.panelRef && this.panelRef.close();
    }

    openFilterPanel($event) {
      this.panelWidth = $event.toElement.parentElement.parentElement.clientWidth;

      let position = this.$mdPanel.newPanelPosition()
        .relativeTo('.filter-toolbar')
        .addPanelPosition(this.$mdPanel.xPosition.ALIGN_END, this.$mdPanel.yPosition.BELOW);

      let config = {
        targetEvent: $event,
        position: position,
        panelClass: 'filter-panel',
        template: filterPanel,
        controller: () => this,
        controllerAs: '$ctrl',
        escapeToClose: true,
        trapFocus: false,
      }

      this.$mdPanel.open(config)
        .then((ref) => {
          this.panelRef = ref;
        },
        (err) => {
          this.errors = err.data; console.log(err.data);
        });
    }
  }
};

export default searchToolbarComponent;