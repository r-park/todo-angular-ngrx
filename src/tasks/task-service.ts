import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Task } from './task';
import { TaskActions } from './task-actions';


@Injectable()
export class TaskService {
  tasks$: Observable<Task[]>;

  constructor(private actions: TaskActions, private store: Store<any>) {
    this.tasks$ = store.select('tasks') as Observable<Task[]>;
    store.dispatch(this.actions.fetchTasks());
  }

  createTask(title: string): void {
    this.store.dispatch(
      this.actions.createTask(new Task(title))
    );
  }

  deleteTask(task: Task): void {
    this.store.dispatch(
      this.actions.deleteTask(task.id)
    );
  }

  updateTask(task: Task, changes: any): void {
    this.store.dispatch(
      this.actions.updateTask(task.id, changes)
    );
  }
}
