import { Component } from 'angular2/core';
import { TaskService } from 'modules/task';
import { TaskForm } from './task-form/task-form';
import { TaskList } from './task-list/task-list';


@Component({
  directives: [
    TaskForm,
    TaskList
  ],
  selector: 'tasks',

  template: `
    <div class="g-row">
      <div class="g-col">
        <task-form></task-form>
      </div>

      <div class="g-col">
        <task-list [tasks]="taskService.tasks"></task-list>
      </div>
    </div>
  `
})

export class Tasks {
  constructor(private taskService: TaskService) {}
}
