import { Cliente } from './cliente';

export class Vehiculo{
    id: number;
    idCliente: number;
    placa: string;
    marca: string;
    linea: string;
    cilindraje: number;
    tipo: string;
    modelo: number;
    cliente: Cliente;
}