import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { Provider } from '@angular/core';
import { createSaga, toPayload, whenAction } from 'store-saga';
import { ApiService } from 'src/core/api';
import * as actions from './action-creators';
import * as types from './action-types';


//=====================================
//  SAGAS
//-------------------------------------

export const createTask = createSaga((api: ApiService) => {
  return saga$ => saga$
    .filter(whenAction(types.CREATE_TASK))
    .map(toPayload)
    .switchMap(payload => api
      .createTask(payload.task)
      .map(task => actions.createTaskSuccess(task)));
}, [ApiService]);


export const deleteTask = createSaga((api: ApiService) => {
  return saga$ => saga$
    .filter(whenAction(types.DELETE_TASK))
    .map(toPayload)
    .switchMap(payload => api
      .deleteTask(payload.taskId)
      .map(task => actions.deleteTaskSuccess(task)));
}, [ApiService]);


export const fetchTasks = createSaga((api: ApiService) => {
  return saga$ => saga$
    .filter(whenAction(types.FETCH_TASKS))
    .switchMap(() => api
      .fetchTasks()
      .map(tasks => actions.fetchTasksSuccess(tasks)));
}, [ApiService]);


export const updateTask = createSaga((api: ApiService) => {
  return saga$ => saga$
    .filter(whenAction(types.UPDATE_TASK))
    .map(toPayload)
    .switchMap(payload => api
      .updateTask(payload.taskId, payload.changes)
      .map(task => actions.updateTaskSuccess(task)));
}, [ApiService]);


//=====================================
//  EXPORT SAGAS
//-------------------------------------

export const taskSagas: Provider[] = [
  createTask,
  deleteTask,
  fetchTasks,
  updateTask
];
