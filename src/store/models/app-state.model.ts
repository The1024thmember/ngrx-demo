import { BookItem } from './bookItem.model';

export interface AppState {
  readonly Books: Array<BookItem>;
}
