import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/course';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.sass']
})
export class SectionComponent implements OnInit {

  public text2search: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSearchCourses(text2search: string): void {
    console.log('>>> ' + text2search);
    this.text2search = text2search;
  }

}
