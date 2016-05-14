import { provideStore } from '@ngrx/store';
import { taskReducer } from './tasks';


export const STORE_PROVIDER: any[] = provideStore({
  tasks: taskReducer
});
