import { /* enableProdMode,*/ provide } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';
import { HTTP_PROVIDERS } from 'angular2/http';
import { APP_BASE_HREF, ROUTER_PROVIDERS } from 'angular2/router';

// core
import { API_PROVIDERS } from './core/api';
import { STORE_PROVIDER } from './core/store';
import { TASK_PROVIDERS } from './core/tasks';

// root component
import { App } from './views/app/app';

// global styles
import './views/common/styles.scss';


bootstrap(App, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  API_PROVIDERS,
  STORE_PROVIDER,
  TASK_PROVIDERS,
  provide(APP_BASE_HREF, {useValue: '/'})
]).catch((error: Error) => console.error(error));
