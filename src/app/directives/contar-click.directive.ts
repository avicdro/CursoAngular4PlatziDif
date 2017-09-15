import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[mvatContarClick]'
})
export class ContarClickDirective {
contar = 0;
@HostListener('click', ['$event.target'])
  click(btn) {
    return console.log('button', btn, 'number of clicks:', this.contar++);
  }

  constructor() { }

}
