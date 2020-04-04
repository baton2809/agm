import {
  Component, OnInit, OnChanges, SimpleChanges,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, Input
} from '@angular/core';
import { AngularCourse, Course } from 'src/app/course/models/course';
import { SearchPipe } from 'src/app/shared/pipes/search.pipe';
import { CourseService } from 'src/app/course/services/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.sass']
})
export class CourseListComponent implements OnInit, OnChanges,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  courses: Course[] = [];
  search: SearchPipe = new SearchPipe();
  id2delete: number;

  @Input() filter: string;

  constructor(private courseService: CourseService ) {
    console.log('Root constructor call');
  }

  ngOnInit(): void {
    console.log('Root OnInit call');
    this.courses = this.courseService.getCourses();
  }

  ngOnChanges(changes: SimpleChanges) {
    // Doesn't invoke due to context doesn't provide a [value] input binding
    console.log('Root OnChanges call: ', changes);
    console.log('filter ' + this.filter);

    this.courses = this.search.transform(this.filter, this.courseService.getCourses());
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

  onDelete(id: number) {
    this.id2delete = id;
    console.log(id);
    const popup = document.querySelector('#xmas-popup') as HTMLElement;
    popup.style.display = 'block';
  }

  onClose() {
    console.log('Popup is closed');
    const popup = document.querySelector('#xmas-popup') as HTMLElement;
    popup.style.display = 'none';
  }

  onConfirm(id: number) {
    console.log('Course ' + id + ' is deleted');
    this.courseService.removeCourse(id);
    this.onClose();
  }
}
