import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'formatDate',
})
export class FormatDatePipe implements PipeTransform {
 
  transform(value: string) {
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
    let currentdate = new Date(value);
    let dd = currentdate.getDate();
    let mm = monthNames[currentdate.getMonth()];
    let yyyy = currentdate.getFullYear();

    return dd + ' ' + mm + ' ' + yyyy ;
    
  }
}
