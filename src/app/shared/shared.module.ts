import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent } from './components/popup/popup.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { FakeLogoComponent } from './components/header/fake-logo/fake-logo.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BreadcrumbsComponent,
    FooterComponent,
    HeaderComponent,
    FakeLogoComponent,
    PopupComponent,
  ],
  exports: [
    CommonModule,
    BreadcrumbsComponent,
    FooterComponent,
    HeaderComponent,
    FakeLogoComponent,
    PopupComponent
  ]
})
export class SharedModule { }
