import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { CookieService } from "ngx-cookie-service";
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { LocalStorageService } from '../services/localstorage.service';
import { AuthService } from '../../account/service/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private _cookieService: CookieService,
              private _locaStorageService: LocalStorageService,
              private _authService: AuthService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //let token = this._cookieService.get(this._config.tokenKeyName);
    //this was a issue when using Cookie
    //chrome was not using the cookie if `SameSite=None` and `Secure=false`

    //We have 2 solution for that
    // set cookie with  `SameSite=None` and `Secure=false` // this could be done from server side as well as client side
    // Instead of using cookie use local storage  ---- this is what we have done


    let token = this._locaStorageService.getUnparsed("Token");
    request = this.addToken(request, token);

    return next.handle(request).pipe(catchError(error => {
      if (request.url.includes("logout") || request.url.includes("signin")) {
        return throwError(error);
      }
      if (error instanceof HttpErrorResponse && (error.status === 401 || error.status === 403)) {
        this._cookieService.deleteAll();
        this._locaStorageService.customClear();
        this._authService.logout();
        return throwError(error);
      } else {
        return throwError(error);
      }
    }));
  }

  private addToken(request: HttpRequest<any>, token: string) {
    let offset = -(new Date().getTimezoneOffset());
    return request.clone({
      withCredentials: true,
      setHeaders: {
        Authorization: `Bearer ${token}`,
        OffSet: offset.toString(),
        Timezoneoffset: offset.toString(),
      }
    });
  }
}
