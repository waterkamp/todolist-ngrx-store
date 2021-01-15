import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../state/app.state';
import { Todo } from './../models/todo';
import * as selectors from './../state/selectors/todos.selectors';
import * as todoActions from './../state/actions/todos.actions';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos$: Observable<Todo[]> = this.store.select(selectors.selectTodoList);
  getSelectedTodo$: Observable<Todo | undefined>;

  selectingMode = false;
  isDetailView = false;

  todoName: string = '';
  todoDescription: string = '';
  selectedTodoIds: number[] = [];

  constructor(private store: Store<AppState>) {
    this.getSelectedTodo$ = this.store.select(selectors.getSelectedTodo).pipe(map(todo => {
      if (!todo) return undefined;
      return {...todo};
    }));
  }

  ngOnInit(): void {
    this.store.dispatch(todoActions.loadAll());
  }

  addTodo() {
    this.store.dispatch(todoActions.addTodo({name: this.todoName}));
  }

  update(selectedTodo: Todo) {
    this.store.dispatch(todoActions.updateTodo({todo: selectedTodo}));
    this.isDetailView = false;
  }

  deleteSelectedTodos() {
    this.selectingMode = false;
    this.store.dispatch(todoActions.deleteTodo({ids: this.selectedTodoIds}));
    this.selectedTodoIds = [];
  }

  onTodoCheck(event: MatCheckboxChange) {
    if (event.source.checked) {
      this.selectedTodoIds.push(parseInt(event.source.id));
    } else {
      this.selectedTodoIds = this.selectedTodoIds.filter(id => id !== parseInt(event.source.id));
    }
  }

  showTodoDetail(todo: Todo) {
    if (this.selectingMode) { return; }
    this.isDetailView = true;
    this.store.dispatch(todoActions.selectTodo({id: todo.id}));
  }
}
