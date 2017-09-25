/**
 * Created by willstreeter on 9/24/17.
 */

class StateModelFactory {
	   constructor(Rx, UserStateModelService, PubSub) {
                'ngInject';
         this.rxService   =  Rx;
         this.userStateModelService = UserStateModelService;

         this.userStateModel =  Rx.Observable.ofObjectChanges(userStateModelService.getUserStateModel());

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