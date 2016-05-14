import { Action, Reducer } from '@ngrx/store';
import { Task } from './task';
import * as types from './action-types';


export const taskReducer: Reducer<Task[]> = (state: Task[] = [], {payload, type}: Action) => {
  switch (type) {
    case types.CREATE_TASK_SUCCESS:
      return [ ...state, payload.task ];

    case types.DELETE_TASK_SUCCESS:
      return state.filter((task: Task) => {
        return task.id !== payload.task.id;
      });

    case types.FETCH_TASKS_SUCCESS:
      return payload.tasks || [];

    case types.UPDATE_TASK_SUCCESS:
      return state.map((task: Task) => {
        return task.id === payload.task.id ? payload.task : task;
      });

    default:
      return state;
  }
};
