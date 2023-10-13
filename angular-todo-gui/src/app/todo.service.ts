// todo.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private baseUrl = 'http://localhost:8080/todos'; // Adjust this to your Spring Boot server's URL

  constructor(private http: HttpClient) {}

  createTodo(todo: any): Observable<any> {
    return this.http.post(this.baseUrl, todo);
  }

  getTodo(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updateTodo(id: number, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteTodo(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getTodosList(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
}
