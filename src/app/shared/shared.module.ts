import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PopupComponent } from './components/popup/popup.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { FakeLogoComponent } from './components/header/fake-logo/fake-logo.component';
import { CoursePlateBorderDirective } from './directives/course-plate-border.directive';
import { TimePrettyPipe } from './pipes/time-pretty.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { NotFoundComponent } from './components/not-found/not-found.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    BreadcrumbsComponent,
    FooterComponent,
    HeaderComponent,
    FakeLogoComponent,
    PopupComponent,
    CoursePlateBorderDirective,
    TimePrettyPipe,
    OrderByPipe,
    SearchPipe,
    NotFoundComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    BreadcrumbsComponent,
    FooterComponent,
    HeaderComponent,
    FakeLogoComponent,
    PopupComponent,
    CoursePlateBorderDirective,
    TimePrettyPipe,
    OrderByPipe,
    SearchPipe,
  ]
})
export class SharedModule { }
