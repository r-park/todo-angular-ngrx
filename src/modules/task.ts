import { TaskService } from './task/task-service';


export { TaskService };
export * from './task/task';
export * from './task/task-reducer';
export const TASK_PROVIDERS: any[] = [TaskService];
