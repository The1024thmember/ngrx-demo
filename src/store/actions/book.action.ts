import { Action } from '@ngrx/store';
import { BookItem } from '../models/bookItem.model';
export enum BookActionType {
  ADD_ITEM = '[COURSE] Add Course',
  SUCCESS = '[COURSE] Succeed',
}
export class AddItemAction implements Action {
  readonly type = BookActionType.ADD_ITEM;
  //add an optional payload
  constructor(public payload: BookItem) {}
}
export class SuccessAction implements Action {
  readonly type = BookActionType.SUCCESS;
  //add an optional payload
  constructor(public payload: BookItem) {
    console.log('Action: creating SuccessAction');
  }
}
export type CourseAction = AddItemAction;

// actions can be divided into get_succeed, update_succeed, delete_succeed
// payload can be the type of the colleciton
//

// two sets of action to be triggered in one go:
// async api call should be triggered by some FE interaction
// after finishing api call, use effect to trigger another action that is consumed by reducer.

// Endpoints.book
// DataService(Endpoints.book).get('id') -> should call the self defined function (endpoint, filter, projection), so somehow DataService(Endpoints.book) when passed in should know which file's get function to call
// the get function defined in custom endpoint should only take care about the parameters, projections, and not how the data is emitted
// so there should be a universe get function defined somewhere that takes care of the async call, and triggers createEffect on async behaviour finishes.
