import { Action } from '@ngrx/store';
import { BookItem } from '../models/bookItem.model';
export enum BookActionType {
  ADD_ITEM = '[Book] Add Book',
}
export class AddItemAction implements Action {
  readonly type = BookActionType.ADD_ITEM;
  //add an optional payload
  constructor(public payload: BookItem) {}
}
export type BookAction = AddItemAction;
