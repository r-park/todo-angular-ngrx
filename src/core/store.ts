import { provideStore } from '@ngrx/store';
import { instrumentStore } from '@ngrx/store-devtools';
import { taskReducer } from './tasks';


export const STORE_PROVIDER: any[] = [
  provideStore({tasks: taskReducer}),
  instrumentStore({
    maxAge: 5
  })
];
