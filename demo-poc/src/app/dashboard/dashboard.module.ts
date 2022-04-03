import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomainDataViewComponent } from './domain-data-view/domain-data-view.component';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {AccountRoutingModule} from '../account/account-routing.module';
/*
import { AddDomainComponent } from './components/add-domain/add-domain.component';
*/



@NgModule({
  declarations: [ DomainDataViewComponent],
  exports: [
    DomainDataViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AccountRoutingModule
  ]
})
export class DashboardModule { }
