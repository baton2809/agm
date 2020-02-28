import {
  Component, OnInit, OnChanges, SimpleChanges,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked
} from '@angular/core';
import { AngularCourse, Course } from 'src/app/course/models/course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.sass']
})
export class CourseListComponent implements OnInit, OnChanges,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  courses: Course[] = [];

  constructor() {
    console.log('Root constructor call');
  }

  ngOnInit(): void {
    console.log('Root OnInit call');
    this.courses = [
      new AngularCourse(444, 'Video Course 1. Name tag', '8 Nov, 2018', '1h 18 min ',
        `Learn about where you can find course descriptions, what information they include,
      how they work, and details about various components of a course description.
        Course descriptions report information about a university or college's classes.
        They're published both in course catalogs that outline degree requirements
          and in course schedules that contain descriptions for all courses
          offered during a particular semester.`),
      new AngularCourse(123, 'Video Course 2.', '9 Nov, 2018', '1h 28 min ',
        `Learn about where you can find course descriptions, what information they include,
      how they work, and details about various components of a course description.
        Course descriptions report information about a university or college's classes.
        They're published both in course catalogs that outline degree requirements
          and in course schedules that contain descriptions for all courses
          offered during a particular semester.`),
      new AngularCourse(222, 'Video Course 3.', '10 Nov, 2018', '1h 08 min ',
        `Learn about where you can find course descriptions, what information they include,
      how they work, and details about various components of a course description.
        Course descriptions report information about a university or college's classes.
        They're published both in course catalogs that outline degree requirements
          and in course schedules that contain descriptions for all courses
          offered during a particular semester.`),
    ];
  }

  ngOnChanges(changes: SimpleChanges) {
    // Doesn't invoke due to context doesn't provide a [value] input binding
    console.log('Root OnChanges call: ', changes);
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
