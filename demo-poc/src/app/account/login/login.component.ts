import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from '../../shared/services/localstorage.service';
import {AuthService} from '../service/auth.service';
import {LoginModel} from '../models/login.model';
import {NotifyFlashMessageService} from '../../shared/services/notify-flash-message.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginModel: LoginModel = {
    username: '',
    password: '',
  };

  constructor(private authService: AuthService,
              private _localStorageService: LocalStorageService,
              private _router: Router,
              private _alertService: NotifyFlashMessageService
  ) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    let that = this;
    let reject = function(err: any) {
      that._alertService.error('invalid credentials');
    };
    let resolve = function(data: any) {
      localStorage.setItem('Token', data.access_token);
      that.authService.getDetails(data.access_token).subscribe(data2 => {
        localStorage.setItem('userDetails', data2.Id);

      });
      that._alertService.success('Logged In');
      that._router.navigate([`dashboard`]);

    };

    return that.authService.login(this.loginModel).subscribe(resolve, reject).add((res) => {
      //this._alertService.error("Unauthorized User");

    });


  }
}
