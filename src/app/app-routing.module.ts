import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddCourseComponent } from './course/components/section/add-course/add-course.component';
import { SectionComponent } from './course/components/section/section.component';
import { LoginComponent } from './user/components/login/login.component';
import { AuthGuard } from './auth-guard.guard';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { UpdateCourseComponent } from './course/components/section/update-course/update-course.component';


const routes: Routes = [
  { path: '', redirectTo: 'courses', pathMatch: 'full'},
  { path: 'courses', component: SectionComponent, canActivate: [AuthGuard], data: { breadcrumb: 'Courses' }},
  { path: 'new', component: AddCourseComponent, canActivate: [AuthGuard], data: { breadcrumb: 'Courses/new' } },
  { path: 'courses/:id', component: UpdateCourseComponent, canActivate: [AuthGuard], data: { breadcrumb: 'Courses', paramName: 'id' }},
  { path: 'login', component: LoginComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule { }
