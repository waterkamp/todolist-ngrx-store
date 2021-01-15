import { Todo } from "../models/todo";
import { TodosState } from "./todos.state";

export interface AppState {
  todos: TodosState;
}
