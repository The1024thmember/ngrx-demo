import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { ApiService } from 'src/services/api.service';
import { BookActionType, SuccessAction } from '../actions/Book.action';

@Injectable()
export class BookEffects {
  constructor(private actions: Actions, private api: ApiService) {}

  addBook$ = createEffect(() =>
    this.actions.pipe(
      ofType(BookActionType.Add_Book), // Listen for the 'addBook' action
      mergeMap((action) => {
        return this.api.fakeApiCall().pipe(
          map((result) => {
            return new SuccessAction(result);
          })
        );
      })
    )
  );
}
