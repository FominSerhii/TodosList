import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule , MatRadioModule, MatInputModule, MatCardModule } from '@angular/material';

import { AppComponent } from './app.component';
import { reducers } from './store/reducers.models';
import { INITIAL_STATE } from './store/store.models';
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
    FormsModule,
    BrowserModule,
    MatCardModule,
    MatRadioModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, {initialState: INITIAL_STATE})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
