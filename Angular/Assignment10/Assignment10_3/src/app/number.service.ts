
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }

  public ChkPrime(value : number) : string
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
      return " is prime";
    }
    else
    {
      return " is not prime";
    }
  }

}

