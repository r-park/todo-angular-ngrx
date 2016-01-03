import { Injectable } from 'angular2/core';
import { Dispatcher, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ApiService } from 'modules/api';
import { Task } from './task';

import {
  CREATE_TASK,
  DELETE_TASK,
  FETCH_TASKS,
  UPDATE_TASK
} from './constants';


@Injectable()
export class TaskService {
  tasks: Observable<Task[]>;

  private createTask$: Subject<any> = new Subject();
  private deleteTask$: Subject<any> = new Subject();
  private fetchTasks$: Subject<any> = new Subject();
  private updateTask$: Subject<any> = new Subject();

  constructor(api: ApiService, dispatcher: Dispatcher<any>, store: Store<any>) {
    this.tasks = store.select('tasks');

    this.createTask$
      .mergeMap((task: Task) => api.createTask(task))
      .map((payload: Task) => ({type: CREATE_TASK, payload}))
      .subscribe(dispatcher);

    this.deleteTask$
      .mergeMap((taskId: string) => api.deleteTask(taskId))
      .map((payload: Task) => ({type: DELETE_TASK, payload}))
      .subscribe(dispatcher);

    this.fetchTasks$
      .mergeMap(() => api.fetchTasks())
      .map((payload: Task[]) => ({type: FETCH_TASKS, payload}))
      .subscribe(dispatcher);

    this.updateTask$
      .mergeMap(({taskId, changes}: any) => api.updateTask(taskId, changes))
      .map((payload: Task) => ({type: UPDATE_TASK, payload}))
      .subscribe(dispatcher);

    this.fetchTasks();
  }

  createTask(title: string): void {
    this.createTask$.next(new Task(title));
  }

  deleteTask(task: Task): void {
    this.deleteTask$.next(task.id);
  }

  fetchTasks(): void {
    this.fetchTasks$.next({});
  }

  updateTask(task: Task, changes: any): void {
    this.updateTask$.next({taskId: task.id, changes});
  }
}
