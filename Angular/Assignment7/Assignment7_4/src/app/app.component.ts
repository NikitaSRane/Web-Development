import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignment7_4';

  public Str : string = "Marvellous Infosystems";

  public Upper() : string
  {
    this.Str=this.Str.toUpperCase();
    return this.Str;
  }

  public Lower() : string
  {
    this.Str=this.Str.toLowerCase();
    return this.Str;

  }
}
