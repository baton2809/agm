import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SectionComponent } from './section/section.component';
import { CourseListComponent } from './section/course-list/course-list.component';
import { CourseComponent } from './section/course-list/course/course.component';
import { ToolbarComponent } from './section/toolbar/toolbar.component';
import { FakeLogoComponent } from './header/fake-logo/fake-logo.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    SectionComponent,
    CourseListComponent,
    CourseComponent,
    ToolbarComponent,
    FakeLogoComponent
  ],
  imports: [
    BrowserModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
