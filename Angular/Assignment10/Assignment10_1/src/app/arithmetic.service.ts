import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService {

  constructor() { }

  public Add(iNo1 : number , iNo2 : number) : number
  {
    return iNo1+iNo2;
  }

  public Sub(iNo1 : number , iNo2 : number) : number
  {
    return iNo1-iNo2;
  }
}
