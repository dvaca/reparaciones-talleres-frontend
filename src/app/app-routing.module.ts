import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CapturaEvidenciaComponent } from './captura-evidencia/captura-evidencia.component';
import { DetalleReparacionComponent } from './detalle-reparacion/detalle-reparacion.component';

const routes: Routes = [
  { path: '', redirectTo: '/capturar', pathMatch: 'full' },
  { path: 'capturar', component: CapturaEvidenciaComponent },
  { path: 'consultar/:id', component: DetalleReparacionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
