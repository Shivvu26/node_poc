import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MustMatchDirective} from './helpers/must-match.directive';
import {LocalStorageService} from './services/localstorage.service';
import {NotifyFlashMessageService} from './services/notify-flash-message.service';
import {CookieService} from 'ngx-cookie-service';
import {OnlynumberDirective} from './helpers/isNumber/onlynumber.directive';
import { LogoComponent } from './component/logo/logo.component';

@NgModule({
  declarations: [MustMatchDirective, OnlynumberDirective, LogoComponent],
  exports: [
    MustMatchDirective,
    OnlynumberDirective,
    LogoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    LocalStorageService,
    NotifyFlashMessageService,
    CookieService
  ]
})
export class SharedModule { }
