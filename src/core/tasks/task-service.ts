import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { createTask, deleteTask, fetchTasks, updateTask } from './action-creators';
import { Task } from './task';


@Injectable()
export class TaskService {
  tasks$: Observable<Task[]>;

  constructor(private store: Store<any>) {
    this.tasks$ = store.select('tasks');
    store.dispatch(fetchTasks());
  }

  createTask(title: string): void {
    this.store.dispatch(
      createTask(new Task(title))
    );
  }

  deleteTask(task: Task): void {
    this.store.dispatch(
      deleteTask(task.id)
    );
  }

  updateTask(task: Task, changes: any): void {
    this.store.dispatch(
      updateTask(task.id, changes)
    );
  }
}
