import { /* enableProdMode,*/ provide } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';
import { HTTP_PROVIDERS } from 'angular2/http';
import { APP_BASE_HREF, ROUTER_PROVIDERS } from 'angular2/router';

// module providers
import { API_PROVIDERS } from 'modules/api';
import { STORE_PROVIDER } from 'modules/store';
import { TASK_PROVIDERS } from 'modules/task';

// root component
import { App } from 'components/app/app';

// global styles
import 'styles/styles.scss';


bootstrap(App, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  API_PROVIDERS,
  STORE_PROVIDER,
  TASK_PROVIDERS,
  provide(APP_BASE_HREF, {useValue: '/'})
]).catch((error: Error) => console.error(error));
