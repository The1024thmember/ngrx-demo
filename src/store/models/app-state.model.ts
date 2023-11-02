import { CourseItem } from './courseItem.model';

export interface AppState {
  readonly courses: Array<CourseItem>;
}
