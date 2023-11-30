import { Action } from '@ngrx/store';
import { AddBookAction, BookActionType } from '../actions/book.action';
import { BookItem } from '../models/bookItem.model';

//create a dummy initial state
const initialState: Array<BookItem> = [
  {
    id: 1,
    author: 'Mark Twain',
    name: 'Jumping Frog of Calaveras County',
    type: 'Classical',
  },
];

export function BookReducer(
  state: Array<BookItem> = initialState,
  action: Action
) {
  switch (action.type) {
    case BookActionType.Add_Book:
      const addBookAction = action as AddBookAction;
      return [...state, addBookAction.payload];
    default:
      return state;
  }
}
