import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePassed'
})
export class TimePassedPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let today:Date = new Date();
    let dateOnly:any = new Date(today.getFullYear(),today.getMonth(),today.getDate())
    var difference = Math.abs(dateOnly-value)
    const seconds = 86400;
    var dateDifference = difference *0.001;
    var dateCounter = dateDifference/seconds;

    if(dateCounter>=1&& value<dateOnly){
      return dateCounter + 'days ago';
    }else{
      return 'today';
    }
  }
}
