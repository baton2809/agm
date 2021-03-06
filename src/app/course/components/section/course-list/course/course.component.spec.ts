import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseComponent } from './course.component';
import { Course } from 'src/app/course/models/course';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TimePrettyPipe } from 'src/app/shared/pipes/time-pretty.pipe';

// Test as a class

describe('Test as a class - CourseComponent', () => {
  const component = new CourseComponent();

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create property', () => {
    expect(component.deleteCourse).toBeDefined();
  });

  it('should create method', () => {
    expect(component.onDeleteCourse).toBeDefined();
  });
});


// Use Stand Alone testing

describe('Use Stand Alone testing - CourseComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;
  const course = {id: 42, title: 'Test Name',  creationDate: new Date(2020, 5, 24),
                  duration: 120, description: 'blah-bla-bla', topRated: false};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseComponent, TimePrettyPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    component.course = course;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should omit delete event when clicked', () => {
    const deleteButton = fixture.debugElement.query(By.css('.button-delete'));

    let deletedCourse: Course;
    component.deleteCourse.subscribe((coursex: Course) => deletedCourse = coursex);

    deleteButton.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(deletedCourse).toBeGreaterThanOrEqual(course.id);
  });
});

// Test host testing

@Component({
  template: `<app-course [course] = "course" (deleteCourse)="onDelete($event)"></app-course>`
})
class TestHostComponent {
  course: Course = {id: 42, title: 'Test Name',  creationDate: new Date(2020, 2, 17),
                    duration: 120, description: 'blah-bla-bla', topRated: false};
  deletedCourseId: number;
  onDelete(courseId: number) { this.deletedCourseId = courseId; }
}

describe('Test host testing - CourseComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseComponent, TestHostComponent, TimePrettyPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should omit delete event when clicked', () => {
    const deleteButton = fixture.debugElement.query(By.css('.button-delete'));

    deleteButton.nativeElement.click();
    fixture.detectChanges();

    expect(component.deletedCourseId).toBe(component.course.id);
  });
});
