// Interfaz que define el método enviar, que todas las notificaciones deben implementar
export interface Notificacion {
  enviar(mensaje: string): string;
}
