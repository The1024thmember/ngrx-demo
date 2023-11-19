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
    case BookActionType.SUCCESS:
      const addBookAction = action as AddItemAction;
      return [...state, addBookAction.payload];
    // case BookActionType.SUCCESS:
    //   console.log('Reducer: running BookActionType.SUCCESS');
    //   return;
    default:
      return state;
  }
}
