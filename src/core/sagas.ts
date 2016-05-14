import { installSagaMiddleware } from 'store-saga';
import { taskSagas } from './tasks';


export const SAGA_PROVIDERS: any[] = installSagaMiddleware(
  ...taskSagas
);
