import { provideStore } from '@ngrx/store';
import { taskReducer } from './task';


export const STORE_PROVIDERS: any[] = provideStore(
  {tasks: taskReducer},
  {tasks: []}
);
