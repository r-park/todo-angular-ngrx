import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Task } from '../task';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'task-list',
  styles: [
    require('./task-list.scss')
  ],
  template: `
    <ul class="task-filters">
      <li><a [class.active]="!filter" routerLink="/tasks">View All</a></li>
      <li><a [class.active]="filter == 'active'" [routerLink]="['/tasks', {filter: 'active'}]">Active</a></li>
      <li><a [class.active]="filter == 'completed'" [routerLink]="['/tasks', {filter: 'completed'}]">Completed</a></li>
    </ul>

    <div class="task-list">
      <task-item 
        *ngFor="let task of tasks | async | filterTasks:filter"
        [task]="task"
        (remove)="remove.emit(task)"
        (update)="update.emit({task: task, changes: $event})"></task-item>
    </div>
  `
})

export class TaskListComponent {
  @Input() filter: string;
  @Input() tasks: Observable<Task[]>;

  @Output() remove: EventEmitter<any> = new EventEmitter(false);
  @Output() update: EventEmitter<any> = new EventEmitter(false);
}
