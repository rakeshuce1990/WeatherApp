import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundOff',
})
export class RoundOffPipe implements PipeTransform {
  
  transform(value: number) {
    return value.toFixed(2);
  }
}
