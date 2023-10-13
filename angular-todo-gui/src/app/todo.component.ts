// todo.component.ts

import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

// This is an example, you should adjust it to your actual Todo structure.
interface Todo {
    id: number;
    title: string;
    description: string;
    // ... any other fields ...
}

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

    todos: Todo[] = [];
    currentTodo: Todo | null = null;
    currentIndex: number = -1;
    message: string = '';

    constructor(private todoService: TodoService) { }

    ngOnInit(): void {
        this.retrieveTodos();
    }

    retrieveTodos(): void {
        this.todoService.getTodosList()
            .subscribe(
                data => {
                    this.todos = data;
                    console.log(data);
                },
                error => {
                    console.log('Error retrieving todos:', error);
                    this.message = 'Error retrieving todos. Please try again later.';
                });
    }

    refreshList(): void {
        this.retrieveTodos();
        this.currentTodo = null;
        this.currentIndex = -1;
    }

    setActiveTodo(todo: Todo, index: number): void {
        this.currentTodo = todo;
        this.currentIndex = index;
    }

    // ... Add methods to handle create, update, delete here ...
}
