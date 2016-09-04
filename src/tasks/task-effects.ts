import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ApiService } from 'src/shared';
import { TaskActions } from './task-actions';


@Injectable()
export class TaskEffects {
  constructor(
    private actions$: Actions,
    private api: ApiService,
    private store$: Store<any>,
    private taskActions: TaskActions
  ) {}


  @Effect()
  createTask$ = this.actions$
    .ofType(TaskActions.CREATE_TASK)
    .switchMap(({payload}) => this.api.createTask(payload.task)
      .map(task => this.taskActions.createTaskFulfilled(task))
      .catch(error => Observable.of(this.taskActions.createTaskFailed(error)))
    );

  @Effect()
  deleteTask$ = this.actions$
    .ofType(TaskActions.DELETE_TASK)
    .switchMap(({payload}) => this.api.deleteTask(payload.taskId)
      .map(task => this.taskActions.deleteTaskFulfilled(task))
      .catch(error => Observable.of(this.taskActions.deleteTaskFailed(error)))
    );

  @Effect()
  fetchTasks$ = this.actions$
    .ofType(TaskActions.FETCH_TASKS)
    .switchMap(() => this.api.fetchTasks()
      .map(task => this.taskActions.fetchTasksFulfilled(task))
      .catch(error => Observable.of(this.taskActions.fetchTasksFailed(error)))
    );

  @Effect()
  updateTask$ = this.actions$
    .ofType(TaskActions.UPDATE_TASK)
    .switchMap(({payload}) => this.api.updateTask(payload.taskId, payload.changes)
      .map(task => this.taskActions.updateTaskFulfilled(task))
      .catch(error => Observable.of(this.taskActions.updateTaskFailed(error)))
    );
}
