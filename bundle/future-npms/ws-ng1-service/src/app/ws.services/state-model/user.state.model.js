/**
 * Created by willstreeter on 9/24/17.
 */
/**
 * Users DataService
 * Uses embedded, hard-coded data model; acts asynchronously to simulate
 * remote data service call(s).
 *
 * @returns {{loadAll: Function}}
 * @constructor
 */

UserStateService.$inject = ['$q', 'rx','UserServiceFactory', 'PubSub'];


function UserStateService($q, rx) {
	// Promise-based API
	PubSub.subscribe(PubSub.pubsubType().apiRemoteMemberServices, generateApiService, true, 1);

   const getAuthUser=()=>{
             PubSub.publish(PubSub.pubsubType().apiRemoteMemberServices, data);
   }



	return {
		getUserStateObservable: getAuthUser()
	};


    buildService = PubSub.subscribe(PubSub.pubsubType().apiRemoteMemberServices, generateApiService, true, 1);
}


angular
    .module('ws.services')
    .service('UserStateService', UserStateService);