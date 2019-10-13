import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo-service.service';
import { ITodo } from '../interfaces/itodo';

@Component({
  selector: 'app-list-of-todo-items',
  templateUrl: './list-of-todo-items.component.html',
  styleUrls: ['./list-of-todo-items.component.css']
})
export class ListOfTodoItemsComponent implements OnInit {
  todoId: number = 1;
  todoTitle: string = '';
  todoList: ITodo[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoList = this.todoService.todoList;
  }

  get newTodoList() {
    return this.todoService.todoList.filter(x => (!x.isDone && !x.isDoing) || (x.isDone && x.isDoing));
  }

  get doingTodoList() {
    var doingList = this.todoService.todoList.filter(x => x.isDoing && !x.isDone);
    return doingList;
  }

  get doneTodoList() {
    var doneList = this.todoService.todoList.filter(x => !x.isDoing && x.isDone);
    return doneList;
  }

  addTodo():void {
    this.todoId++;
    this.todoService.addTodo({
      id: this.todoId,
      title: this.todoTitle,
      isDone: false,
      isDoing: false,
      date: new Date(),
      dueDate: 'Add Due Date'
    });

    this.todoTitle = '';
  }

  

}
