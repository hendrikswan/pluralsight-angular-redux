import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';
import { Course } from './course';
import { FilterTextComponent, FilterService } from '../blocks/filter-text';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses: Course[];
  filteredCourses = this.courses;

  constructor(private _courseService: CourseService, private _filterService: FilterService) {
  }

  filterChanged(searchText: string) {
    console.log('user searched: ', searchText);
    this.filteredCourses = this._filterService.filter(searchText, ['id', 'name', 'topic'], this.courses);
  }

  getCourses() {
    this._courseService.getCourses()
      .subscribe(courses => {
        this.courses = this.filteredCourses = courses;
      });
  }

  ngOnInit() {
    this.getCourses();
    componentHandler.upgradeDom();
  }
}
