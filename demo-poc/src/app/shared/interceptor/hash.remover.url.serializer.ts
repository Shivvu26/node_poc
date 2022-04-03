import { DefaultUrlSerializer, UrlTree } from '@angular/router';

export class HashRemoverUrlSerializer extends DefaultUrlSerializer {
  parse(url: string): UrlTree {
    super.parse(url.replace('/%23/', '/#/'));
    return super.parse(url.replace('#/', ''));
    //return super.parse(url.replace('#/','').toLowerCase());
  }
}
