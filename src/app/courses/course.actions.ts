import { NgRedux } from 'ng2-redux';
import { IAppState } from '../store';
import { Injectable} from '@angular/core';
import { CourseService } from './course.service';

export const FILTER_COURSES = 'courses/FILTER';
export const REQUEST_COURSES_SUCCESS = 'courses/REQUEST_COURSES_SUCCESS';

@Injectable()
export class CourseActions {
    constructor(
        private ngRedux: NgRedux<IAppState>,
        private courseService: CourseService
    ) {}

    getCourses() {
        this.courseService.getCourses()
        .subscribe(courses => {
            this.ngRedux.dispatch({
                type: REQUEST_COURSES_SUCCESS,
                courses,
            });
        });
    }

    filterCourses(searchText:string) {
        this.ngRedux.dispatch({
            type: FILTER_COURSES,
            searchText,
        });
    }
}