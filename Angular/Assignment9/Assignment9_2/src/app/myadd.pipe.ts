import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myadd',
  standalone: true
})
export class MyaddPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
    var temp : number =0;
    temp = value + args[0];
    return temp;
  }

}
