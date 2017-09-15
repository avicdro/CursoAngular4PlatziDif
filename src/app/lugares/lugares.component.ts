import { Component, OnInit, Renderer2, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'mvat-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent implements OnInit {
@ViewChild('lug') lug: ElementRef;
   lugares: object[] = [
    {'id': 1, 'Empresa': 'Los perros',      'descripB': 'esta es una pequeña descripcion 1' , 'Pago': 'listo',
    'lat': 10.3748184,
    'lng': -66.9608981 },
    {'id': 2, 'Empresa': 'Los Gatos',       'descripB': 'esta es una pequeña descripcion 2' , 'Pago': 'NP'   ,
    'lat': 10.3748184,
    'lng': -66.9608981 },
    {'id': 3, 'Empresa': 'Los Televisores', 'descripB': 'esta es una pequeña descripcion 3' , 'Pago': 'listo',
    'lat': 10.3748184,
    'lng': -66.9608981 },
    {'id': 4, 'Empresa': 'Los canalesTv',   'descripB': 'esta es una pequeña descripcion 4' , 'Pago': 'NP'   ,
    'lat': 10.3748184,
    'lng': -66.9608981 }
  ];
  lat = 10.3748184;
  lng = -66.9608981;
  ls = true
  constructor( private render: Renderer2) {
  }

  ngOnInit() {

  }

  cuadrado() {
    const caj = this.render.createElement('div');
    const titulo = this.render.createText('hola soy el titulo');
    if (this.ls === true) {
      this.render.appendChild(this.lug.nativeElement, caj);
      this.render.addClass(caj, 'caja');
      this.render.appendChild(caj, titulo);
      console.log('lel', caj, this.lug.nativeElement)
      this.ls = false;
    } else {
      this.render.removeClass(caj, 'caja');
      this.ls = true;
    }
  }
}
