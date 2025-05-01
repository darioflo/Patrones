"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdaptarCorreo = void 0;
class AdaptarCorreo {
    constructor(correoViejo) {
        this.correoViejo = correoViejo;
    }
    enviarMensaje() {
        return `${this.correoViejo.enviarCorreoAntiguo()} mostrado como nuevo`;
    }
}
exports.AdaptarCorreo = AdaptarCorreo;
