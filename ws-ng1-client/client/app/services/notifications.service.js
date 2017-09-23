class NotificationsService {
	constructor($mdToast) {
		'ngInject';

		this.$mdToast = $mdToast;
	}

	error(message) {
		if (message) {
			let toast = this.$mdToast.simple()
				.textContent(message)
				.position('top right')
				.toastClass('md-toast-error')
				.hideDelay(5000);
			this.display(toast);
		}
	}

	warning(message) {
		if (message) {
			let toast = this.$mdToast.simple()
				.textContent(message)
				.position('top right')
				.toastClass('md-toast-warning')
				.hideDelay(5000);
			this.display(toast);
		}
	}

	info(message) {
		if (message) {
			let toast = this.$mdToast.simple()
				.textContent(message)
				.position("bottom right")
				.hideDelay(2000)
			this.display(toast);
		}
	}

	display(toast) {
		this.$mdToast.show(toast);
	}
}

export default NotificationsService;