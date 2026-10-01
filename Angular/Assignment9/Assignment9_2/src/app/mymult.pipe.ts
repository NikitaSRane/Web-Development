import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mymult',
  standalone: true
})
export class MymultPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
    var temp : number =0;
    temp = value * args[0];
    return temp;
  }

}
