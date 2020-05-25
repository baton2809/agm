import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/course/services/course.service';
import { Course } from 'src/app/course/models/course';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.sass'],
})
export class AddCourseComponent implements OnInit {

  form: FormGroup;

  // public title = '';
  // public description = '';
  // public duration = 0;
  // public date = new Date();
  public authors = '';

  public counterId = 1;

  constructor(private courseService: CourseService,
              private router: Router) {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      description: new FormControl('', [Validators.required, Validators.maxLength(500)]),
      duration: new FormControl('', [ValidateDuration]),
      date: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$')]),
    });
  }

  async ngOnInit(): Promise<void> {
    this.counterId = (await this.courseService.getCourses()).length + 1;
  }

  get title() {
    return this.form.get('title');
  }

  get description() {
    return this.form.get('description');
  }

  get date() {
    return this.form.get('date');
  }

  get duration() {
    return this.form.get('duration');
  }

  Add() {
    // const course = {
    //   id: this.counterId,
    //   title: this.title,
    //   creationDate: this.date,
    //   duration: this.duration,
    //   description: this.description,
    //   topRated: false,
    // } as Course;
    const course = {
      id: this.counterId,
      title: this.form.get('title').value,
      description: this.form.get('description').value,
      creationDate: new Date(this.form.get('date').value),
      duration: this.form.get('duration').value,
      // creationDate: this.date,
      // duration: this.duration,
      // description: this.description,
      topRated: false
    } as Course;
    this.courseService.createCourse(course);
    this.counterId += 1;
    this.router.navigate(['courses']);
    console.log('New Course is added!');
  }

  Cancel() {
    this.router.navigate(['courses']);
  }
}

function ValidateDuration(control: AbstractControl): {[key: string]: any} | null  {
  if (isNaN(control.value)) {
    return {nan: true};
  }
  if (control.value > 200 || control.value < 1) {
    return {invalid: true};
  }
  return null;
}
