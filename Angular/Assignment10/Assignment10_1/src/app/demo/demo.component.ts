import { Component } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';
@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css',
  providers:[ArithmeticService]
})
export class DemoComponent {
  public add : number =0;
  public sub : number =0;
  constructor(private obj :ArithmeticService)
  {
    this.add=this.obj.Add(11,10);
    this.sub=this.obj.Sub(11,10);
  }
}
