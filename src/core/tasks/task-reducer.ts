import { Action, Reducer } from '@ngrx/store';
import { Task } from './task';
import * as types from './constants';


export const taskReducer: Reducer<Task[]> = (state: Task[] = [], action: Action) => {
  switch (action.type) {
    case types.CREATE_TASK_SUCCESS:
      return [ ...state, action.payload ];

    case types.DELETE_TASK_SUCCESS:
      return state.filter((task: Task) => {
        return task.id !== action.payload.id;
      });

    case types.FETCH_TASKS_SUCCESS:
      return action.payload || [];

    case types.UPDATE_TASK_SUCCESS:
      return state.map((task: Task) => {
        return task.id === action.payload.id ? action.payload : task;
      });

    default:
      return state;
  }
};
