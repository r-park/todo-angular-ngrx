import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Task, TaskService } from 'src/core/tasks';
import { AutofocusDirective } from 'src/views/common';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  directives: [
    AutofocusDirective
  ],
  selector: 'task-item',
  styles: [
    require('./task-item.scss')
  ],
  template: require('./task-item.html')
})

export class TaskItem {
  @Input() task: Task;

  editing: boolean = false;
  title: string = '';

  constructor(public taskService: TaskService) {}

  delete(): void {
    this.taskService.deleteTask(this.task);
  }

  editTitle(): void {
    this.editing = true;
    this.title = this.task.title;
  }

  saveTitle(): void {
    if (this.editing) {
      const title = this.title.trim();
      if (title.length && title !== this.task.title) {
        this.taskService.updateTask(this.task, {title});
      }
      this.stopEditing();
    }
  }

  stopEditing(): void {
    this.editing = false;
  }

  toggleStatus(): void {
    this.taskService.updateTask(this.task, {
      completed: !this.task.completed
    });
  }
}
