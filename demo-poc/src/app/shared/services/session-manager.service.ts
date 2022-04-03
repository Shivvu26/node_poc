import { Inject, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { HttpWrapperService, IHttpRequestOptions } from "../../shared/services/http.wrapper.service";
import { LocalStorageService } from './localstorage.service';
import { NavigationServiceService } from './navigation-service.service';

@Injectable()

export class SessionManagerService {
  public permissionList = [];
  private _subscriptions = new Subscription();

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
    private route: ActivatedRoute,
    private navigationHelper: NavigationServiceService,
    private _httpWrapper: HttpWrapperService,
  ) {
  }
  public authTokenName = 'app_token';

  public getSessionModel(): any {
    const sessionModel = this.localStorageService.get("Token");
    if (sessionModel == null) {
      this.navigationHelper.navigateToRoute("/auth/login");
      return null;
    }
    return sessionModel;
  }
  redirectToLoginAndSavePreviousUrl(): any {
    this.localStorageService.set("previousUrl", window.location.href);
    return this.redirectToLogin();
  }

  public redirectToLogin(): any {
    const sessionModel = this.localStorageService.get("Token");
    if (sessionModel == null) {
      this.navigationHelper.navigateToRoute("/login");
      return null;
    }
    return sessionModel;
  }


  public getRole(): any {
    const identity = this.getSessionModel();
    if (identity != null) { return identity.roleId; }
    return null;
  }

  public getRoleAlias(): any {
    const identity = this.getSessionModel();
    if (identity != null) { return identity.roleAlias; }
    return null;
  }

  public getOrganizationName(): any {
    const identity = this.getSessionModel();
    if (identity != null) { return identity.organizationName; }
    return null;
  }

  public getOrganizationId(): any {
    const identity = this.getSessionModel();
    if (identity != null) { return identity.organizationId; }
    return null;
  }


  IsAuthenticated(): boolean {
    return this.localStorageService.get("Token") != null;
  }

  isSuperAdminUser(): boolean {
    if (this.IsAuthenticated()) {
      const identity = this.getSessionModel();
      if (
        identity &&
        (identity.roleAlias === 'SystemSuperAdministrator')
      ) {
        return true;
      }
    }
    return false;
  }

  hasRole(roleId: number): boolean {
    return roleId == this.getRole();
  }

  hasPermissions(featureIds: number[]): boolean {
    let prmsn = false;
    const permissions = this.localStorageService.get("permission");
    if (permissions == null || permissions.collections == null) {
      return false;
    }
    permissions.collections.forEach(element => {
      if (featureIds.indexOf(element.featureId) > -1) {
        prmsn = true;
      }
    });
    return prmsn;
  }

  logout() {
    if (this.IsAuthenticated()) {
      const sub = this.logoutRequest().subscribe(data => {
        this.localStorageService.customClear();


        this.navigationHelper.navigateToRoute('/login');
      });
      this._subscriptions.add(sub);
    }
  }

  onlyUILogout() {
    this.localStorageService.customClear();
    this.navigationHelper.navigateToRoute('/login');
  }

  logoutFromUI() {
    if (this.IsAuthenticated()) {

      this.localStorageService.customClear();

      this.navigationHelper.navigateToRoute('/login');

    }
  }

  private logoutRequest(): Observable<any> {
    let url = "/auth/Login/logout";
    let options: IHttpRequestOptions = { url: url };
    options.disableNotification = true;

    return this._httpWrapper.post(options);
  };

  public redirectToNotFound(): any {
    this.navigationHelper.navigateToRoute("/pagenotfound");
    return null;
  }

  ngOnDestroy() {
    this._subscriptions.unsubscribe();
  }
}
