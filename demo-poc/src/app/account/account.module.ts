import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LandingUserComponent} from './landing-user/landing-user.component';
import {EmailConfirmSuccessComponent} from './email-confirm-success/email-confirm-success.component';
import {LoginComponent} from './login/login.component';
import {AccountRoutingModule} from './account-routing.module';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';
import { CreatePasswordComponent } from './create-password/create-password.component';
import { OtpConfirmComponent } from './otp-confirm/otp-confirm.component';


@NgModule({
  declarations: [LandingUserComponent,
    LoginComponent,
    EmailConfirmSuccessComponent,
    CreatePasswordComponent,
    OtpConfirmComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class AccountModule { }
