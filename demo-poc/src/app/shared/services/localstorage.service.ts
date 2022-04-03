import { Injectable, Inject } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';
@Injectable()
export class LocalStorageService {

  constructor(private _cookiesService: CookieService) { }

  get(key: string): any {
    let val = localStorage.getItem(key);
    if (val) {
      return JSON.parse(val);
    }
    return val;
  }
  getUnparsed(key: string): any {
    let val = localStorage.getItem(key);
    return val;
  }
  set(key: string, value: any) {
    localStorage.setItem(key, value);
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }

  private clear() {
    localStorage.clear();
  }
  customClear() {
    this._cookiesService.deleteAll();
   }
}
