import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TodosService } from 'src/app/services/todos.service';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import * as todoActions from './../actions/todos.actions';

@Injectable()
export class TodoEffects {
  constructor(private actions$: Actions, private todosService: TodosService) { }

  loadTodos$ = createEffect(() => this.actions$.pipe(
    ofType(todoActions.loadAll),
    mergeMap(() => this.todosService.getAll()
      .pipe(
        map(todos => ({ type: todoActions.successfullyLoaded.type, payload: todos })),
        catchError(() => EMPTY)
      ))
    )
  );
}
