import { NgModule } from '@angular/core';
import { SectionComponent } from './components/section/section.component';
import { CourseListComponent } from './components/section/course-list/course-list.component';
import { CourseComponent } from './components/section/course-list/course/course.component';
import { ToolbarComponent } from './components/section/toolbar/toolbar.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    SectionComponent,
    CourseListComponent,
    CourseComponent,
    ToolbarComponent,
  ],
  exports: [
    SectionComponent,
    CourseListComponent,
    CourseComponent,
    ToolbarComponent,
  ]
})
export class CourseModule { }
