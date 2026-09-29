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
  title = 'Assignment7_3';

  Str : string = "Marvellous Infosystems";

  public fun() : string
  {
    this.Str="Educating for better tommorrow.";
    return this.Str;
  }
}
