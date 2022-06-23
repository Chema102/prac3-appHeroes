import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, bole:boolean= false): string {
    return (bole) ? '*'.repeat( value.length ) :value;
  }

}
