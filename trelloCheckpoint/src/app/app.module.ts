import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListOfTodoItemsComponent } from './list-of-todo-items/list-of-todo-items.component';
import { TodoService } from './services/todo-service.service';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { UpdateModalComponent } from './update-modal/update-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ListOfTodoItemsComponent,
    TodoItemComponent,
    DeleteModalComponent,
    UpdateModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    MatCardModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
