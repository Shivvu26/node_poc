import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {SharedModule} from './shared/shared.module';
import {AccountModule} from './account/account.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './shared/interceptor/auth.token.interceptor';
import { UrlSerializer } from '@angular/router';
import { HashRemoverUrlSerializer } from './shared/interceptor/hash.remover.url.serializer';
import { ToastrModule } from 'ngx-toastr';
import {SideBarModule} from './side-bar/side-bar.module';
import {DashboardModule} from './dashboard/dashboard.module';
import { ProfileComponent } from './components/profile/profile.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    SharedModule,
    AccountModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
      closeButton: true,
      progressBar: true,
      enableHtml: true
    }),
    SideBarModule,
    DashboardModule,
    NgbModule
  ],
  providers: [
    Title,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }

    //to be enabled when want to remove the URL from #
    , {
      provide: UrlSerializer,
      useClass: HashRemoverUrlSerializer,
    }
  ],  bootstrap: [AppComponent]
})
export class AppModule { }
