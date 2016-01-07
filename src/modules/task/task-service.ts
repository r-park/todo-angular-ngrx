import { Injectable } from 'angular2/core';
import { Dispatcher, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ApiService } from 'modules/api';
import * as types from './constants';
import { Task } from './task';


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
      .mergeMap(
        (task: Task) => api.createTask(task),
        (task: Task, payload: Task) => ({type: types.CREATE_TASK_SUCCESS, payload}))
      .subscribe(dispatcher);

    this.deleteTask$
      .mergeMap(
        (taskId: string) => api.deleteTask(taskId),
        (task: Task, payload: Task) => ({type: types.DELETE_TASK_SUCCESS, payload}))
      .subscribe(dispatcher);

    this.fetchTasks$
      .mergeMap(
        () => api.fetchTasks(),
        (task: Task, payload: Task[]) => ({type: types.FETCH_TASKS_SUCCESS, payload}))
      .subscribe(dispatcher);

    this.updateTask$
      .mergeMap(
        ({taskId, changes}: any) => api.updateTask(taskId, changes),
        (task: Task, payload: Task) => ({type: types.UPDATE_TASK_SUCCESS, payload}))
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
