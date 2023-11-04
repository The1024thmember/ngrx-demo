import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { ApiService } from 'src/services/api.service';
import * as CourseActions from '../actions/course.action';

@Injectable()
export class CourseEffects {
  constructor(private actions: Actions, private api: ApiService) {}

  addCourse$ = createEffect(() =>
    this.actions.pipe(
      ofType(CourseActions.CourseActionType.ADD_ITEM), // Listen for the 'addCourse' action
      mergeMap((action) => {
        // whatever we want to do in here
        console.log('Effect: executing effect function');
        return this.api.fakeApiCall().pipe(
          map((result) => {
            return new CourseActions.SuccessAction(result);
          })
        );
      })
    )
  );
}
