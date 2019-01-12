import { Component, OnInit } from '@angular/core';
import { Reparacion } from '../reparacion';
import { ReparacionesService } from '../reparaciones.service';

@Component({
  selector: 'app-detalle-reparacion',
  templateUrl: './detalle-reparacion.component.html',
  styleUrls: ['./detalle-reparacion.component.css']
})
export class DetalleReparacionComponent implements OnInit {

  reparacionActual: Reparacion;

  constructor(private reparacionesService: ReparacionesService) { }

  ngOnInit() {
    this.reparacionesService.getReparacion(9)
    .subscribe(reparacion => {
      this.reparacionActual = reparacion;
    });
    
  }

}
