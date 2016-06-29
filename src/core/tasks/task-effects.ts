import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import { Effect, StateUpdates } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ApiService } from 'src/core/api';
import { toPayload } from 'src/core/utils/effects';
import { TaskActions } from './task-actions';


@Injectable()
export class TaskEffects {
  constructor(
    private actions: TaskActions,
    private api: ApiService,
    private updates$: StateUpdates<any>
  ) {}


  @Effect()
  createTask$: Observable<Action> = this.updates$
    .whenAction(TaskActions.CREATE_TASK)
    .map(toPayload)
    .switchMap(payload => this.api.createTask(payload.task)
      .map(task => this.actions.createTaskFulfilled(task))
      .catch(error => Observable.of(this.actions.createTaskFailed(error)))
    );

  @Effect()
  deleteTask$: Observable<Action> = this.updates$
    .whenAction(TaskActions.DELETE_TASK)
    .map(toPayload)
    .switchMap(payload => this.api.deleteTask(payload.taskId)
      .map(task => this.actions.deleteTaskFulfilled(task))
      .catch(error => Observable.of(this.actions.deleteTaskFailed(error)))
    );

  @Effect()
  fetchTasks$: Observable<Action> = this.updates$
    .whenAction(TaskActions.FETCH_TASKS)
    .map(toPayload)
    .switchMap(payload => this.api.fetchTasks()
      .map(task => this.actions.fetchTasksFulfilled(task))
      .catch(error => Observable.of(this.actions.fetchTasksFailed(error)))
    );

  @Effect()
  updateTask$: Observable<Action> = this.updates$
    .whenAction(TaskActions.UPDATE_TASK)
    .map(toPayload)
    .switchMap(payload => this.api.updateTask(payload.taskId, payload.changes)
      .map(task => this.actions.updateTaskFulfilled(task))
      .catch(error => Observable.of(this.actions.updateTaskFailed(error)))
    );
}
