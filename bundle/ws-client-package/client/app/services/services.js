import queryFilterService from './query.filter.service';
import notificationsService from './notifications.service';

let services = angular
	.module('app.services', [])
	.service('QueryFilterService', queryFilterService)
	.service('NotificationsService', notificationsService)
	.name;

export default services;