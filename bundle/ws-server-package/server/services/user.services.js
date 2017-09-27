/**
 * Created by willstreeter on 9/26/17.
 */

import  * as users from '../tests/fixtures/users.js';



export function getUser(id){

    const user = users.users.find((element)=>{
           console.log('getUser getUser element.id',element.id)
           console.log('getUser getUser  id',id)
           console.log('getUser getUser  element.id.toString() === id',element.id.toString() === id)
                                   if(element.id.toString() === id){
           console.log('getUser getUser  element ',element)
                                       return element;

                                   }
                               });

    return user;

}


export function getAuthUser(username , password){


    const user = users.users.find((element)=>{
                                   if(element.userName === username &&
                                      element.password === password  ){
                                       element.loggedIn = true;
                                       return element;

                                   }
                               });

    return user;


}



export default { getUser, getAuthUser};
