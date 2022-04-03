import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {countries} from '../../shared/countryList/country-data-store';
import { LocalStorageService } from '../../shared/services/localstorage.service';
import { NotifyFlashMessageService } from '../../shared/services/notify-flash-message.service';
import { RegisterModel } from '../models/login.model';
import { AuthService} from '../service/auth.service';

@Component({
  selector: 'app-landing-user',
  templateUrl: './landing-user.component.html',
  styleUrls: ['./landing-user.component.scss']
})
export class LandingUserComponent implements OnInit {
  registerModel: RegisterModel = {
    id:0,
    name: '',
    email: '',
    phoneNo: null,
    companyName: '',
    countryName: '',
    agreement: false,
    password:'',
  };
  userId: number;

  public countries: any = countries;

  constructor(private authService: AuthService, private _localStorageService: LocalStorageService, private _router: Router, private _alertService: NotifyFlashMessageService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.authService.isEmailExists(this.registerModel.email).subscribe(res => {
      if (!res) {
        this.authService.registerUser(this.registerModel).subscribe(data => {
          this.userId = data;
          this._router.navigate([`otpConfirm/${this.userId}`]);
          this._alertService.success("User Created Successfully");


        });
      }
      else {
        this._alertService.error("Email already registered");
      }
    });
   
  }

}
