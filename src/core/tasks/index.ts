import { TaskService } from './task-service';


export { TaskService };
export * from './task';
export * from './task-reducer';
export const TASK_PROVIDERS: any[] = [TaskService];
