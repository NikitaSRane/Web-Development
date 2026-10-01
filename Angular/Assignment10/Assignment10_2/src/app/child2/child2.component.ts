import { Component } from '@angular/core';
import { StringService } from '../string.service';
@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css',
  providers: [StringService]
})
export class Child2Component {

  public name: string = "Marvellous Infosystems";
  public len : number =0;
  constructor(obj :StringService)
  {
    this.len=obj.CountCapital(this.name);
  }

}
