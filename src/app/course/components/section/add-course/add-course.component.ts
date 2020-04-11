import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/course/services/course.service';
import { Course } from 'src/app/course/models/course';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.sass']
})
export class AddCourseComponent implements OnInit {

  public title = '';
  public description = '';
  public duration = 0;
  public date = new Date();
  public authors = '';

  public counterId = 1;

  constructor(private courseService: CourseService,
              private router: Router) { }

  ngOnInit(): void {
    this.counterId = this.courseService.getCourses().length + 1;
  }

  Add() {
    const course = {
      id: this.counterId,
      title: this.title,
      creationDate: this.date,
      duration: this.duration,
      description: this.description,
      topRated: false,
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
