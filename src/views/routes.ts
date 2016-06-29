import { provideRouter, Routes } from '@ngrx/router';
import { Tasks } from './tasks/tasks';


export const routes: Routes = [
  {path: '/', component: Tasks}
];


export const ROUTER_PROVIDERS = provideRouter(routes);
