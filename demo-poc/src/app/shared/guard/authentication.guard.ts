import { Inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot } from "@angular/router";
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/localstorage.service';
import { SessionManagerService } from '../services/session-manager.service';

@Injectable({ providedIn: "root" })

export class AuthenticationGuard implements CanActivate, CanActivateChild {
  roleId: number = 0;
  constructor(
    private _localstorageService: LocalStorageService,
    private _sessionManagerService: SessionManagerService,
    ) {

    this.roleId = 1;
  }

  // this Method is used to check the Permission to the different Modules.
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    ////this._sessionManagerService.getSessionModel();
    if (this._localstorageService.getUnparsed("Token") == null) {
      this._sessionManagerService.redirectToLoginAndSavePreviousUrl();
      return false;
    }

    if (route.data.FeatureId === undefined || route.data.FeatureId.length == 0) {
      this._sessionManagerService.redirectToLogin();
      return false;
    }

    var hasPerm = this._sessionManagerService.hasPermissions(route.data.FeatureId);
    if (!hasPerm) {
      this._sessionManagerService.redirectToNotFound();
    }
    return hasPerm;//
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    var hasPerm = this._sessionManagerService.hasPermissions(route.data.FeatureId);
    if (!hasPerm) {
      this._sessionManagerService.redirectToLogin();
    }
    return hasPerm;
  }

  // IN case permission is based on url this method can be used
  //private hasPermissions(url: string) {
  //  if (this.roleId == this._config.roleType.systemSuperAdministrator) {
  //    return true;
  //  }
  //  else {
  //   let routes = this._localstorageService.get(this._config.routes);
  //      routes = routes.map(function (value) {
  //      return value.toLowerCase();
  //    });
  //    let lastofIndex = url.lastIndexOf('/');
  //    let newUrl = "";
  //    if (lastofIndex != 0) {
  //      newUrl = url.slice(0, lastofIndex);
  //    }
  //    else {
  //      newUrl = url;
  //    }

  //    if (routes.indexOf(newUrl) > -1) {
  //      return true;
  //    }
  //    else {
  //      return false;
  //    }
  //  }
  //}


}
