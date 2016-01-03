import { provideStore } from '@ngrx/store';
import { TaskService } from './task-service';
import { INITIAL_STATE, taskReducer } from './task-reducer';


export const TASK_PROVIDERS: any[] = [
  TaskService
].concat(provideStore({tasks: taskReducer}, {tasks: INITIAL_STATE}));
