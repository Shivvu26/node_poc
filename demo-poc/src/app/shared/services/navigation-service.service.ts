import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationServiceService {

  constructor(private _router: Router) { }

  navigateToRoute(route: string) {
    if (route == "/auth/login")
      route = "/signin"
    this._router.navigate([route]);
  }
}
