import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellouschk',
  standalone: true
})
export class MarvellouschkPipe implements PipeTransform {

  transform(value: number, Param: string): string {
    var Str : string = "";
    if(Param =="Even")
    {
      if(value % 2 == 0)
      {
        Str="It is even.";
      }
      else
      {
        Str="It is not even";
      }
    }
    if(Param == "Odd")
    {
      if(value % 2 != 0)
        {
          Str="It is odd.";
        }
        else
        {
          Str="It is not odd";
        }
    }
    if(Param == "Prime")
    {

      var iCnt : number=0;
      var iCount : number=0;
  
      if(value<0) 
      {
          value=-value;
      }
      for(iCnt=2;iCnt<=(value/2);iCnt++)
      {
          if((value % iCnt) == 0)
          {
              iCount++;
              break;
          }
      }
      if(iCount == 0)
      {
          Str="It is prime";
      }
      else
      {
        Str="It is not prime";
      }
    }
    if(Param == "Perfect")
    {
      var iCnt : number=0;
      var iSum : number=0;

      if(value<0) 
      {
          value=-value;
      }

      for(iCnt=1;iCnt<=(value/2);iCnt++)
      {
          if((value % iCnt) == 0)
          {
              iSum=iSum+iCnt;
          }
      }

      if(iSum == value)
      {
          Str="It is perfect";
      }
      else
      {
          Str="It is not perfect";
      }


    }
    return Str;
  }

}
