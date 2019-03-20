import { ActionReducerMap, combineReducers } from '@ngrx/store';

import { IAppStore } from './store.models';
import { todosReducer } from '../todos/reducers/todos.reducers';

export const reducers: ActionReducerMap<IAppStore> = {
    todos: todosReducer
};
