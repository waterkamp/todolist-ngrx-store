import { createAction } from '@ngrx/store';
// loadTodos action
export const loadAll = createAction('[Todos] Load');

// loadTodosSuccess action
export const successfullyLoaded = createAction('[Todos] Todos successfully loaded');
