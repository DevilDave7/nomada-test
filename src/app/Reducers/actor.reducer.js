import {
    GET_ACTOR,
    GET_ACTOR_OK,
    GET_ACTOR_ERROR
} from '../Types';

const initialState={
    actorName: '',
    loading: false,
    error: null
}

export const actorReducer = (state=initialState,action)=>{
    switch(action.type){
        case GET_ACTOR:
            return {
                ...state,
                loading: true
            }
        case GET_ACTOR_OK:
            return {
                ...state,
                actorName:action.payload,
                loading: false
            }
        case GET_ACTOR_ERROR:
            return{
                ...state,
                error: action.payload,
                loading:false
            }
        default: return state;
    }
}