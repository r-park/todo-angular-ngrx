import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Headers, Http, Request, RequestMethod, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Task } from 'src/tasks';
import { API_TASKS_URL } from './constants';


@Injectable()
export class ApiService {
  constructor(private http: Http) {}

  createTask(body: any): Observable<Task> {
    return this.request({
      body,
      method: RequestMethod.Post,
      url: API_TASKS_URL
    });
  }

  deleteTask(taskId: string): Observable<Task> {
    return this.request({
      method: RequestMethod.Delete,
      url: `${API_TASKS_URL}/${taskId}`
    });
  }

  fetchTasks(): Observable<Task[]> {
    return this.request({
      method: RequestMethod.Get,
      url: API_TASKS_URL
    });
  }

  updateTask(taskId: string, body: any): Observable<Task> {
    return this.request({
      body,
      method: RequestMethod.Put,
      url: `${API_TASKS_URL}/${taskId}`
    });
  }

  request(options: any): Observable<any> {
    if (options.body) {
      if (typeof options.body !== 'string') {
        options.body = JSON.stringify(options.body);
      }

      options.headers = new Headers({
        'Content-Type': 'application/json'
      });
    }

    return this.http.request(new Request(options))
      .map((res: Response) => res.json());
  }
}
