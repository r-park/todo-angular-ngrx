import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { provideRouter } from '@ngrx/router';

// core
import { API_PROVIDERS } from './core/api';
import { SAGA_PROVIDERS } from './core/sagas';
import { STORE_PROVIDER } from './core/store';
import { TASK_PROVIDERS } from './core/tasks';

// routes
import { routes } from './views/routes';

// root component
import { App } from './views/app/app';

// global styles
import './views/common/styles.scss';


if (process.env.NODE_ENV === 'production') {
  enableProdMode();
}


bootstrap(App, [
  HTTP_PROVIDERS,
  API_PROVIDERS,
  SAGA_PROVIDERS,
  STORE_PROVIDER,
  TASK_PROVIDERS,
  provideRouter(routes)
]).catch((error: Error) => console.error(error));
