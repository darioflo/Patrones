export interface Observador {
  notificar(actualizacion: string): void;
}
