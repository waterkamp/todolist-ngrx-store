import { createReducer, on } from '@ngrx/store';
import { Todo } from 'src/app/models/todo';
import { TodosState } from '../todos.state';
import * as todoActions from './../actions/todos.actions';

export const initialState: TodosState = {list: [], selected: undefined};

export const todosReducer = createReducer(
  initialState,
  on(todoActions.successfullyLoaded, (state, {todos}) => ({...state, list: todos})),
  on(todoActions.addTodo, (state, {name}) => ({...state, list: [...state.list, {id: state.list.length + 1, name, description: '', completed: false}]})),
  on(todoActions.selectTodo, (state, {id}) => ({...state, selected: state.list.find(t => t.id === id)})),
  on(todoActions.updateTodo, (state, {todo}) => ({...state, list: [...state.list.filter(t => t.id !== todo.id), todo]})),
  on(todoActions.deleteTodo, (state, {ids}) => ({...state, list: [...state.list.filter(t => !ids.includes(t.id))]}))
);
