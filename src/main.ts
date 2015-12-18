import { enableProdMode, provide } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';
import { HTTP_PROVIDERS } from 'angular2/http';
import { APP_BASE_HREF, ROUTER_PROVIDERS } from 'angular2/router';

// root component
import { App } from 'components/app/app';

// modules
import { API_PROVIDERS } from 'modules/api/providers';
import { TASK_PROVIDERS } from 'modules/task/providers';

// global styles
import 'styles/styles.scss';


enableProdMode();

bootstrap(App, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  API_PROVIDERS,
  TASK_PROVIDERS,
  provide(APP_BASE_HREF, {useValue: '/'})
]).catch((error: Error) => console.error(error));
