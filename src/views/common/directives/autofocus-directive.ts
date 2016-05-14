import { Directive, ElementRef } from '@angular/core';


@Directive({
  selector: '[autofocus]'
})

export class AutofocusDirective {
  constructor(element: ElementRef) {
    element.nativeElement.focus();
  }
}
