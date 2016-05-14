import { TaskService } from './task-service';


export { TaskService };
export { taskSagas } from './sagas';
export { Task } from './task';
export { taskReducer } from './task-reducer';


export const TASK_PROVIDERS: any[] = [
  TaskService
];
