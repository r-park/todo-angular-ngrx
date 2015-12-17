import { Component, View } from 'angular2/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ITask } from 'modules/task/task';
import { TaskActions } from 'modules/task/task-actions';
import { TaskForm } from './task-form/task-form';
import { TaskList } from './task-list/task-list';


@Component({
  selector: 'tasks'
})

@View({
  directives: [
    TaskForm,
    TaskList
  ],
  template: `
    <div class="g-row">
      <div class="g-col">
        <task-form></task-form>
      </div>

      <div class="g-col">
        <task-list [tasks]="tasks"></task-list>
      </div>
    </div>
  `
})

export class Tasks {
  tasks: Observable<ITask[]>;

  constructor(private actions: TaskActions, private store: Store<any>) {
    this.tasks = store.select('tasks');
    actions.fetchTasks();
  }
}
