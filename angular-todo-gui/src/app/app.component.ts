/*import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from './todo.component';
import { TodoService } from './todo.service';


@Component({
  selector: 'angular-todo-gui',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = "expass4 todos";
  todos: Todo[] = [];
  todo: Todo = { id: 0, description: '', summary: ''};
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.refresh();
  }
  refresh(id: number) {
    this.todoService.getTodo(id).subscribe(data => {
      this.todos = data;
    })
  }
  addNewTodo() {
    console.log('addNewTodo() called');
    this.todoService.createTodo(this.todo).subscribe(
        newTodo => {
          this.todos.push(newTodo);
          this.todo.description = '';
          this.todo.summary = '';

        },
        error => {
          console.error('Error:', error);
          // Handle error here, e.g., display an error message to the user
        }
    );
  }
  delete(todo: Todo) {
    this.todoService.deleteTodo(todo.id).subscribe(to => {
      this.todos = this.todos.filter(t => t.id !== to.id)
    })
  }
}*/
