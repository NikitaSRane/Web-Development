import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewcompComponent } from './newcomp/newcomp.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NewcompComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignment6_4';
}
