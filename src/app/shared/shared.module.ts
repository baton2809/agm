import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NG_VALIDATORS } from '@angular/forms';
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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptor/token.interceptor';
import { LoaderComponent } from './components/loader/loader.component';
import { LoaderInterceptor } from './interceptor/loader.interceptor';
import { LoaderService } from './services/loader.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CourseDurationInputValidatorDirective } from './directives/course-duration-input-validator.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatProgressSpinnerModule
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
    LoaderComponent,
    CourseDurationInputValidatorDirective,
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
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
    LoaderComponent
  ],
  providers: [
    {
      useClass: TokenInterceptor,
      provide: HTTP_INTERCEPTORS,
      multi: true,
    },
    LoaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: CourseDurationInputValidatorDirective,
      multi: true
    }
  ]
})
export class SharedModule { }
