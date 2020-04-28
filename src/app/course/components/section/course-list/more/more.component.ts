import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/course/services/course.service';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.sass']
})
export class MoreComponent implements OnInit {

  constructor(private courseService: CourseService) {
  }

  ngOnInit(): void {
  }

  onLoadMore(): void {
    console.log('Load more');
  }
}
