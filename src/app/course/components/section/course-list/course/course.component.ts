import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges,
  AfterViewChecked, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit } from '@angular/core';
import { Course } from 'src/app/course/models/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.sass']
})
export class CourseComponent implements OnInit, OnChanges,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  @Input() course: Course;
  @Output() deleteCourse = new EventEmitter();

  constructor() {
    console.log('Child constructor');
  }

  ngOnInit(): void {
    console.log('Child onInit');
  }

  ngOnChanges(changes: SimpleChanges) {
    // Invokes due to context provides a [value] input binding
    console.log('Child onChanges: ', changes);
  }

  // ngDoCheck() {
  //   console.log('--> doCheck event ', this.course.id);
  // }

  ngAfterContentInit() {
    console.log('--> afterContentInit event ', this.course.id);
  }

  ngAfterContentChecked() {
    console.log('--> afterContentChecked event ', this.course.id);
  }

  ngAfterViewInit() {
    console.log('--> afterViewInit event ', this.course.id);
  }

  ngAfterViewChecked() {
    console.log('--> afterViewChecked event ', this.course.id);
  }

  onDeleteCourse() {
    this.deleteCourse.emit(this.course.id);
  }

}
