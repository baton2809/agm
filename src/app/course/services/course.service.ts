import { Injectable } from '@angular/core';
import { Course, AngularCourse } from '../models/course';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  // courses: Course[] = [
  //   new AngularCourse(444, 'Video Course 1. Name tag', new Date(1587137219735), 18,
  //     `Learn about where you can find course descriptions, what information they include,
  //   how they work, and details about various components of a course description.
  //     Course descriptions report information about a university or college's classes.
  //     They're published both in course catalogs that outline degree requirements
  //       and in course schedules that contain descriptions for all courses
  //       offered during a particular semester.`, false),
  //   new AngularCourse(123, 'Video Course 2.', new Date(2020, 2, 1), 146,
  //     `Learn about where you can find course descriptions, what information they include,
  //   how they work, and details about various components of a course description.
  //     Course descriptions report information about a university or college's classes.
  //     They're published both in course catalogs that outline degree requirements
  //       and in course schedules that contain descriptions for all courses
  //       offered during a particular semester.`, true),
  //   new AngularCourse(444, 'Video Course 1. Name tag', new Date(2020, 2, 17), 78,
  //     `Learn about where you can find course descriptions, what information they include,
  //   how they work, and details about various components of a course description.
  //     Course descriptions report information about a university or college's classes.
  //     They're published both in course catalogs that outline degree requirements
  //       and in course schedules that contain descriptions for all courses
  //       offered during a particular semester.`, false),
  //   new AngularCourse(222, 'Video Course 3.', new Date(2018, 11, 8), 87,
  //     `Learn about where you can find course descriptions, what information they include,
  //   how they work, and details about various components of a course description.
  //     Course descriptions report information about a university or college's classes.
  //     They're published both in course catalogs that outline degree requirements
  //       and in course schedules that contain descriptions for all courses
  //       offered during a particular semester.`, false),
  // ];

  courses: Course[]

  constructor(private httpClient: HttpClient) { }

  getCourses(): Course[] {
    if (this.courses) {
      console.log('>>>>>');
      return this.courses;
    }
    console.log('<<<<<');
    this.httpClient.get<Course[]>('http://localhost:3000/courses/')
    .subscribe((courses) => {
      this.courses = courses;
    });
    return this.courses;
  }

  createCourse(course: Course) {
    const newCourse = {
      id: course.id,
      title: course.title,
      creationDate: new Date(course.creationDate),
      duration: course.duration,
      description: course.description,
      topRated: course.topRated,
    } as Course;
    this.httpClient.post<Course>('http://localhost:3000/courses/', newCourse)
    .subscribe((course) => console.log('create new Course with id #' + course.id), err => console.log(err))
    this.courses.push(newCourse);
  }

  getCourseById(id: number) {
    return this.courses.find(course => course.id === id);
  }

  getFirstNCourses(start: number, count: number) {
    this.httpClient.get<Course[]>('http://localhost:3000/courses/',
    {params: {start: '0', count:'1'}})
    .subscribe((courses) => {
      this.courses = courses;
    });
    return this.courses;
  }

  updateCourse(course: Course) {
    const i = this.courses.findIndex(value => value.id === course.id);
    this.courses[i] = course;
  }

  removeCourse(id: number) {
    this.httpClient.delete<void>(`http://localhost:3000/courses/${id}`)
    .subscribe(() => console.log('Course with id #' + id + ' is deleted.'),
    (error) => {console.log(error)});

    const i = this.courses.findIndex(value => value.id === id);
    this.courses.splice(i, 1);
  }

}


