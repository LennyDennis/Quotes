import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePassed'
})
export class TimePassedPipe implements PipeTransform {

  transform(value: any): any {
    let today:Date = new Date();
    let dateOnly:any = new Date(today.getFullYear(),today.getMonth(),today.getDate());
    var difference = Math.abs(value - dateOnly);
    var dateDifference = difference *0.001;
    const seconds = 86400;
    var dateCounter = dateDifference/seconds;

    if(Math.floor(dateCounter)){
      return dateCounter + ' days ago';
    }else{
      return 'today';
    }
  }
}
