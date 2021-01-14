import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor() { }


  getAll(): Observable<Todo[]> {
    return of([
      {id: 1, name: 'My first Todo', description: 'This is my description', completed: false},
      {id: 2, name: 'My second Todo', description: 'This is my description', completed: false}
    ]);
  }
}
