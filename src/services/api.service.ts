import { Injectable } from '@angular/core';
import { Observable, interval, map, take } from 'rxjs';
import { BookItem } from 'src/store/models/bookItem.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}
  // get
  fakeGetCall(): Observable<BookItem> {
    return interval(1000).pipe(
      take(1),
      map(() => {
        return {
          id: 2,
          author: 'William Shakespeare',
          name: 'Henry VI',
          type: 'classical',
        };
      })
    );
  }

  // update
  fakeUpdateCall(): Observable<BookItem> {
    return interval(1000).pipe(
      take(1),
      map(() => {
        return {
          id: 2,
          author: 'William Shakespeare',
          name: 'Henry VI',
          type: 'classical',
        };
      })
    );
  }

  // delete
  fakeDeleteCall(): Observable<BookItem> {
    return interval(1000).pipe(
      take(1),
      map(() => {
        return {
          id: 2,
          author: 'William Shakespeare',
          name: 'Henry VI',
          type: 'classical',
        };
      })
    );
  }
}
