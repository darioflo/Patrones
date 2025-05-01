import { NotificacionDecorator } from "./Notificación_Decorator";

// Decorador concreto que añade funcionalidad para enviar mensajes vía WhatsApp
export class NotificacionWTSP extends NotificacionDecorator {
  enviar(mensaje: string): string {
    // Llama al método enviar del decorador anterior y añade el mensaje vía WhatsApp
    return `${super.enviar(mensaje)}: mensaje vía WTSP `;
  }
}
