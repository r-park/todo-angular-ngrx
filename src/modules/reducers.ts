import { provideStore } from '@ngrx/store';
import { taskReducer } from './task';


export const REDUCER_PROVIDERS: any[] = provideStore(
  {tasks: taskReducer}
);
