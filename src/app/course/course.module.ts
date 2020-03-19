import { NgModule } from '@angular/core';
import { SectionComponent } from './components/section/section.component';
import { CourseListComponent } from './components/section/course-list/course-list.component';
import { CourseComponent } from './components/section/course-list/course/course.component';
import { ToolbarComponent } from './components/section/toolbar/toolbar.component';
import { SharedModule } from '../shared/shared.module';
import { MoreComponent } from './components/section/course-list/more/more.component';
import { SearchComponent } from './components/section/toolbar/search/search.component';



@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    SectionComponent,
    CourseListComponent,
    CourseComponent,
    ToolbarComponent,
    MoreComponent,
    SearchComponent,
  ],
  exports: [
    SectionComponent,
    CourseListComponent,
    CourseComponent,
    ToolbarComponent,
    MoreComponent,
  ]
})
export class CourseModule { }
