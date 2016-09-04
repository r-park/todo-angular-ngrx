import 'rxjs/add/operator/pluck';

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { TaskService } from '../task-service';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'tasks',
  template: `
    <div class="g-row">
      <div class="g-col">
        <task-form (createTask)="taskService.createTask($event)"></task-form>
      </div>

      <div class="g-col">
        <task-list 
          [filter]="filter$ | async"
          [tasks]="taskService.tasks$"
          (remove)="taskService.deleteTask($event)"
          (update)="taskService.updateTask($event.task, $event.changes)"></task-list>
      </div>
    </div>
  `
})

export class TasksComponent {
  filter$: Observable<string>;

  constructor(public route: ActivatedRoute, public taskService: TaskService) {
    this.filter$ = route.params
      .pluck<string>('filter');
  }
}
