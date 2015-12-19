import { Component, Input } from 'angular2/core';
import { ITask } from 'modules/task/task';
import { TaskActions } from 'modules/task/task-actions';
import { Autofocus } from 'directives/autofocus-directive';

const styles: string = require('./task-item.scss');
const template: string = require('./task-item.html');


@Component({
  directives: [
    Autofocus
  ],
  selector: 'task-item',
  styles: [styles],
  template
})

export class TaskItem {
  @Input() model: ITask;

  editing: boolean = false;
  title: string = '';

  constructor(private actions: TaskActions) {}

  delete(): void {
    this.actions.deleteTask(this.model);
  }

  editTitle(): void {
    this.editing = true;
    this.title = this.model.title;
  }

  saveTitle(): void {
    if (this.editing) {
      const title: string = this.title.trim();
      if (title.length && title !== this.model.title) {
        this.actions.updateTask(this.model, {title});
      }
      this.stopEditing();
    }
  }

  stopEditing(): void {
    this.editing = false;
  }

  toggleStatus(): void {
    this.actions.updateTask(this.model, {
      completed: !this.model.completed
    });
  }
}
