import { style } from '@angular/animations';
import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';
@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(private obj: ElementRef)
   {
      this.obj.nativeElement.style.background = "yellow";
      this.obj.nativeElement.style.fontWeight ="bold";
    }

}
