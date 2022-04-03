import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifyFlashMessageService } from '../../shared/services/notify-flash-message.service';
import { createPassword } from '../models/login.model';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-create-password',
  templateUrl: './create-password.component.html',
  styleUrls: ['./create-password.component.scss']
})
export class CreatePasswordComponent implements OnInit {
  model: createPassword = {
    userId: '',
    password: '',
  };
  passNumberValidation: boolean = false;
  passUpperCaseValidation: boolean = false;
  passSpecialCharValidation: boolean = false;
  passLengthValidation: boolean = false;
  passwordMatch: string;
  constructor(private authService: AuthService, private _router: Router, private _activeRoute: ActivatedRoute, private _alertService: NotifyFlashMessageService) { }

  ngOnInit(): void {
    this.model.userId = this._activeRoute.snapshot.paramMap.get("id");

  }

  // tslint:disable-next-line:typedef
  createAccount() {
    if (this.passwordMatch != this.model.password) {
     // this._alertService.success("password do not match");
      this._alertService.error("password do not match");

      return;
    }
    this.authService.createPassword(this.model).subscribe(data => {
      this._alertService.success("password created successfully");

      this._router.navigate([`login`]);

    })

  }
  onInputChange(password: string) {

    if (password.match(/[A-Z]/)) {
      this.passUpperCaseValidation = true;
    }
    else {
      this.passUpperCaseValidation = false;
    }
    if (password.match(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/)) {
      this.passSpecialCharValidation = true;
    }
    else {
      this.passSpecialCharValidation = false;
    }
    if (password.match(/[0-9]/g)) {
      this.passNumberValidation = true;
    }
    else {
      this.passNumberValidation = false;
    }
    if (password.length > 5) {
      this.passLengthValidation = true;
    }
    else {
      this.passLengthValidation = false;
    }
  }

}
