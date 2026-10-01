import { Directive } from '@angular/core';
import { HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCompSuccess]'
})
export class CompSuccessDirective {

  constructor(private obj :ElementRef) { }

  @HostListener('mouseenter') onmouseenter()
  {
    this.obj.nativeElement.style.color = 'green';
  }
  @HostListener('mouseleave') onmouseleave()
  {
    this.obj.nativeElement.style.color = 'black';
  }
}
