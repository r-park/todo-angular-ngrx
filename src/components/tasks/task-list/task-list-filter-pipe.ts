import { Pipe, PipeTransform } from 'angular2/core';
import { Task } from 'modules/task';


@Pipe({
  name: 'filterTasks',
  pure: true
})

export class TaskListFilterPipe implements PipeTransform {
  transform(list: Task[], filterType?: string[]): Task[] {
    if (!list || !filterType) {
      return list;
    }

    switch (filterType[0]) {
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
