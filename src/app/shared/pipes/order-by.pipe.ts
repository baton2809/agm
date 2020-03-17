import { Pipe, PipeTransform } from '@angular/core';
import { Course } from 'src/app/course/models/course';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(args: Course[]): Course[] {
    args.sort((a: Course, b: Course) => {
      if (a.creationDate < b.creationDate) {
        return 1;
      } else if (a.creationDate > b.creationDate) {
        return -1;
      } else {
        return 0;
      }
    });
    return args;
  }

}
