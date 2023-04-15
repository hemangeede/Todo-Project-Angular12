import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-todo-project';
  constructor() {
  //  setTimeout(() => {
  //    this.title = "Blue Title";
  //  }, 2000);
  }
  
}
