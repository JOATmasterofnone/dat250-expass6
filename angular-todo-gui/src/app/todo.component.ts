// todo.component.ts

import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

// This is an example, you should adjust it to your actual Todo structure.
export interface Todo {
    id: number;
    title: string;
    description: string;
    summary: string;
}

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

    todos: Todo[] = [];
    newTodo: Todo = { id: 0, title: '', summary: '', description: '' };
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

    createTodo(): void {
        if (!this.newTodo.summary || !this.newTodo.description) {
            console.error("Both summary and description are required to create a new todo.");
            return;
        }

        this.todoService.createTodo(this.newTodo).subscribe(
            responseTodo => {
                // Push the new todo to the list
                this.todos.push(responseTodo);
                console.log("Todo created!", responseTodo);

                // Clear the newTodo object for future inputs
                this.newTodo = { id: 0, title: '', summary: '', description: '' };
            },
            error => {
                console.error("There was an error creating the todo:", error);
            }
        );
    }


    deleteTodo(id: number) {
        this.todoService.deleteTodo(id)
            .subscribe(() => {
                    // Remove
                    this.todos = this.todos.filter(todo => todo.id !== id)
                },
                error => {
                    console.log('Error deleting todo:', error);
                    this.message = 'Error deleting todo. Please try again later.';
                });
    }

}
