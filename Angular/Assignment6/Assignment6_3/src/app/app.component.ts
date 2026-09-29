import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1>This is {{title}}</h1>
    <h1 [class]="'Modify'">Marvellous Infosystems</h1>
    <input type=text>
    <router-outlet></router-outlet>
  `,
  styles:`.Modify
{
    color:blue;
}`
})
export class AppComponent {
  title = 'Assignment6_3';
}
