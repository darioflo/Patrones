"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Notificaci_n_Correo_1 = require("./Notificaci\u00F3n_Correo");
var Notificacion_SMS_1 = require("./Notificacion_SMS");
var Notificacion_WTSP_1 = require("./Notificacion_WTSP");
var notificacion = new Notificaci_n_Correo_1.NotificacionCorreo();
notificacion = new Notificacion_SMS_1.NotificacionSMS(notificacion);
notificacion = new Notificacion_WTSP_1.NotificacionWTSP(notificacion);
console.log(notificacion.enviar("Tienes una tarea nueva"));
