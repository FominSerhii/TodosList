import { Todo } from '../todos/models/todos.models';

export interface IAppStore {
    todos: Array<Todo>;
}

export const INITIAL_STATE: IAppStore = {
    todos: []
};
