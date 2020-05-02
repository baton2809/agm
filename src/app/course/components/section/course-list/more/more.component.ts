import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CourseService } from 'src/app/course/services/course.service';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.sass']
})
export class MoreComponent implements OnInit {

  @Input() numberOfCoursesOnPage: number;
  @Output() updateCoursesList = new EventEmitter();

  constructor(private courseService: CourseService) {
  }

  ngOnInit(): void {
  }

  async onLoadMore(): Promise<void> {
    console.log('Load more');
    await this.courseService.getCoursesPage(this.numberOfCoursesOnPage.toString(), '5');
    console.log(this.numberOfCoursesOnPage.toString());
    this.updateCoursesList.emit();
  }
}
