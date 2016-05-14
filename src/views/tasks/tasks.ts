import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/takeUntil';

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { QueryParams } from '@ngrx/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { TaskService } from 'src/core/tasks';
import { TaskForm } from './task-form/task-form';
import { TaskList } from './task-list/task-list';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
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
        <task-list 
          [filter]="filter$ | async"
          [tasks$]="taskService.tasks$"></task-list>
      </div>
    </div>
  `
})

export class Tasks {
  filter$: Observable<string>;
  ngOnDestroy$: Subject<boolean> = new Subject();

  constructor(public params$: QueryParams, public taskService: TaskService) {
    this.filter$ = params$
      .takeUntil(this.ngOnDestroy$)
      .pluck('filter');
  }

  ngOnDestroy(): void {
    this.ngOnDestroy$.next(true);
  }
}
