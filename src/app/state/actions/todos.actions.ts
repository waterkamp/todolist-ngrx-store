import { createAction, props } from '@ngrx/store';
import { Todo } from 'src/app/models/todo';
// loadTodos action
export const loadAll = createAction('[Todos] Load');

// loadTodosSuccess action
export const successfullyLoaded = createAction(
  '[Todos] Todos successfully loaded',
  props<{todos: Todo[]}>()
);
