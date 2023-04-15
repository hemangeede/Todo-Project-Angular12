import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todos } from '../../Todos';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  title: string;
  desc: string;
  @Output() todoAdd: EventEmitter<Todos> = new EventEmitter();

  constructor() {
    this.title = "";
    this.desc = "";
  }

  ngOnInit(): void {
  }
  onSubmit() {
    const todo = {
      sno:8,
      title: this.title,
      desc: this.desc,
      active: true
    }
    this.todoAdd.emit(todo);
  }

}
