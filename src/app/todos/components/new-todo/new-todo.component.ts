import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css']
})
export class NewTodoComponent implements OnInit {
  @Output() onCreateTodo;
  newTodo: string;
  constructor() {
    this.onCreateTodo = new EventEmitter();
  }

  ngOnInit() {
    this.newTodo = '';
  }

  onSaveTodo() {
    if (this.newTodo) {
      this.onCreateTodo.emit({text: this.newTodo});
    }
    this.newTodo = '';
  }

}
