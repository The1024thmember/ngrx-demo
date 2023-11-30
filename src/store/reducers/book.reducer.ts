import { Action } from '@ngrx/store';
import { BookActionType, SuccessAction } from '../actions/Book.action';
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
    case BookActionType.Success:
      const addBookAction = action as SuccessAction;
      return [...state, addBookAction.payload];
    default:
      return state;
  }
}
