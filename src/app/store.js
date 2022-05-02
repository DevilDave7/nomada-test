import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk'
import { actorReducer } from './Reducers/actor.reducer';
import { movieReducer } from './Reducers/movie.reducer';


export const store = configureStore({
  reducer: {
    actorReducer: actorReducer,
    movieReducer: movieReducer
  },
  middleware: [thunk]
  
});
