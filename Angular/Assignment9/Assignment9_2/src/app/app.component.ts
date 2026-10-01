import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyaddPipe } from './myadd.pipe';
import { MymultPipe } from './mymult.pipe';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MyaddPipe,MymultPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignment9_2';
  
}
