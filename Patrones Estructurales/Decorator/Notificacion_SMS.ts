import { NotificacionDecorator } from "./Notificación_Decorator";

// Decorador concreto que añade funcionalidad para enviar mensajes vía SMS
export class NotificacionSMS extends NotificacionDecorator {
  enviar(mensaje: string): string {
    // Llama al método enviar del decorador anterior y añade el mensaje vía SMS
    return `${super.enviar(mensaje)}: mensaje vía SMS `;
  }
}
