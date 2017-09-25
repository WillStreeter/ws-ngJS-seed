
class HttpAjaxRequestWrapper {
	   constructor($http, $q, ServiceConstants) {
                'ngInject';

                this.$http = $http;
                this.$q = $q;
                this.serviceConstants = ServiceConstants;

                this.errorHandler = (error) => {
                    return this.$q.reject(error);

               }

       }

       get(params){
            let request = {};
            request.url = `${this.serviceConstants.server_url}/${params.route}`;
            request.method = 'GET';
            request.data = params.data;
            request.headers = { 'Content-Type': 'application/json' };
                return this.$http(request)
                .then((response) => response.data,
                this.errorHandler);
       }

       post(params){
            let request = {};
            request.url = `${this.serviceConstants.server_url}/${params.route}`;
            request.method = 'POST';
            request.data = params.data;
            request.headers = { 'Content-Type': 'application/json' };
                return this.$http(request)
                .then((response) => response.data,
                this.errorHandler);
       }
}


export default HttpAjaxRequestWrapper;
