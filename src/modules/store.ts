import { provideStore } from '@ngrx/store';
import { taskReducer } from './task';


export const STORE_PROVIDER: any[] = provideStore({
  tasks: taskReducer
});
