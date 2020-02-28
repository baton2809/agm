import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {

  public text2search: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSearchCourse(): void {
    console.log(this.text2search);
  }
}
