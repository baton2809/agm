import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddCourseComponent } from './course/components/section/add-course/add-course.component';
import { SectionComponent } from './course/components/section/section.component';


const routes: Routes = [
  { path: '', component: SectionComponent },
  { path: 'add', component: AddCourseComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule { }
