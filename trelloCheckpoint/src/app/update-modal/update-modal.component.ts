import { Component, OnInit, Input } from '@angular/core';
import { ITodo } from '../interfaces/itodo';
import { TodoService } from '../services/todo-service.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'update-modal',
  templateUrl: './update-modal.component.html',
  styleUrls: ['./update-modal.component.css']
})
export class UpdateModalComponent implements OnInit {
  todoTitle: string = '';
  todoDate: Date;

  @Input() todo: ITodo;
  closeResult: string;

  constructor(private modalService: NgbModal, private todoService: TodoService) { }

  ngOnInit() {}

  updateTodo(todo: ITodo) {
    todo.title = this.todoTitle;
    todo.date = this.todoDate;
    this.todoService.updateTodo(todo);
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
