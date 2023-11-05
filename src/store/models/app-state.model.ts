import { BookItem } from './bookItem.model';

export interface AppState {
  readonly books: Array<BookItem>;
}
