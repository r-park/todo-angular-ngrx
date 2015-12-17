import { Injectable } from 'angular2/core';
import { Http, Request, RequestMethod, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';
import { API_TASKS_URL } from './constants';


@Injectable()
export class ApiService {
  constructor(private http: Http) {}

  createTask(body: string): Observable<any> {
    return this.request({
      body,
      method: RequestMethod.Post,
      url: API_TASKS_URL
    });
  }

  deleteTask(taskId: string): Observable<any> {
    return this.request({
      method: RequestMethod.Delete,
      url: `${API_TASKS_URL}/${taskId}`
    });
  }

  fetchTasks(): Observable<any> {
    return this.request({
      method: RequestMethod.Get,
      url: API_TASKS_URL
    });
  }

  updateTask(taskId: string, body: string): Observable<any> {
    return this.request({
      body,
      method: RequestMethod.Put,
      url: `${API_TASKS_URL}/${taskId}`
    });
  }

  request(options: any): Observable<any> {
    const req: Request = new Request(options);
    return this.http.request(req)
      .map((res: Response) => res.json());
  }
}
