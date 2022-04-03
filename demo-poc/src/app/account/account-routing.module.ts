import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {EmailConfirmSuccessComponent} from './email-confirm-success/email-confirm-success.component';
import {LandingUserComponent} from './landing-user/landing-user.component';
import {LoginComponent} from './login/login.component';
import {CreatePasswordComponent} from './create-password/create-password.component';
import {OtpConfirmComponent} from './otp-confirm/otp-confirm.component';


const routes: Routes = [
  {
    path: 'email-success',
    component: EmailConfirmSuccessComponent
  },
  {
    path: 'register',
    component: LandingUserComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'createPassword/:id',
    component: CreatePasswordComponent
  }
  ,
  {
    path: 'otpConfirm/:id',
    component: OtpConfirmComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
