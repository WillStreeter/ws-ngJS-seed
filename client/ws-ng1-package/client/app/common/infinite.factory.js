let InfiniteFactory = () => {

  let infinite = class {
    constructor(DataService) {
      'ngInject';

      this.dataService = DataService;
      this.items = [];
      this.busy = false;
      this.nextPageUrl = null;
    }

    nextPage() {
      if (this.dataService) {
        if (this.busy) return;
        this.busy = true;

        this.dataService.getPage(this.nextPageUrl)
          .then((response) => {
            // DRF pagination returns next page url in response
            // otherwise I'd have to implement some incremental
            // counters here in order to build next page url
            this.nextPageUrl = response.next;
            this.items = this.items.concat(response.results);
            if (!this.nextPageUrl) {
              this.completed = true;
            }
            this.busy = false;
          },
          (err) => { });
      }
      else {
        console.log("'dataService' is not defined.");
      }
    }
  };

  return (DataService) => ({
    source: () =>  {
      'ngInject';
      return new infinite(DataService)
    }
  });
};

export default InfiniteFactory;