import { Component, OnInit } from '@angular/core';
import { CourseComponent } from '../course/course.component';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.sass']
})
export class MoreComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  onLoadMore(): void {
    console.log('Load more');
  }
}
