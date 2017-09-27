/**
 * Created by willstreeter on 9/24/17.
 */


class StateModelFactory {

	   constructor( UserStateModelService, PubSubProvider) {
                'ngInject';

         //this.rxService   =  rx;
         this.pubSub = PubSubProvider;
         this.userStateModelService = UserStateModelService;

           //this.userStateModel =  Rx.Observable.ofObjectChanges(userStateModelService.getUserStateModel());


           //this.userStateModel = null;
           this.Subscription = null;
           this.userStateModel =  this.userStateModelService.getUserModel();
          // console.log('Ws.Service [StateModelFactory]  constructor  this.userStateModel  =',  this.userStateModel )
           this.setUp();

       }

       //  getUserStateModel(args){
       //     console.log('Ws.Service [StateModelFactory]  arg', args)
       //      //console.log('Ws.Service [StateModelFactory]   self',  self)
       //     console.log('Ws.Service [StateModelFactory]   this.pubSub',  this.pubSub)
       //     console.log('Ws.Service [StateModelFactory]   this.userStateModel',  this.userStateModel)
       //     if( args.route='user'){
       //        this.pubSub.publish( this.pubSub.pubsubType().apiRemoteUserServicesResponse, this.userStateModel);
       //     }else{
       //         this.userStateModel =  self.userStateModelService.getAuthUser();
       //     }
       // }

       setUp(){
           //self=this;
           this.Subscription =  new Rx.BehaviorSubject(this.userStateModel);
           let self = this;
           let getUserStateModel= function (args){
               console.log('Ws.Service [StateModelFactory]  arg', args)
                //console.log('Ws.Service [StateModelFactory]   self',  self)
               if( args.route === 'user'){
                  self.pubSub.publish( self.pubSub.pubsubType().apiRemoteUserServicesResponse, self.Subscription);
               }else if(args.route  === 'user/login'){
                    self.userStateModelService.getAuthUser();
                    self.Subscription.onNext( self.userStateModelService.getUserModel())
               }
           }


           this.pubSub.subscribe( this.pubSub.pubsubType().apiRemoteUserService, getUserStateModel, true, 1);
       }
}


export default StateModelFactory;