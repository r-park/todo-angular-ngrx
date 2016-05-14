import { Action } from '@ngrx/store';
import * as types from './action-types';
import { Task } from './task';


export function createTask(task: Task): Action {
  return {
    type: types.CREATE_TASK,
    payload: {
      task
    }
  };
}

export function createTaskSuccess(task: Task): Action {
  return {
    type: types.CREATE_TASK_SUCCESS,
    payload: {
      task
    }
  };
}

export function deleteTask(taskId: string): Action {
  return {
    type: types.DELETE_TASK,
    payload: {
      taskId
    }
  };
}

export function deleteTaskSuccess(task: Task): Action {
  return {
    type: types.DELETE_TASK_SUCCESS,
    payload: {
      task
    }
  };
}

export function fetchTasks(): Action {
  return {
    type: types.FETCH_TASKS
  };
}

export function fetchTasksSuccess(tasks: Task[]): Action {
  return {
    type: types.FETCH_TASKS_SUCCESS,
    payload: {
      tasks
    }
  };
}

export function updateTask(taskId: string, changes: any): Action {
  return {
    type: types.UPDATE_TASK,
    payload: {
      changes,
      taskId
    }
  };
}

export function updateTaskSuccess(task: Task): Action {
  return {
    type: types.UPDATE_TASK_SUCCESS,
    payload: {
      task
    }
  };
}
