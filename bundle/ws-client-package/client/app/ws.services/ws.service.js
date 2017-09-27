
import { rx }from 'rx-angular';

import stateModelFactory from './state-model/state.model.factory';
import userStateModel from './state-model/user.state.model';
import wsUserApi from './api-model/ws.user.api';
import httpAjaxRequestWrapper from './api-model/http.ajax.request.wrapper';
import wsPubSub from '../ws.pubsub/ws.pubsub.module'

let WsService = angular
	.module('ws.service', [wsPubSub, 'rx'])
	.service('StateModelFactory', stateModelFactory)
	.service('UserStateModelService', userStateModel)
	.service('WsUserApi', wsUserApi)
	.service('HttpAjaxRequestWrapper', httpAjaxRequestWrapper)
	.run(UICoreServicesRunBlock)
	.name;



   function UICoreServicesRunBlock(StateModelFactory){
     //MdoApiServices();
   }


export default WsService;
