import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { filter, debounceTime, switchMap } from 'rxjs/operators';
import { Course } from 'src/app/course/models/course';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {

  // public text2search: string;

  @Output() findCourses = new EventEmitter();

  searchSubj$ = new BehaviorSubject('');

  constructor(private httpClient: HttpClient) {
    this.searchSubj$.pipe(
      filter(text => !!text && text.length > 3),
      debounceTime(1000),
      switchMap((textFragment) => {
        return this.httpClient.get<Course[]>('http://localhost:3004/courses/', {params: {textFragment}});
      })).subscribe(this.findCourses);

    // this.searchSubj$.subscribe(console.log);
    // this.findCourses.emit(this.text2search);
  }

  ngOnInit(): void {
  }

  // onSearchCourse(): void {
  //   console.log('> ' + this.text2search);
  //   this.findCourses.emit(this.text2search);
  // }
}
