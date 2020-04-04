import { Injectable } from '@angular/core';
import { Course, AngularCourse } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courses: Course[] = [
    new AngularCourse(444, 'Video Course 1. Name tag', new Date(2020, 5, 24), 18,
      `Learn about where you can find course descriptions, what information they include,
    how they work, and details about various components of a course description.
      Course descriptions report information about a university or college's classes.
      They're published both in course catalogs that outline degree requirements
        and in course schedules that contain descriptions for all courses
        offered during a particular semester.`, false),
    new AngularCourse(123, 'Video Course 2.', new Date(2020, 2, 1), 146,
      `Learn about where you can find course descriptions, what information they include,
    how they work, and details about various components of a course description.
      Course descriptions report information about a university or college's classes.
      They're published both in course catalogs that outline degree requirements
        and in course schedules that contain descriptions for all courses
        offered during a particular semester.`, true),
    new AngularCourse(444, 'Video Course 1. Name tag', new Date(2020, 2, 17), 78,
      `Learn about where you can find course descriptions, what information they include,
    how they work, and details about various components of a course description.
      Course descriptions report information about a university or college's classes.
      They're published both in course catalogs that outline degree requirements
        and in course schedules that contain descriptions for all courses
        offered during a particular semester.`, false),
    new AngularCourse(222, 'Video Course 3.', new Date(2018, 11, 8), 87,
      `Learn about where you can find course descriptions, what information they include,
    how they work, and details about various components of a course description.
      Course descriptions report information about a university or college's classes.
      They're published both in course catalogs that outline degree requirements
        and in course schedules that contain descriptions for all courses
        offered during a particular semester.`, false),
  ];

  constructor() { }

  getCourses(): Course[] {
    return this.courses;
  }

  createCourse(course: Course) {
    this.courses.push(course);
  }

  getCourseById(id: number) {
    return this.courses.find(course => course.id === id);
  }

  updateCourse(course: Course) {
    const i = this.courses.findIndex(value => value.id === course.id);
    this.courses[i] = course;
  }

  removeCourse(id: number) {
    const i = this.courses.findIndex(value => value.id === id);
    this.courses.splice(i, 1);
  }

}


