import { runEffects } from '@ngrx/effects';
import { TaskEffects } from './tasks';


export const EFFECTS_PROVIDERS = runEffects(
  TaskEffects
);
