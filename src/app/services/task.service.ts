import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { TasksResponse } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasksBaseURL = 'http://localhost:8000/api/tasks';

  constructor(private http: HttpClient) {}

  getAllTasks(): Observable<TasksResponse> {
    return this.http.get<TasksResponse>(this.tasksBaseURL);
  }
}
