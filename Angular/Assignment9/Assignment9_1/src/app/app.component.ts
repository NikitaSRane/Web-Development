import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyrevPipe } from './myrev.pipe';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MyrevPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignment9_1';
  public Name : string ="Marvellous";
}
