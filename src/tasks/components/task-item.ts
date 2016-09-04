import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../task';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'task-item',
  styles: [
    require('./task-item.scss')
  ],
  template: require('./task-item.html')
})

export class TaskItemComponent {
  @Input() task: Task;
  @Output() remove: EventEmitter<any> = new EventEmitter(false);
  @Output() update: EventEmitter<any> = new EventEmitter(false);

  editing: boolean = false;
  title: string = '';

  editTitle(): void {
    this.editing = true;
    this.title = this.task.title;
  }

  saveTitle(): void {
    if (this.editing) {
      const title = this.title.trim();
      if (title.length && title !== this.task.title) {
        this.update.emit({title});
      }
      this.stopEditing();
    }
  }

  stopEditing(): void {
    this.editing = false;
  }

  toggleStatus(): void {
    this.update.emit({
      completed: !this.task.completed
    });
  }
}
