import { enableProdMode } from '@angular/core';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { HTTP_PROVIDERS } from '@angular/http';
import { bootstrap } from '@angular/platform-browser-dynamic';

// core
import { API_PROVIDERS } from './core/api';
import { EFFECTS_PROVIDERS } from './core/effects';
import { STORE_PROVIDER } from './core/store';
import { TASK_PROVIDERS } from './core/tasks';

// route configuration
import { ROUTER_PROVIDERS } from './views/routes';

// root component
import { App } from './views/app/app';

// global styles
import './views/common/styles.scss';


if (process.env.NODE_ENV === 'production') {
  enableProdMode();
}


bootstrap(App, [
  disableDeprecatedForms(),
  provideForms(),
  HTTP_PROVIDERS,
  API_PROVIDERS,
  EFFECTS_PROVIDERS,
  ROUTER_PROVIDERS,
  STORE_PROVIDER,
  TASK_PROVIDERS
]).catch((error: Error) => console.error(error));
