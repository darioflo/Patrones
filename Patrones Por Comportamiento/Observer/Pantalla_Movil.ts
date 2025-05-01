import { Observador } from "./interface/Observador";

export class PantallaMovil implements Observador {
  notificar(actualizacion: string): void {
    console.log(`Pantalla Móvil: El clima está: ${actualizacion}`);
  }
}
