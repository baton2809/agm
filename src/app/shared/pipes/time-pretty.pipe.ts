import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePretty'
})
export class TimePrettyPipe implements PipeTransform {

  transform(value: number, ...args: number[]): string {
    const hours = (value / 60);
    const rhours = Math.round(hours);

    const minutes = Math.round(60 * (hours - rhours));

    if (rhours === 0) {
      return minutes + ' min';
    } else {
      return rhours + ' h ' + minutes + ' min';
    }
  }
}
