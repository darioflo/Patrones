import { Observador } from "./interface/Observador";

export class PantallaGrande implements Observador {
  notificar(actualizacion: string): void {
    console.log(`Pantalla Grande: El clima está: ${actualizacion}`);
  }
}
