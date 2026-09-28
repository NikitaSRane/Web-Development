import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstcompComponent } from './firstcomp/firstcomp.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FirstcompComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignment5_3';
}
