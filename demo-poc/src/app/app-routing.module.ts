import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProfileComponent} from './components/profile/profile.component';



const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  }, {
    path: 'dashboard',
    component: DashboardComponent
  }, {
    path: 'profile',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
