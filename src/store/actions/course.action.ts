import { Action } from '@ngrx/store';
import { CourseItem } from '../models/courseItem.model';
export enum CourseActionType {
  ADD_ITEM = '[COURSE] Add Course',
  SUCCESS = '[COURSE] Succeed',
}
export class AddItemAction implements Action {
  readonly type = CourseActionType.ADD_ITEM;
  //add an optional payload
  constructor(public payload: CourseItem) {}
}
export class SuccessAction implements Action {
  readonly type = CourseActionType.SUCCESS;
  //add an optional payload
  constructor(public payload: CourseItem) {
    console.log('Action: creating SuccessAction');
  }
}
export type CourseAction = AddItemAction;
