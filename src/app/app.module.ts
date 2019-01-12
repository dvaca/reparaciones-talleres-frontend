import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ModalModule } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import {WebcamModule} from 'ngx-webcam';

import { CapturaEvidenciaComponent } from './captura-evidencia/captura-evidencia.component';
import { ReparacionesService } from './reparaciones.service';
import { DetalleReparacionComponent } from './detalle-reparacion/detalle-reparacion.component';

@NgModule({
  declarations: [
    AppComponent,
    CapturaEvidenciaComponent,
    DetalleReparacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    WebcamModule,
    FormsModule
  ],
  providers: [
    ReparacionesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
