import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'celcius',
})
export class CelciusPipe implements PipeTransform {
  transform(value: number) {
    return value-273.15;
  }
}
