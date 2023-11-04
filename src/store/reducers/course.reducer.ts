// import the interface
import { Action } from '@ngrx/store';
import { AddItemAction, CourseActionType } from '../actions/course.action';
import { CourseItem } from '../models/courseItem.model';
//create a dummy initial state
const initialState: Array<CourseItem> = [
  {
    id: '1',
    department: 'Computer Engineering',
    name: 'C++ Programming',
  },
];
export function CourseReducer(
  state: Array<CourseItem> = initialState,
  action: Action
) {
  switch (action.type) {
    case CourseActionType.ADD_ITEM:
      console.log('Reducer: running CourseActionType.ADD_ITEM');
      const addCourseAction = action as AddItemAction;
      return [...state, addCourseAction.payload];
    case CourseActionType.SUCCESS:
      console.log('Reducer: running CourseActionType.SUCCESS');
      return;
    default:
      return state;
  }
}
