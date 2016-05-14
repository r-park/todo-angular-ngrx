import { ChangeDetectionStrategy, Component, Input } from 'angular2/core';
import { Task, TaskService } from 'src/core/tasks';
import { Autofocus } from 'src/views/common/directives/autofocus-directive';

const styles: string = require('./task-item.scss');
const template: string = require('./task-item.html');


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  directives: [Autofocus],
  selector: 'task-item',
  styles: [styles],
  template
})

export class TaskItem {
  @Input() model: Task;

  editing: boolean = false;
  title: string = '';

  constructor(private taskService: TaskService) {}

  delete(): void {
    this.taskService.deleteTask(this.model);
  }

  editTitle(): void {
    this.editing = true;
    this.title = this.model.title;
  }

  saveTitle(): void {
    if (this.editing) {
      const title: string = this.title.trim();
      if (title.length && title !== this.model.title) {
        this.taskService.updateTask(this.model, {title});
      }
      this.stopEditing();
    }
  }

  stopEditing(): void {
    this.editing = false;
  }

  toggleStatus(): void {
    this.taskService.updateTask(this.model, {
      completed: !this.model.completed
    });
  }
}
