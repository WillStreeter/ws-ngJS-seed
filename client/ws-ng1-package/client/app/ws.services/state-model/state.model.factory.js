/**
 * Created by willstreeter on 9/24/17.
 */

class StateModelFactory {
	   constructor(rx, UserStateModelService, PubSub) {
                'ngInject';
         this.rxService   =  rx;
         this.userStateModelService = UserStateModelService;

         this.userStateModel =  this.rxService.Observable.ofObjectChanges(userStateModelService.getUserStateModel());

        PubSub.subscribe(PubSub.pubsubType().apiRemoteUserService, this.getUserStateModel, true, 1);

       }

        getUserStateModel(args){
           if( args.base.store){
             PubSub.publish(PubSub.pubsubType().apiRemoteUserService, this.userStateModel);
           }else{
              this.userStateModelService.getAuthUser();
           }
       }
}


export default StateModelFactory;