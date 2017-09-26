



class UserStateModelService{

      constructor(WsUserApi) {
		'ngInject';

          this.wsUserApi = WsUserApi;
          this.userModel = Object.assign({}, { loggedIn:false,
                                               userName:'',
                                               occupation:''} );
      }


      getAuthUser(){
             //WsUserApi.getLoggedInUser().then(function (res) {
              this.userModel = Object.assign({}, { loggedIn:true,
                                                    userName:'Freddy Hubbard',
                                                    occupation:'Jazz Musician'} )
            //}

      };

      getUserModel(){
         return this.userModel;
      }



}
export default UserStateModelService