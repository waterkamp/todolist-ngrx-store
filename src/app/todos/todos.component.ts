import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../state/app.state';
import { Todo } from './../models/todo';
import * as selectors from './../state/selectors/todos.selectors';
import * as todoActions from './../state/actions/todos.actions';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos$: Observable<Todo[]> = this.store.select(selectors.selectTodos);

  selectingMode = false;
  isDetailView = false;

  todoName: string = '';
  todoDescription: string = '';
  selectedTodo?: Todo;
  selectedTodoIds: number[] = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(todoActions.loadAll());
  }

  addTodo() {
    // this.todos.push({id: this.todos.length + 1, completed: false, name: this.todoName});
  }

  deleteSelectedTodos() {
    this.selectedTodoIds.forEach(id => {
      // this.todos = this.todos.filter(t => t.id !== id);
    });

    this.selectingMode = false;
  }



  onTodoCheck(event: MatCheckboxChange) {
    console.log(event.source.id);
    console.log(event.source.checked);

    if (event.source.checked) {
      this.selectedTodoIds.push(parseInt(event.source.id));
    } else {
      this.selectedTodoIds = this.selectedTodoIds.filter(id => id !== parseInt(event.source.id));
    }
  }

  showTodoDetail(todo: Todo) {
    if (this.selectingMode) { return; }
    this.isDetailView = true;
    this.selectedTodo = todo;
  }
}
