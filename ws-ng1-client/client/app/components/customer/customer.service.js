class CustomersService {
	constructor($http, $q, AppConstants, NotificationsService) {
		'ngInject';

		this.$q = $q;
		this.$http = $http;
		this.appConstants = AppConstants;
		this.notificationsService = NotificationsService;
	}

	get(id) {
		let request = { method: 'GET', ignoreLoadingBar: true };

		if (id) {
			request.url = `${this.appConstants.server_url}/customer/${id}/`;
		}
		else {
			request.url = `${this.appConstants.server_url}/auth-customers/`;
		}

		return this.$http(request, )
			.then((response) => response.data,
			(error) => this.notificationsService.error(error.data));
	}

	save(customer) {
		let request = {};
		request.url = `${this.appConstants.server_url}/auth-customers/`;
		request.method = 'POST';

		request.data = customer;
		request.headers = { 'Content-Type': undefined };
		request.transformRequest = (data) => {
			let formData = new FormData();
			Object.keys(data).forEach(key => formData.append(key, data[key]));
			return formData;
		}

		return this.$http(request, )
			.then((response) => response.data,
			(error) => {
				this.notificationsService.error(error.data);
				return this.$q.reject(error);
			});
	}
}

export default CustomersService;