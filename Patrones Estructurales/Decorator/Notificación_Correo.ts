import { Notificacion } from "./Interface/Notificacion";

// Clase concreta que implementa la interfaz Notificacion para enviar mensajes por correo
export class NotificacionCorreo implements Notificacion {
  enviar(mensaje: string): string {
    // Devuelve el mensaje indicando que se envió vía correo
    return `${mensaje}: mensaje vía correo `;
  }
}
