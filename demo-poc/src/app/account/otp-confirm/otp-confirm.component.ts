import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifyFlashMessageService } from '../../shared/services/notify-flash-message.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-otp-confirm',
  templateUrl: './otp-confirm.component.html',
  styleUrls: ['./otp-confirm.component.scss']
})
export class OtpConfirmComponent implements OnInit {
  emailOtp: string;
  userId: string;
  otpInvalidError: boolean = false;
  constructor(private authService: AuthService, private _activeRoute: ActivatedRoute, private _alertService: NotifyFlashMessageService, private _router: Router) { }

  ngOnInit(): void {
    this.userId = this._activeRoute.snapshot.paramMap.get("id");

  }

  // tslint:disable-next-line:typedef
  confirmOtp() {
    const otpvalidate = {
      userId: this.userId,
      otp: this.emailOtp
    }
    this.authService.otpValidate(otpvalidate).subscribe(data => {
      if (data.isValid) {
        this._router.navigate([`createPassword/${this.userId}`]);

      }
      else {
        this._alertService.error("Invalid OTP");
        this.otpInvalidError = true;
      }
    })
  }

  resetOtpValidation() {
    this.otpInvalidError = false;
  }
}
