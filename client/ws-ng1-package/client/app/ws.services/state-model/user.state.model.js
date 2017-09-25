
class UserStateModelService{

      constructor(WsUserApi) {
		'ngInject';

          this.wsUserApi = WsUserApi;
          this.userModel = null;
      }


      getAuthUser(){
             //WsUserApi.getLoggedInUser().then(function (res) {
              this.userModel = Object.assign({}, {userName:'Freddy Hubbard', occupation:'Jazz Musician'} )
            //}

      };

      getUserModel(){
         return this.userModel;
      }



}
export default UserStateModelService