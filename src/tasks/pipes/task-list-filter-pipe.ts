import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../task';


@Pipe({
  name: 'filterTasks',
  pure: true
})

export class TaskListFilterPipe implements PipeTransform {
  transform(list: Task[], filterType: string): Task[] {
    if (!list || !filterType) {
      return list;
    }

    switch (filterType) {
      case 'active':
        return list.filter((task: Task) => {
          return !task.completed;
        });

      case 'completed':
        return list.filter((task: Task) => {
          return task.completed;
        });

      default:
        return list;
    }
  }
}
