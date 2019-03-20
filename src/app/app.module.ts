import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule , MatRadioModule, MatInputModule, MatCardModule } from '@angular/material';

import { INITIAL_STATE } from './store/store.models';
import { reducers } from './store/reducers.models';
import { AppComponent } from './app.component';
import { NewTodoComponent } from './todos/components/new-todo/new-todo.component';
import { TodoListComponent } from './todos/components/todo-list/todo-list.component';
import { TodoListItemComponent } from './todos/components/todo-list-item/todo-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NewTodoComponent,
    TodoListComponent,
    TodoListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatRadioModule,
    MatInputModule,
    MatCardModule,
    StoreModule.forRoot(reducers, {initialState: INITIAL_STATE})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
