import {
    LOADING_MOVIES,
    LOADING_MOVIES_OK,
    LOADING_MOVIES_ERROR
} from '../Types';


const initialState = {
    movies: [],
    error: null,
    loading: false
}

export const movieReducer = (state= initialState,action)=>{
    switch(action.type){
        case LOADING_MOVIES:
            return{
                ...state,
                loading: true
            }
        case LOADING_MOVIES_OK:
            return{
                ...state,
                movies:[action.payload],
                loading: false
            }
        case LOADING_MOVIES_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        default: return state
    }
}