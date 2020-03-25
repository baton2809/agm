import { Pipe, PipeTransform } from '@angular/core';
import { Course } from 'src/app/course/models/course';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(args: Course[]): Course[] {
    args.sort((a, b) => a.creationDate < b.creationDate ? 1 : -1);
    return args;
  }

}
