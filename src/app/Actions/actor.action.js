import { createAction } from '@reduxjs/toolkit'
import {
    GET_ACTOR,
    GET_ACTOR_OK,
    GET_ACTOR_ERROR
} from '../Types'


export const getActorAction =  createAction(GET_ACTOR);
export const getActorOk = createAction(GET_ACTOR_OK);
export const getActorError = createAction(GET_ACTOR_ERROR);