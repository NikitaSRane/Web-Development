import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myrev',
  standalone: true
})
export class MyrevPipe implements PipeTransform {

  transform(value: string): string {
    var temp : string;
    var start :number= 0;
    var end : number =value.length-1;
    var arr : string[]=new Array(value.length);
    
    while(start < end)
    {
      temp=value[start];
      arr[start]=value[end];
      arr[end]=temp;
  
      start++;
      end--;
    }

    var Str :string="";
    for(var iCnt=0; iCnt <=arr.length;iCnt++)
    {
      if(arr[iCnt]==undefined)
      {
        break;
      }
      Str=Str+arr[iCnt];
    }
    return Str;
  }
    
  
}
