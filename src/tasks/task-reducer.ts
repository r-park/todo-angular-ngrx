import { Action, ActionReducer } from '@ngrx/store';
import { Task } from './task';
import { TaskActions } from './task-actions';


export const taskReducer: ActionReducer<Task[]> = (state: Task[] = [], {payload, type}: Action) => {
  switch (type) {
    case TaskActions.CREATE_TASK_FULFILLED:
      return [ ...state, payload.task ];

    case TaskActions.DELETE_TASK_FULFILLED:
      return state.filter((task: Task) => {
        return task.id !== payload.task.id;
      });

    case TaskActions.FETCH_TASKS_FULFILLED:
      return payload.tasks || [];

    case TaskActions.UPDATE_TASK_FULFILLED:
      return state.map((task: Task) => {
        return task.id === payload.task.id ? payload.task : task;
      });

    default:
      return state;
  }
};
