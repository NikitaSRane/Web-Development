import { Component, EventEmitter } from '@angular/core';
import { Input , Output } from '@angular/core';
@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() public Message: any;
  @Output() public Myevent = new EventEmitter();

  public SendMessage()
  {
    this.Myevent.emit("Hello from Child");
  }
}
