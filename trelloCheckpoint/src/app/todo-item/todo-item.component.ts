import { Component, OnInit, Input } from '@angular/core';
import { MatCardModule } from '@angular/material';

import { ITodo } from '../interfaces/itodo';
import { TodoService } from '../services/todo-service.service';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  todoId: number;
  todoTitle: string;
  todoDate: Date;
  todoIsDoing: boolean;
  todoIsDone: boolean;

  @Input() todo: ITodo;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoId = this.todo.id;
    this.todoTitle = this.todo.title;
    this.todoDate = this.todo.date;
    this.todoIsDoing = this.todo.isDoing;
    this.todoIsDone = this.todo.isDone;
  }

}
