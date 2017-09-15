import { Directive, OnInit, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[mvatMarcar]'
})
export class MarcarDirective implements OnInit {
  @Input('mvatMarcar') mvatMarcar: string;
  constructor(private ref: ElementRef, private render: Renderer2) { }
  ngOnInit() {
    if (this.mvatMarcar === 'listo') {
      this.render.setStyle(this.ref.nativeElement, 'background-color', 'green');
    } else {
      this.render.setStyle(this.ref.nativeElement, 'background-color', 'grei');
    }
  }
}
