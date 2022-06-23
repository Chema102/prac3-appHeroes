import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Pipe({
  name: 'seguro'
})
export class SeguroPipe implements PipeTransform {
  constructor (private domSanitaiser:DomSanitizer){

  }

  transform(value: string, ...args: unknown[]): SafeResourceUrl {
    return this.domSanitaiser.bypassSecurityTrustResourceUrl(value);
  }

}
