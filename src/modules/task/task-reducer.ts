import { Action, Reducer } from '@ngrx/store';
import { ITask } from './task';

import {
  CREATE_TASK,
  DELETE_TASK,
  FETCH_TASKS,
  UPDATE_TASK
} from './constants';


export const INITIAL_STATE: ITask[] = [];


export const taskReducer: Reducer<ITask[]> = (state: ITask[], action: Action) => {
  switch (action.type) {
    case CREATE_TASK:
      return [ ...state, action.payload ];

    case DELETE_TASK:
      return state.filter((task: ITask) => {
        return task.id !== action.payload.id;
      });

    case FETCH_TASKS:
      return action.payload || [];

    case UPDATE_TASK:
      return state.map((task: ITask) => {
        return task.id === action.payload.id ? action.payload : task;
      });

    default:
      return state;
  }
};
