import { Evidencia } from './evidencia';

export class Reparacion{
    id: number;
    idVehiculo: number;
    descripcion: string;
    fechaIngreso: Date;
    fechaEntrega: Date;
    evidencias: Evidencia[];
}