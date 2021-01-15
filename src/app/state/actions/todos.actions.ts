import { createAction, props } from '@ngrx/store';
import { Todo } from 'src/app/models/todo';
// loadTodos action
export const loadAll = createAction('[Todos] Load');

// loadTodosSuccess action
export const successfullyLoaded = createAction(
  '[Todos] Todos successfully loaded',
  props<{todos: Todo[]}>()
);

// addTodo action
export const addTodo = createAction(
  '[Todos] Add',
  props<{name: string}>()
);

// selectTodo action
export const selectTodo = createAction(
  '[Todos] Select',
  props<{id: number}>()
);

// updateTodo action
export const updateTodo = createAction(
  '[Todos] Update',
  props<{todo: Todo}>()
);

// deleteTodo action
export const deleteTodo = createAction(
  '[Todos] Delete',
  props<{ids: number[]}>()
);
