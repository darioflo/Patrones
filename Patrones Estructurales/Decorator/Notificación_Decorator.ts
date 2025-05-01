import { Notificacion } from "./Interface/Notificacion";

// Clase base para los decoradores, que también implementa la interfaz Notificacion
export class NotificacionDecorator implements Notificacion {
  protected wrapper: Notificacion; // Notificación que será decorada

  constructor(notificacion: Notificacion) {
    this.wrapper = notificacion; // Se guarda la notificación a decorar
  }

  enviar(mensaje: string): string {
    // Llama al método enviar de la notificación decorada
    return this.wrapper.enviar(mensaje);
  }
}
