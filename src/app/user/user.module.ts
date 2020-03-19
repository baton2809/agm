import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  imports: [SharedModule],
  declarations: [
    LoginComponent
  ],
  exports: [
    LoginComponent
  ]
})
export class UserModule { }
