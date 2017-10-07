import { Course } from '../courses/course';
import { IAppState } from './IAppState';
import { FILTER_COURSES, REQUEST_COURSES_SUCCESS } from '../courses/course.actions';

const courses = [];

const initialState: IAppState = {
    courses,
    filteredCourses: courses
};

function filterCourses(state, action) : IAppState {
  return Object.assign({}, state, {
    filteredCourses: state.courses.filter(c => c.name.toLowerCase().indexOf(action.searchText.toLowerCase()) > -1),
  });
}

function storeCourses(state, action) : IAppState {
  return Object.assign({}, state, {
    courses: action.courses,
    filteredCourses: action.courses,
  });
}

export function reducer(state= initialState, action) {
    switch(action.type) {
      case FILTER_COURSES:
        return filterCourses(state, action);
      case REQUEST_COURSES_SUCCESS:
        return storeCourses(state, action);
      default:
        return state;
    }
}