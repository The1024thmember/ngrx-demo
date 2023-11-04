import { Injectable } from '@angular/core';
import { Observable, interval, map, take } from 'rxjs';
import { CourseItem } from 'src/store/models/courseItem.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}

  fakeApiCall(): Observable<CourseItem> {
    return interval(1000).pipe(
      take(1),
      map(() => {
        return {
          id: '2',
          department: 'Test department',
          name: 'Test name',
        };
      })
    );
  }
}
