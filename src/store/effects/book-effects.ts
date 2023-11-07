import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { ApiService } from 'src/services/api.service';
import * as BookActions from '../actions/book.action';

@Injectable()
export class BookEffects {
  constructor(private actions: Actions, private api: ApiService) {}

  addCourse$ = createEffect(() =>
    this.actions.pipe(
      ofType(BookActions.BookActionType.ADD_ITEM), // Listen for the 'addBook' action
      mergeMap((action) => {
        // whatever we want to do in here
        console.log('Effect: executing effect function');
        return this.api.fakeGetCall().pipe(
          map((result) => {
            return new BookActions.SuccessAction(result);
          })
        );
      })
    )
  );
}
