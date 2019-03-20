import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IAppStore } from './store/store.models';
import { Todo } from './todos/models/todos.models';
import * as TodoActions from './todos/actions/todos.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  todos: Observable<Array<Todo>>;
  constructor(private store: Store<IAppStore>) {

    this.todos = this.store.select('todos');
    this.store.subscribe((state) => {
      console.log('state', state);
    });
  }

  onAddTodo(newTodo) {
    this.store.dispatch(new TodoActions.AddTodo(newTodo.text));
  }

  onCompletedTodo(todo) {
    this.store.dispatch(new TodoActions.CompleteTodo(todo));
  }

  onDeletedTodo(todo) {
    this.store.dispatch(new TodoActions.DeleteTodo(todo));
  }

  onUpdateTodo(todo) {
    this.store.dispatch(new TodoActions.UpdateTodo(todo));
  }
  onEditTodo(todo) {
    this.store.dispatch(new TodoActions.EditTodo(todo));
  }

  onShow(filter) {
    this.store.dispatch(new TodoActions[filter]());
  }
}
