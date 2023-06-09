import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todos } from '../../Todos';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todos;
  @Input() i: number;
  @Output() todoDelete: EventEmitter<Todos> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todos> = new EventEmitter();

  constructor() {
    this.todo = new Todos();
    this.i = 0;
  }

  ngOnInit(): void {
  }
  onClick(todo: Todos) {
    this.todoDelete.emit(todo);
  }
  onCheckboxClick(todo: Todos) {
    this.todoCheckbox.emit(todo);
  }

}
