"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Correo_Viejo_1 = require("./Correo_Viejo");
const Adaptar_Correo_1 = require("./Adaptar_Correo");
let correoViejo = new Correo_Viejo_1.CorreoViejo();
let adaptador = new Adaptar_Correo_1.AdaptarCorreo(correoViejo);
console.log(adaptador.enviarMensaje());
