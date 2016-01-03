import { /* enableProdMode,*/ provide } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';
import { HTTP_PROVIDERS } from 'angular2/http';
import { APP_BASE_HREF, ROUTER_PROVIDERS } from 'angular2/router';

// root component
import { App } from 'components/app/app';

// module providers
import { API_PROVIDERS } from 'modules/api';
import { STORE_PROVIDERS } from 'modules/store';
import { TASK_PROVIDERS } from 'modules/task';

// global styles
import 'styles/styles.scss';


bootstrap(App, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  API_PROVIDERS,
  STORE_PROVIDERS,
  TASK_PROVIDERS,
  provide(APP_BASE_HREF, {useValue: '/'})
]).catch((error: Error) => console.error(error));
