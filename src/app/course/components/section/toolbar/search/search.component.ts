import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {

  public text2search: string;

  @Output() findCourses = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSearchCourse(): void {
    console.log('> ' + this.text2search);
    this.findCourses.emit(this.text2search);
  }
}
