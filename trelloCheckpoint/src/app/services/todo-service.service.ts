import { Injectable } from '@angular/core';
import { ITodo } from '../interfaces/itodo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoList: ITodo[] = [
    {
      id: 1,
      title: "Create Trello App",
      isDone: false,
      isDoing: false,
      date: new Date()
    }
  ];

  constructor() { }

  getAllTodos(){
    return this.todoList;
  }

  addTodo(todo:ITodo) {
    this.todoList.push(todo);
  }

  deleteTodo(todo:ITodo) {
    const index = this.todoList.findIndex(todoItem => todoItem === todo);
    this.todoList.splice(index, 1)
  }

  updateTodo(todo: ITodo) {
    const index = this.todoList.findIndex(x => x.id === todo.id);
    var todoItem = this.todoList[index];
    todoItem.title = todo.title;
    todoItem.date = todo.date;
  }

  //filter methods here?

}
