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

  editMode = false;
  isDetailView = false;

  todoName: string = '';
  selectedTodo?: Todo;
  todos: Todo[] = [
    {id: 1, name: 'my first todo', completed: false},
    {id: 2, name: 'my second todo', completed: false}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addTodo() {
    this.todos.push({id: this.todos.length + 1, completed: false, name: this.todoName});
  }

  onTodoCheck(event: MatCheckboxChange) {
    console.log(event.source.id);
    console.log(event.source.checked);
  }

  showTodoDetail(todo: Todo) {
    this.selectedTodo = todo;
    this.isDetailView = true;
  }
}
