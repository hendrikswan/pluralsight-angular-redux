import { reducer } from './reducer';
import { FILTER_COURSES } from '../courses/course.actions';

describe('Reducer', () => {
  it('should have the correct initial state', () => {
    const state = reducer(undefined, {});

    expect(state.courses.length).toBe(0);
    expect(state.filteredCourses.length).toBe(0);
  });

  describe('filterCourses', () => {
    const courses = [
      {
        "id": 1,
        "name": "Building Apps with React",
        "topic": "ReactJS"
      },
      {
        "id": 2,
        "name": "Building Apps with Angular",
        "topic": "AngularJS"
      },
      {
        "id":3,
        "name": "Building Apps with Angular and Redux",
        "topic": "Angular and Redux"
      }
    ];

    it('should filter out all courses with bad search', () => {
      const state = {
        courses,
        filteredCourses: courses,
      };

      const adaptedState = reducer(state, {
        type: FILTER_COURSES,
        searchText: 'bad search',
      });

      expect(adaptedState.courses.length).toBe(3);
      expect(adaptedState.filteredCourses.length).toBe(0);
    });

    it('should match a course with the right string', () => {
      const state = {
        courses,
        filteredCourses: courses,
      };

      const adaptedState = reducer(state, {
        type: FILTER_COURSES,
        searchText: 'redux',
      });

      expect(adaptedState.courses.length).toBe(3);
      expect(adaptedState.filteredCourses.length).toBe(1);
      const matchedCourse = adaptedState.filteredCourses[0];
      expect(matchedCourse.id).toBe(3);
    });
  });
})