import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'formatTime',
})
export class FormatTimePipe implements PipeTransform {
  transform(value: string) {
    
    let currentdate = new Date(value);
    let hs:any = currentdate.getHours();
    let mt:any = currentdate.getMinutes();
    hs = (hs >=12)? hs-12: hs;
    hs = (hs > 9)? hs: '0'+hs;
    mt = (mt > 9)? mt: '0'+mt ;
    mt = (hs >= 12)? mt + ' P.M': mt + ' A.M'

    return hs + ':' + mt;
    
  }
}
