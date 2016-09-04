import { Action } from '@ngrx/store';
import { Task } from './task';


export class TaskActions {
  static CREATE_TASK = 'CREATE_TASK';
  static CREATE_TASK_FAILED = 'CREATE_TASK_FAILED';
  static CREATE_TASK_FULFILLED = 'CREATE_TASK_FULFILLED';

  static DELETE_TASK = 'DELETE_TASK';
  static DELETE_TASK_FAILED = 'DELETE_TASK_FAILED';
  static DELETE_TASK_FULFILLED = 'DELETE_TASK_FULFILLED';

  static FETCH_TASKS = 'FETCH_TASKS';
  static FETCH_TASKS_FAILED = 'FETCH_TASKS_FAILED';
  static FETCH_TASKS_FULFILLED = 'FETCH_TASKS_FULFILLED';

  static UPDATE_TASK = 'UPDATE_TASK';
  static UPDATE_TASK_FAILED = 'UPDATE_TASK_FAILED';
  static UPDATE_TASK_FULFILLED = 'UPDATE_TASK_FULFILLED';


  //===================================
  //  CREATE
  //-----------------------------------

  createTask(task: Task): Action {
    return {
      type: TaskActions.CREATE_TASK,
      payload: {
        task
      }
    };
  }

  createTaskFailed(error: any): Action {
    return {
      type: TaskActions.CREATE_TASK_FAILED,
      payload: error
    };
  }

  createTaskFulfilled(task: Task): Action {
    return {
      type: TaskActions.CREATE_TASK_FULFILLED,
      payload: {
        task
      }
    };
  }


  //===================================
  //  DELETE
  //-----------------------------------

  deleteTask(taskId: string): Action {
    return {
      type: TaskActions.DELETE_TASK,
      payload: {
        taskId
      }
    };
  }

  deleteTaskFailed(error: any): Action {
    return {
      type: TaskActions.DELETE_TASK_FAILED,
      payload: error
    };
  }

  deleteTaskFulfilled(task: Task): Action {
    return {
      type: TaskActions.DELETE_TASK_FULFILLED,
      payload: {
        task
      }
    };
  }


  //===================================
  //  FETCH
  //-----------------------------------

  fetchTasks(): Action {
    return {
      type: TaskActions.FETCH_TASKS
    };
  }

  fetchTasksFailed(error: any): Action {
    return {
      type: TaskActions.FETCH_TASKS_FAILED,
      payload: error
    };
  }

  fetchTasksFulfilled(tasks: Task[]): Action {
    return {
      type: TaskActions.FETCH_TASKS_FULFILLED,
      payload: {
        tasks
      }
    };
  }


  //===================================
  //  UPDATE
  //-----------------------------------

  updateTask(taskId: string, changes: any): Action {
    return {
      type: TaskActions.UPDATE_TASK,
      payload: {
        changes,
        taskId
      }
    };
  }

  updateTaskFailed(error: any): Action {
    return {
      type: TaskActions.UPDATE_TASK_FAILED,
      payload: error
    };
  }

  updateTaskFulfilled(task: Task): Action {
    return {
      type: TaskActions.UPDATE_TASK_FULFILLED,
      payload: {
        task
      }
    };
  }
}



