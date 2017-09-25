import stateModelFactory from './state-model/state.model.factory';
import userStateModel from './state-model/user.state.model';
import wsUserApi from './api-model/ws.user.api';
import httpAjaxRequestWrapper from './api-model/http.ajax.request.wrapper';

let WsService = angular
	.module('ws.service', ['ws.pubsub'])
	.service('StateModelFactory', stateModelFactory)
	.service('UserStateModelService', userStateModel)
	.service('WsUserApi', wsUserApi)
	.service('HttpAjaxRequestWrapper', httpAjaxRequestWrapper)
	.name;

export default WsService;
