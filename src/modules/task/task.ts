export interface ITask {
  completed: boolean;
  id?: string;
  title: string;
}

export class Task implements ITask {
  completed: boolean = false;
  title: string;

  constructor(title: string) {
    this.title = title;
  }
}
