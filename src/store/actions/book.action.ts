import { Action } from '@ngrx/store';
import { BookItem } from '../models/bookItem.model';

export enum BookActionType {
  Add_Book = '[Book] Add Book',
}

export class AddBookAction implements Action {
  readonly type = BookActionType.Add_Book; //add an optional payload
  constructor(public payload: BookItem) {}
}
