import { Component, OnInit, Input } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';
import { Evidencia } from '../evidencia';
import { Reparacion } from '../reparacion';
import { ReparacionesService } from '../reparaciones.service';
import { Vehiculo } from '../vehiculo';

@Component({
  selector: 'app-captura-evidencia',
  templateUrl: './captura-evidencia.component.html',
  styleUrls: ['./captura-evidencia.component.css']
})
export class CapturaEvidenciaComponent implements OnInit {
  //Foto 
  public foto: WebcamImage = null;
  //Trigger
  private trigger: Subject<void> = new Subject<void>();
  reparacionActual: Reparacion;
  evidenciaActual: Evidencia;
  valorTotal: number;
  @Input() vehiculo: Vehiculo;
    
  constructor(private reparacionesService: ReparacionesService) { }

  ngOnInit() {
    this.reparacionActual = new Reparacion();
    this.reparacionActual.evidencias = [];
    if (this.vehiculo == null){
      this.reparacionesService.getVehiculo(1)
      .subscribe(vehiculo => {
        this.vehiculo = vehiculo;
      });
    }else{
    }
    this.valorTotal = 0;
  }

  public tomarFoto(): void {
    this.trigger.next();
  }

  public handleImage(webcamImage: WebcamImage): void {
    this.foto = webcamImage;
    this.evidenciaActual = new Evidencia();
    this.evidenciaActual.foto = this.foto.imageAsDataUrl;
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  public agregarFoto(): void {
    this.reparacionActual.evidencias.push(this.evidenciaActual);
    this.valorTotal = +this.valorTotal + +this.evidenciaActual.valor;
  }

  public guardarReparacion(): void {
    this.reparacionActual.idVehiculo = 1;
    this.reparacionActual.descripcion = "Descripcion de prueba";
    this.reparacionesService.addReparacion(this.reparacionActual)
    .subscribe(reparacion => {});
  }
}
