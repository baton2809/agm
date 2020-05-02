import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/course/services/course.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/course/models/course';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.sass']
})
export class UpdateCourseComponent implements OnInit {

  public id = -1;
  public title = '';
  public description = '';
  public duration = 0;
  public date = new Date();
  public authors = '';

  constructor(private router: Router,
              private route: ActivatedRoute,
              private courseService: CourseService) { }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    if (this.id !== 0) {
      const updateCourse = this.courseService.getCourseById(this.id);
      if (updateCourse) {
        this.title = updateCourse.title;
        this.description = updateCourse.description;
        this.duration = updateCourse.duration;
        this.date = updateCourse.creationDate;
      }
    }
  }

  Update() {
    const course = {
      id: this.id,
      title: this.title,
      creationDate: this.date,
      duration: this.duration,
      description: this.description,
      topRated: false,
    } as Course;
    this.courseService.createCourse(course);
    this.router.navigate(['courses']);
    console.log('Course is updated!');
  }

  Cancel() {
    this.router.navigate(['courses']);
  }
}
