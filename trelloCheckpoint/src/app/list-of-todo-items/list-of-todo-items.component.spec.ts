import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfTodoItemsComponent } from './list-of-todo-items.component';

describe('ListOfTodoItemsComponent', () => {
  let component: ListOfTodoItemsComponent;
  let fixture: ComponentFixture<ListOfTodoItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfTodoItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfTodoItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
