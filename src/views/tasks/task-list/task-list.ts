import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Task } from 'src/core/tasks';
import { TaskItem } from '../task-item/task-item';
import { TaskListFilterPipe } from './task-list-filter-pipe';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  directives: [
    TaskItem
  ],
  pipes: [
    TaskListFilterPipe
  ],
  selector: 'task-list',
  styles: [
    require('./task-list.scss')
  ],
  template: `
    <ul class="task-filters">
      <li><a [class.active]="!filter" linkTo="/">View All</a></li>
      <li><a [class.active]="filter == 'active'" linkTo="/" [queryParams]="{filter: 'active'}">Active</a></li>
      <li><a [class.active]="filter == 'completed'" linkTo="/" [queryParams]="{filter: 'completed'}">Completed</a></li>
    </ul>

    <div class="task-list">
      <task-item 
        *ngFor="let task of tasks$ | async | filterTasks:filter"
        [task]="task"></task-item>
    </div>
  `
})

export class TaskList {
  @Input() filter: Observable<string>;
  @Input() tasks$: Observable<Task[]>;
}
