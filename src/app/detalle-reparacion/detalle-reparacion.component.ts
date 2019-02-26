import { Component, OnInit } from '@angular/core';
import { Reparacion } from '../reparacion';
import { ReparacionesService } from '../reparaciones.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-reparacion',
  templateUrl: './detalle-reparacion.component.html',
  styleUrls: ['./detalle-reparacion.component.css']
})
export class DetalleReparacionComponent implements OnInit {

  reparacionActual: Reparacion;

  constructor( private route: ActivatedRoute, private reparacionesService: ReparacionesService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.reparacionesService.getReparacion(+id)
    .subscribe(reparacion => {
      this.reparacionActual = reparacion;
    });
    
  }

}
