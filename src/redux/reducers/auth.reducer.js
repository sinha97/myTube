import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS ,LOAD_PROFILE, LOG_OUT} from "../actionType";

const initialState = {
    accessToken: sessionStorage.getItem('Utube-clone-access-token')? sessionStorage.getItem('Utube-clone-access-token') : null ,
    user: sessionStorage.getItem('Utube-clone-user') ? JSON.parse(sessionStorage.getItem('Utube-clone-user')) : null,
    loading:false
}

export const authReducer = (previousState = initialState,action) =>{
    const {type,payload} = action;

    switch(type){

        case LOGIN_REQUEST:
            return {
                ...previousState,
                loading:true,

            }
        case LOGIN_SUCCESS:
            return {
                ...previousState,
                accessToken:payload,
                loading:false,
            }
        case LOGIN_FAIL:
            return{
                ...previousState,
                accessToken:null,
                loading:false,
                error:payload
            }
        case LOAD_PROFILE:
            return{
                ...previousState,
                user:payload
            }
        case LOG_OUT:
            return{
               ...previousState,
               accessToken:null,
               user:null 
            }
        default:
            return previousState
    }
}