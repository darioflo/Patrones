// Cliente que utiliza la interfaz `Mensajero`.
// No interactúa directamente con `CorreoViejo`, sino a través del adaptador.
import { CorreoViejo } from "./Correo_Viejo";
import { AdaptarCorreo } from "./Adaptar_Correo";

// Creamos una instancia de la clase antigua `CorreoViejo`.
let correoViejo = new CorreoViejo();

// Creamos una instancia del adaptador, pasándole la instancia de `CorreoViejo`.
let adaptador = new AdaptarCorreo(correoViejo);

// El cliente llama al método `enviarMensaje` del adaptador,
// que internamente traduce la llamada al método de la clase antigua.
console.log(adaptador.enviarMensaje());
