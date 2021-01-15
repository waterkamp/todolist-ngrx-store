import { AppState } from "../app.state";

export const selectTodoList = (state: AppState) => state.todos.list;
export const getSelectedTodo = (state: AppState) => state.todos.selected;
