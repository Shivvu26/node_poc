import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpWrapperService, IHttpRequestOptions } from '../../shared/services/http.wrapper.service';
import { createPassword, LoginModel, RegisterModel } from '../models/login.model';



// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private previousUrl: string;
  registrationEditModelCache: any = null;
  loginPageFirstTime: boolean = false;

  // tslint:disable-next-line:variable-name
  constructor(private _httpWrapper: HttpWrapperService,
              private router: Router) {

  }

  login(loginModel: LoginModel): Observable<any> {


        let url = "/auth/login";
    let options: IHttpRequestOptions = {
      url: url, body: loginModel
    };

    // options.headers = new HttpHeaders({ "client-type": "web" });
    options.disableNotification = true;

    return this._httpWrapper.post(options)
  };

  getDetails(token: string): Observable<any> {

    const data = {
      token: token
    };
    let url = "/user/user/details";
    let options: IHttpRequestOptions = {
      url: url, body: data
    };

    // options.headers = new HttpHeaders({ "client-type": "web" });
    options.disableNotification = true;

    return this._httpWrapper.post(options)
  };


  geUsertDetails(Id: number): Observable<any> {

    const data = {
      id: Id
    };
    let url = "/user/user/data";
    let options: IHttpRequestOptions = {
      url: url, body: data
    };

    // options.headers = new HttpHeaders({ "client-type": "web" });
    options.disableNotification = true;

    return this._httpWrapper.post(options)
  };

  sendOtp(email: string,userId:number,name:string): Observable<any> {

    const data = {
      username: email,
      userId: userId,
      name : name
    };
    let url = "/user/user/send/otp";
    let options: IHttpRequestOptions = {
      url: url, body: data
    };

    // options.headers = new HttpHeaders({ "client-type": "web" });
    options.disableNotification = true;

    return this._httpWrapper.post(options)
  };

  registerUser(registerModel: RegisterModel): Observable<any> {


    let url = "/user/save/user";
    let options: IHttpRequestOptions = {
      url: url, body: registerModel
    };

    // options.headers = new HttpHeaders({ "client-type": "web" });
    options.disableNotification = true;

    return this._httpWrapper.post(options);
  };

  isEmailExists(email : string): Observable<any> {


    let url = `/user/email/exist/${email}`;
    let options: IHttpRequestOptions = {
      url: url, 
    };

    // options.headers = new HttpHeaders({ "client-type": "web" });
    options.disableNotification = true;

    return this._httpWrapper.post(options);
  };

  otpValidate(otpvalidate: any): Observable<any> {
    const otpValidatedata = {
      userId: 0,
      otp: '0000',
    }
    let url = "/user/otp/validate";
    let options: IHttpRequestOptions = {
      url: url, body: otpvalidate
    };

    // options.headers = new HttpHeaders({ "client-type": "web" });
    options.disableNotification = true;

    return this._httpWrapper.post(options);
  };
  createPassword(craetePassword: createPassword): Observable<any> {


    let url = "/user/create/password";
    let options: IHttpRequestOptions = {
      url: url, body: craetePassword
    };

    // options.headers = new HttpHeaders({ "client-type": "web" });
    options.disableNotification = true;

    return this._httpWrapper.post(options);
  };
  
  logout(): Observable<any> {
    let url = "/auth/Login/logout";
    let options: IHttpRequestOptions = { url: url };
    options.disableNotification = true;

    return this._httpWrapper.post(options);
  };
  getAllRolePermission() {
    let url = `/users/user/permission`;
    let options: IHttpRequestOptions = { url: url };
    options.disableNotification = true;
    return this._httpWrapper.get(options);
  }

}
