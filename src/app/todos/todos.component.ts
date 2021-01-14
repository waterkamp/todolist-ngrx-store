import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatSelectionListChange } from '@angular/material/list';
import { Todo } from './../models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  selectingMode = false;
  isDetailView = false;

  todoName: string = '';
  todoDescription: string = '';
  selectedTodo?: Todo;
  selectedTodoIds: number[] = [];
  todos: Todo[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addTodo() {
    this.todos.push({id: this.todos.length + 1, completed: false, name: this.todoName});
  }

  deleteSelectedTodos() {
    this.selectedTodoIds.forEach(id => {
      this.todos = this.todos.filter(t => t.id !== id);
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
