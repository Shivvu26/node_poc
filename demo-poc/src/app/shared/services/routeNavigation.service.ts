import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SessionManagerService } from './session-manager.service';

@Injectable()

export class RouteNavigationService {
  constructor(private _sesssionManagerService: SessionManagerService, private _router: Router) {

  }

  navigateAsPerPermission() {
    if (this._sesssionManagerService.hasPermissions([28]))
      this._router.navigate(['/dashboard/organization']);
    else if (this._sesssionManagerService.hasPermissions([1]))
      this._router.navigate(['/participant/list']);
    else if (this._sesssionManagerService.hasPermissions([2]))
      this._router.navigate(['/questionnaire']);
    else if (this._sesssionManagerService.hasPermissions([3]))
      this._router.navigate(['/organization']);
    else if (this._sesssionManagerService.hasPermissions([4]))
      this._router.navigate(['/user']);
    else if (this._sesssionManagerService.hasPermissions([7]))
      this._router.navigate(['/dashboard/resources']);
    else if (this._sesssionManagerService.hasPermissions([8]))
      this._router.navigate(['/dashboard/help']);
    else if (this._sesssionManagerService.hasPermissions([9]))
      this._router.navigate(['/dashboard/aboutus']);
  }
}
