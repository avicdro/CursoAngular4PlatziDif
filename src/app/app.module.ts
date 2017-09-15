import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Materialize
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterializeModule } from 'ng2-materialize';
// GoogleMap
import { AgmCoreModule } from '@agm/core';
// Rutas

// Componentes
import { AppComponent } from './app.component';
import { LugaresComponent } from './lugares/lugares.component';
import { DetalleComponent } from './detalle/detalle.component';
import { ContactoComponent } from './contacto/contacto.component';
import { MarcarDirective } from './directives/marcar.directive';
import { ContarClickDirective } from './directives/contar-click.directive';


@NgModule({
  declarations: [
    AppComponent,
    LugaresComponent,
    DetalleComponent,
    ContactoComponent,
    MarcarDirective,
    ContarClickDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterializeModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBsAKrTeVEwXWb2fKsoYHHf6DPnLQNaIIU'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
