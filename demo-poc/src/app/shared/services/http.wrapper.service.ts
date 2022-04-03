import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Inject, Injectable, isDevMode } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';
import {LocalStorageService} from './localstorage.service';
import { NotifyFlashMessageService } from './notify-flash-message.service';
declare var require: any;

export interface IHttpRequestOptions {
  url: string;
  headers?: HttpHeaders;
  body?: any;
  disableNotification?: boolean;
  withCredentials?: boolean;
  responseType?: any;
  reportProgress?: boolean;
  observe?: any;
  params?: HttpParams;
  

}

@Injectable({
  providedIn: 'root'
})
export class HttpWrapperService {
  constructor(
    private _http: HttpClient,
    private _router: Router,
    private _localStorageService: LocalStorageService,
    private _alertService: NotifyFlashMessageService,
  ) {
  /*  this.logger.log('HTTP Wrapper Service');
    this.logger.log(environment);*/

    if (isDevMode()) {
      this.apiEndpoint = environment.URL;
    } else {
      this.apiEndpoint = environment.URL;
    }

    HttpWrapperService.httpWrapperRef = this;
  }
  public static httpWrapperRef: any;

  tmpOrgName = '';
  tmpOrgAlias = '';
  tmpOrgLogoUrl = '';
  tmpOrgLogoHeight = '';

  apiEndpoint: string;

  // todo: This is duplicate of callback on logout in header.component. Need to change
  private handleLogout() {
    this._localStorageService.customClear();
    this._router.navigate(['/login']);
  }

  private handleErrorResponse(err: HttpErrorResponse): any {
    //// console.log(err);
    let message = 'Some error occurred';
    this._alertService.error(err.statusText);

    if (err && err.status === 401 && err.error && err.error.message && err.error.message.message) {
      this.handleLogout();
      return;
    }
    else if (err && err.status === 401) {
      message = 'Your session has expired, please login again.';
      this.handleLogout();
      return;
    }
    else if (err && err.error.message && err.error.message.message && typeof err.error.message.message === 'string') {
      message = err.error.message.message;
    } else if (err && err.error && err.error.message && typeof err.error.message === 'string') {
      message = err.error.message;
    }
    else if (err && err.message) {
      message = 'Some error occurred';
 }// err.message;

    // if (err && err.error && err.error.modelValidation && err.error.modelValidation.isValid == false) {
    //  if (err.error.modelValidation.errors && err.error.modelValidation.errors.length > 0) {
    //    var errs = err.error.modelValidation.errors;
    //    var msg = '';
    //    for (var i = 0; i < errs.length; i++) {
    //      msg = errs[i].error + '<br>';
    //    }
    //  }
    //  message = msg;
    // } else
    //  if (err && err.error && err.error.message) {
    //    message = err.error.message.message;
    //  } else
    //    if (err && err.message && typeof err.message === 'string') {
    //      message = err.message;
    //    }

    if (err && (err.status == 404)) {
      message = 'No record found';
    }
    // this needs to be thrown in order to obtain the error in the fail callback of observable in the controller
    if (err && (err.status == 502 || err.status == 503 || err.status == 504)) {
      message = 'Service unavailable, Please try after some time or contact system administrator';
    }

   /* this._alertService.error(message);*/
    throw err;
  }

  private extractData(res: any, disableNotification?: boolean) {
    if (!res) return null;
    let msg = res.message || 'success';

   /* if (!disableNotification) {
      if (res.message != null) {
        this._alertService.success(res.message.message);
        // if (res.message.messagetype==1)
        //  this._alertService.success(res.message.message);
        // else if (res.message.messagetype == 2)
        //  this._alertService.warning(res.message.message);
        // else if (res.message.messagetype == 3)
        //  this._alertService.danger(res.message.message);
      }
    }*/
    return (res.data != null) ? res.data : res;
  }


  get(options: IHttpRequestOptions): Observable<any> {
    const that = this;
    // options.withCredentials = true;
    return this._http.get(this.apiEndpoint + options.url, options)
      .map((result) => {
        return that.extractData(result, options.disableNotification);
      })
      .catch((err) => {
        return that.handleErrorResponse(err);
      });
  }

  post(options: IHttpRequestOptions): Observable<any> {
    const that = this;
    // options.withCredentials = true;
    return this._http.post(this.apiEndpoint + options.url, options.body, options)
      .map((result) => that.extractData(result, options.disableNotification))
      .catch((err) => that.handleErrorResponse(err));
  }

  put(options: IHttpRequestOptions): Observable<any> {
    const that = this;
    return this._http.put(this.apiEndpoint + options.url, options.body, options)
      .map((result) => that.extractData(result, options.disableNotification))
      .catch((err) => that.handleErrorResponse(err));
  }

  delete(options: IHttpRequestOptions): Observable<any> {
    const that = this;
    return this._http.delete(this.apiEndpoint + options.url, options)
      .map((result) => that.extractData(result, options.disableNotification))
      .catch((err) => that.handleErrorResponse(err));
  }

 }
