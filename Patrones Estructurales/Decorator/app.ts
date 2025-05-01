// Código principal
import { Notificacion } from "./Interface/Notificacion";
import { NotificacionCorreo } from "./Notificación_Correo";
import { NotificacionSMS } from "./Notificacion_SMS";
import { NotificacionWTSP } from "./Notificacion_WTSP";

// Se crea una notificación básica que envía mensajes por correo
let notificacion: Notificacion = new NotificacionCorreo();

// Se decora la notificación para añadir funcionalidad de envío por SMS
notificacion = new NotificacionSMS(notificacion);

// Se decora nuevamente para añadir funcionalidad de envío por WhatsApp
notificacion = new NotificacionWTSP(notificacion);

// Se envía el mensaje utilizando la notificación decorada
//Para ver los resultados de la consola solo hay que ejecutar los comandos tsc app.ts y node app.js
console.log(notificacion.enviar("Tienes una tarea nueva"));
