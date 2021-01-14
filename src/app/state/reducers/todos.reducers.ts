import { createReducer, on } from '@ngrx/store';
import { Todo } from 'src/app/models/todo';
import * as todoActions from './../actions/todos.actions';

export const initialState: Todo[] = [];

export const todosReducer = createReducer(
  initialState,
  on(todoActions.loadAll, state => [...state]),
);
