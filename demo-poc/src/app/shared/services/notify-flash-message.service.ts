"use strict";

import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Injectable()
// @ts-ignore
export class NotifyFlashMessageService {

  constructor(private toastr: ToastrService) { }

  appendCustomOptions(appendTo: any, appendFrom: any) {
    if (appendFrom)
      Object.assign(appendTo, appendFrom);
  }

  success(msg: string) {

    this.toastr.success(msg);
  }

  error(msg: string) {
    this.toastr.error(msg);
  }

  warning(msg: string, customOptions?: any) {
    this.toastr.warning(msg);
  }
}
