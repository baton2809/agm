import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/course/services/course.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/course/models/course';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.sass']
})
export class UpdateCourseComponent implements OnInit {

  form: FormGroup;

  public id = -1;
  // public title = '';
  // public description = '';
  // public duration = 0;
  // public date = new Date();
  public authors = '';

  constructor(private router: Router,
              private route: ActivatedRoute,
              private courseService: CourseService) {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      description: new FormControl('', [Validators.required, Validators.maxLength(500)]),
      duration: new FormControl('', [ValidateDuration]),
      date: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$')]),
    });
  }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    if (this.id !== 0) {
      const updateCourse = this.courseService.getCourseById(this.id);
      if (updateCourse) {
        this.form.get('title').setValue(updateCourse.title);
        this.form.get('description').setValue(updateCourse.description);
        this.form.get('date').setValue(updateCourse.creationDate);
        this.form.get('duration').setValue(updateCourse.duration);
        // this.title = updateCourse.title;
        // this.description = updateCourse.description;
        // this.duration = updateCourse.duration;
        // this.date = updateCourse.creationDate;
      }
    }
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

  Update() {
    const course = {
      // id: this.id,
      // title: this.title,
      // creationDate: this.date,
      // duration: this.duration,
      // description: this.description,
      id: this.id,
      title: this.form.get('title').value,
      description: this.form.get('description').value,
      creationDate: new Date(this.form.get('date').value),
      duration: this.form.get('duration').value,
      topRated: false,
    } as Course;
    this.courseService.updateCourse(course);
    this.router.navigate(['courses']);
    console.log('Course is updated!');
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
