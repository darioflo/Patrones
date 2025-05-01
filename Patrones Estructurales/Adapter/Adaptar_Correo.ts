// Clase adaptadora que implementa la interfaz `Mensajero`.
// Esta clase actúa como un puente entre `CorreoViejo` y el cliente.
import { Mensajero } from "./interface/Mensajero";
import { CorreoViejo } from "./Correo_Viejo";

export class AdaptarCorreo implements Mensajero {
  private correoViejo: CorreoViejo;

  // El constructor recibe una instancia de `CorreoViejo`.
  constructor(correoViejo: CorreoViejo) {
    this.correoViejo = correoViejo;
  }

  // Implementa el método `enviarMensaje` de la interfaz `Mensajero`.
  // Internamente, llama al método `enviarCorreoAntiguo` de `CorreoViejo`
  // y adapta su salida para que sea compatible con el cliente.
  enviarMensaje(): string {
    return `${this.correoViejo.enviarCorreoAntiguo()} mostrado como nuevo`;
  }
}
