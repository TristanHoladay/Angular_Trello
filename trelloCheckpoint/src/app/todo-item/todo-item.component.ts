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

  @Input() todo: ITodo;

  constructor(private todoService: TodoService) { }

  ngOnInit() {}

  doubleStatusCheck() {
    if(this.todo.isDone && this.todo.isDoing) {
      alert("You have both the Done? and Doing? status checked. Please deselect one.")
    }
  }

}
