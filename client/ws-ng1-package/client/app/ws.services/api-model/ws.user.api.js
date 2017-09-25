 class WsUserApi {

	constructor(HttpAjaxRequestWrapper) {
		'ngInject';
		this.httpAjaxRequestWrapper = HttpAjaxRequestWrapper;
	}

    getLoggedInUser() {
            return this.httpAjaxRequestWrapper.get({
              route:'user',
              data: ''
            });
    }
}

export default WsUserApi;
