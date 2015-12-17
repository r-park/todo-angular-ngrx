import { provideStore } from '@ngrx/store';
import { TaskActions } from './task-actions';
import { INITIAL_STATE, taskReducer } from './task-reducer';


export const TASK_PROVIDERS: any[] = [
  TaskActions
].concat(provideStore({tasks: taskReducer}, {tasks: INITIAL_STATE}));
