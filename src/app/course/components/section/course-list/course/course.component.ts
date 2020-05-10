import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges,
  AfterViewChecked, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { Course } from 'src/app/course/models/course';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/course/services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseComponent implements OnInit, OnChanges,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  @Input() course: Course;
  @Output() deleteCourse = new EventEmitter();

  constructor(private router: Router, private service: CourseService) {
    console.log('Child constructor');
  }

  ngOnInit(): void {
    // if (this.course.id == undefined) {
    //   const id = +this.route.snapshot.paramMap.get('id');
    //   this.course = this.service.getCourseById(id)
    // }
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

  editCourse() {
    console.log('navigate to edit course #' + this.course.id);
    this.router.navigate(['courses', this.course.id]);
  }

}
