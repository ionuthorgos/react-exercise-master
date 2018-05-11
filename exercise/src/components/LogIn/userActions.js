import axios from "axios"; //https://medium.com/codingthesmartway-com-blog/getting-started-with-axios-166cb0035237
import thunk from "redux-thunk";

export  class UserActions {

    constructor () {

    }

    getTestUsers()
    {
        return [{a:1}];
    }
    getUsers = () => async (dispatch, getState) => {
        axios.get("http://rest.learncode.academy/api/wstern/users")
            .then((response)=>{
                console.log(response);
                const data = response.data;
                data.push({id:1, text :'John'});
                data.push({id:2, text :'Marry'});
                dispatch({type:"USERS_RECEIVED", data: response.data});
            })
            .catch((err)=>{
                console.log("EEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
                dispatch({type:"GET_USERS_ERROR", action: err});
            });
    };

    getUsersPromise = () =>  {
        return axios.get("http://rest.learncode.academy/api/wstern/users");
        // .then((response)=>{
        //     console.log(response);
        //     const data = response.data;
        //     data.push({id:1, text :'John'});
        //     dispatch({type:"USERS_RECEIVED", data: response.data});
        // })
        // .catch((err)=>{
        //     console.log("EEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
        //     dispatch({type:"GET_USERS_ERROR", action: err});
        // });
    };

}

export default new UserActions();