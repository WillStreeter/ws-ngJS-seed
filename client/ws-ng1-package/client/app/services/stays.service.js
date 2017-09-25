class StaysService {
	constructor($http, $q, AppConstants, NotificationsService) {
		'ngInject';

		this.$http = $http;
		this.$q = $q;
		this.appConstants = AppConstants;
		this.notificationsService = NotificationsService;

		this.errorHandler = (error) => {
			this.notificationsService.error(error.data);
			return this.$q.reject(error);
		}
	}

	get() {
		return this.$http({
			url: `${this.appConstants.server_url}/stay/`,
			method: 'GET'
		})
			.then((response) => response.data,
			this.errorHandler);
	}

	save(stay) {
		let request = {};

		if (stay.id) {
			request.url = `${this.appConstants.server_url}/stay/${stay.id}/`;
			request.method = 'PUT';

			// Removing unnesessary fields before sending to DRF
			if (stay.review) {
				delete stay.review.is_liked;
				delete stay.review.likes_count;
			}
		} else {
			request.url = `${this.appConstants.server_url}/stay/`;
			request.method = 'POST';
			//Converting dates from datepickers to ISO date string for Django
			stay.start_date = stay.start_date.toISOString().split('T')[0];
			stay.end_date = stay.end_date.toISOString().split('T')[0];
		}

		request.data = stay;
		request.headers = { 'Content-Type': 'application/json' };

		return this.$http(request, )
			.then((response) => response.data,
			this.errorHandler);
	}

	delete(id) {
		return this.$http({
			url: `${this.appConstants.server_url}/stay/${id}/`,
			method: 'DELETE'
		})
			.then((response) => response.data,
			this.errorHandler);
	}
}

export default StaysService;