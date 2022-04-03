import {Component, OnInit} from '@angular/core';
import { RegisterModel } from '../../account/models/login.model';
import {AuthService} from '../../account/service/auth.service';
import { NotifyFlashMessageService } from '../../shared/services/notify-flash-message.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
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
  oldUserEmail: string = '';
  oldUserPhone: number = null;
  oldUserPassword: string = '';
  userId: number = 0;
  userPassword: string = '';
  userPhone: number = null;
  userEmail: string = '';
  username: string = '';
  emptyValue: boolean = false;
  name: string = null;
  countryName: string = null;

  editEmail: boolean = false;
  editPhone: boolean = false;
  editPassword: boolean = false;
  otpInvalidError: boolean = false;
  profileOtp: boolean;
  otpSent: boolean = false;
  disableEdit: boolean = false;
  userDetails : {};

  constructor(private authService: AuthService, private _alertService: NotifyFlashMessageService) {
  }

  ngOnInit(): void {
    this.userId = Number(localStorage.getItem('userDetails'));
    this.getUserDetails();
  }

  getUserDetails() {
    this.authService.geUsertDetails(this.userId).subscribe(data => {
      this.name = data.Name;
      this.countryName = data.CountryName;
      this.userEmail = data.Email;
      this.userPhone = data.PhoneNo;
      this.userPassword = data.Password;
      this.oldUserEmail = data.Email;
      this.oldUserPhone = data.PhoneNo;
      this.oldUserPassword = data.Password;


    });
  }
  validateOtp() {
    const otpvalidate = {
      userId: this.userId,
      otp: this.profileOtp
    }
    this.authService.otpValidate(otpvalidate).subscribe(data => {
      if (data.isValid) {
        this.onSubmit();
        this.getUserDetails();
        this.otpSent = false;
        if(this.editEmail) {
          this.userEmail = this.userEmail;
          this.editEmail = false;
        } else if(this.editPhone) {
          this.userPhone = this.userPhone;
          this.editPhone = false;
        } else if(this.editPassword) {
          this.userPassword = this.userPassword;
          this.editPassword = false;
        }
      }
      else {
        this._alertService.error("Invalid OTP");
        this.otpInvalidError = true;
        this.otpSent = true;
      }
    })
  }
  sendOtp() {
    this.authService.sendOtp(this.userEmail, this.userId, this.name).subscribe(data => {
      if (data) {

this.userDetails = data;
      }
    });
  }

  onSubmit() {
    this.registerModel.email = this.userEmail;
    this.registerModel.phoneNo = Number(this.userPhone);
    this.registerModel.password = this.userPassword;
    this.registerModel.agreement = true;
    this.registerModel.countryName = this.countryName;
    this.registerModel.name = this.name;
    this.registerModel.id = this.userId;

    this.authService.registerUser(this.registerModel).subscribe(data => {
      this.userId = data;
      this._alertService.success("User details updated Successfully");
    });
  }

  changeData(value) {
    if (value == 'email') {
      this.editEmail = true;
      this.editPhone = false;
      this.editPassword = false;
      this.otpSent = false;
    } else if (value == 'phone') {
      this.editEmail = false;
      this.editPhone = true;
      this.editPassword = false;
      this.otpSent = false;
    } else {
      this.editEmail = false;
      this.editPhone = false;
      this.editPassword = true;
      this.otpSent = false;
    }

  }

  saveData() {
    if (this.editEmail) {
      if (this.userEmail == '') {
        this.emptyValue = true;
      } else if (this.userEmail == this.oldUserEmail) {
        this.editEmail = false;
      } else {
        this.sendOtp();
        this.otpSent = true;
        this.disableEdit = true;
      }
    }
    if (this.editPhone) {
      if (this.userPhone == null) {
        this.emptyValue = true;
      } else if (this.userPhone == this.oldUserPhone) {
        this.editPhone = false;
      } else {
        this.sendOtp();
        this.otpSent = true;
        this.userPhone = this.userPhone;
        this.editPhone = false;
      }
    }

    if (this.editPassword) {
      if (this.userPassword == '') {
        this.emptyValue = true;
      } else if (this.userPassword == this.oldUserPassword) {
        this.editPassword = false;
      } else {
        this.sendOtp();
        this.otpSent = true;
        this.userPassword = this.userPassword;
        this.editPassword = false;
      }
    }
  }

  cancelSave() {
    if (this.editEmail) {
      if (this.userEmail == '') {
        this.emptyValue = true;
      } else {
        this.editEmail = false;
      }
    }
    if (this.editPhone) {
      if (this.userPhone == null) {
        this.emptyValue = true;
      } else {
        this.editPhone = false;
      }
    }
    if (this.editPassword) {
      if (this.userPassword == '') {
        this.emptyValue = true;
      } else {
        this.editPassword = false;
      }
    }
    this.otpSent = false;
  }

  confirmOtp() {
    this.validateOtp();
  }

  resetOtpValidation() {
    this.otpInvalidError = false;
  }

}
