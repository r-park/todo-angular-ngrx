import { compose } from '@ngrx/core/compose';
import { combineReducers, provideStore } from '@ngrx/store';
import { storeLogger } from 'ngrx-store-logger';
import { taskReducer } from './tasks';


const logger = storeLogger({
  level: 'log', // 'console' | 'warn' | 'error' | 'info'; default log
  collapsed: false,
  duration: true,
  timestamp: true
});

const store = compose(logger, combineReducers)({
  tasks: taskReducer
});


export const STORE_PROVIDER: any[] = provideStore(store);
