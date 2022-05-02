import { createAction } from '@reduxjs/toolkit';
import {
    LOADING_MOVIES,
    LOADING_MOVIES_OK,
    LOADING_MOVIES_ERROR
} from '../Types';

const getMoviesAction = createAction(LOADING_MOVIES);
const getMoviesOk = createAction(LOADING_MOVIES_OK);
const getMoviesError = createAction(LOADING_MOVIES_ERROR);

export {
    getMoviesAction,
    getMoviesOk,
    getMoviesError
}