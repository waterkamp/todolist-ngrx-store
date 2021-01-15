import { Todo } from "../models/todo";

export interface TodosState {
  list: Todo[];
  selected?: Todo;
}
