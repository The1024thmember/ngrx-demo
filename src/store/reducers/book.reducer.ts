// import the interface
import { Action } from '@ngrx/store';
import { AddItemAction, BookActionType } from '../actions/book.action';
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
    case BookActionType.ADD_ITEM:
      const addBookAction = action as AddItemAction;
      return [...state, addBookAction.payload];
    default:
      return state;
  }
}
