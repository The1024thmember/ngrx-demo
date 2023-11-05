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
