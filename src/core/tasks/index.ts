import { TaskActions } from './task-actions';
import { TaskService } from './task-service';


export { TaskService };
export { TaskEffects } from './task-effects';
export { Task } from './task';
export { taskReducer } from './task-reducer';


export const TASK_PROVIDERS: any[] = [
  TaskActions,
  TaskService
];
