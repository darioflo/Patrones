import { Observador } from "./interface/Observador";

export class EstacionClima {
  private observadores: Observador[] = [];

  agregar(observador: Observador): void {
    this.observadores.push(observador);
  }

  quitar(observador: Observador) {
    this.observadores = this.observadores.filter((obs) => obs !== observador);
  }

  actualizar(actualizacion: string): void {
    for (const observador of this.observadores) {
      observador.notificar(actualizacion);
    }
  }

  cambiarClima(nuevoClima: string): void {
    console.log(`El clima cambió a: ${nuevoClima}`);
    this.actualizar(nuevoClima);
  }
}
