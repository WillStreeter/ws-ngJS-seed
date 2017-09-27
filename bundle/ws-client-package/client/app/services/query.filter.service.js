class QueryFilterService {
  constructor($state) {
    'ngInject';

    this.$state = $state;
  }

  query_filter(params_needed) {
    // params_needed comes from UI components 
    // which state depends on the URL query params,
    // they use query params to set their initial state in onInit method
    // Or some data service as HotelsService may look for 
    // filter values in the query params to send then to backend server
    let query_params = this.$state.params;
    let filter = {}

    params_needed.forEach((key) => {
      if (key in query_params && !!query_params[key]) {
        filter[key] = query_params[key];
      }
    })

    return filter;
  }
}

export default QueryFilterService;