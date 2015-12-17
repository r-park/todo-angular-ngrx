import { Injectable } from 'angular2/core';
import { Store } from '@ngrx/store';
import { ApiService } from '../api/api-service';
import { ITask, Task } from './task';

import {
  CREATE_TASK,
  DELETE_TASK,
  FETCH_TASKS,
  UPDATE_TASK
} from './constants';


@Injectable()
export class TaskActions {
  constructor(private api: ApiService, private store: Store<any>) {}

  createTask(title: string): void {
    this.api.createTask(JSON.stringify(new Task(title)))
      .subscribe((data: ITask) => {
        this.store.dispatch({
          type: CREATE_TASK,
          payload: data
        });
      });
  }

  deleteTask(task: ITask): void {
    this.api.deleteTask(task.id)
      .subscribe((data: ITask) => {
        this.store.dispatch({
          type: DELETE_TASK,
          payload: data
        });
      });
  }

  fetchTasks(): void {
    this.api.fetchTasks()
      .subscribe((data: ITask[]) => {
        this.store.dispatch({
          type: FETCH_TASKS,
          payload: data
        });
      });
  }

  updateTask(task: ITask, changes: any): void {
    this.api.updateTask(task.id, JSON.stringify(changes))
      .subscribe((data: ITask) => {
        this.store.dispatch({
          type: UPDATE_TASK,
          payload: data
        });
      });
  }
}
