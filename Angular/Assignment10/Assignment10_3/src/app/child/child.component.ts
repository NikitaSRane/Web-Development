import { Component } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  public No : number =21;
  public name : string ="Marvellous Infosystems";
  public len : number =0;
  public value : string= "";
  constructor(nobj : NumberService , sobj :StringService )
  {
    this.value=nobj.ChkPrime(this.No);
    this.len=sobj.CountCapital(this.name);
  }
}
