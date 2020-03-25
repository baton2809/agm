import { Pipe, PipeTransform } from '@angular/core';
import { Course } from 'src/app/course/models/course';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(text2search: string, courses: Course[]): Course[] {
    return courses.filter((course) => course.title === text2search);
  }

}
