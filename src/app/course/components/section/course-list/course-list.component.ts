import {
  Component, OnInit, OnChanges, SimpleChanges,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, Input
} from '@angular/core';
import { AngularCourse, Course } from 'src/app/course/models/course';
import { SearchPipe } from 'src/app/shared/pipes/search.pipe';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.sass']
})
export class CourseListComponent implements OnInit, OnChanges,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  courses: Course[] = [];
  search: SearchPipe = new SearchPipe();

  @Input() filter: string;

  constructor() {
    console.log('Root constructor call');
  }

  ngOnInit(): void {
    console.log('Root OnInit call');
    this.courses = this.fetchAllCourses();
  }

  fetchAllCourses(): Course[] {
    return [
      new AngularCourse(444, 'Video Course 1. Name tag', new Date(2020, 5, 24), 18,
        `Learn about where you can find course descriptions, what information they include,
      how they work, and details about various components of a course description.
        Course descriptions report information about a university or college's classes.
        They're published both in course catalogs that outline degree requirements
          and in course schedules that contain descriptions for all courses
          offered during a particular semester.`, false),
      new AngularCourse(123, 'Video Course 2.', new Date(2020, 2, 1), 146,
        `Learn about where you can find course descriptions, what information they include,
      how they work, and details about various components of a course description.
        Course descriptions report information about a university or college's classes.
        They're published both in course catalogs that outline degree requirements
          and in course schedules that contain descriptions for all courses
          offered during a particular semester.`, true),
      new AngularCourse(444, 'Video Course 1. Name tag', new Date(2020, 2, 17), 78,
        `Learn about where you can find course descriptions, what information they include,
      how they work, and details about various components of a course description.
        Course descriptions report information about a university or college's classes.
        They're published both in course catalogs that outline degree requirements
          and in course schedules that contain descriptions for all courses
          offered during a particular semester.`, false),
      new AngularCourse(222, 'Video Course 3.', new Date(2018, 11, 8), 87,
        `Learn about where you can find course descriptions, what information they include,
      how they work, and details about various components of a course description.
        Course descriptions report information about a university or college's classes.
        They're published both in course catalogs that outline degree requirements
          and in course schedules that contain descriptions for all courses
          offered during a particular semester.`, false),
    ];
  }

  ngOnChanges(changes: SimpleChanges) {
    // Doesn't invoke due to context doesn't provide a [value] input binding
    console.log('Root OnChanges call: ', changes);
    console.log('filter ' + this.filter);

    this.courses = this.search.transform(this.filter, this.fetchAllCourses());
  }

  // ngDoCheck() {
  //   console.log('-> doCheck event');
  // }

  ngAfterContentInit() {
    console.log('-> afterContentInit event');
  }

  ngAfterContentChecked() {
    console.log('-> afterContentChecked event');
  }

  ngAfterViewInit() {
    console.log('-> afterViewInit event');
  }

  ngAfterViewChecked() {
    console.log('-> afterViewChecked event');
  }

  onDelete(id: any) {
    console.log(id);
  }

}
