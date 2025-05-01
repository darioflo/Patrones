"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PantallaMovil = void 0;
var PantallaMovil = /** @class */ (function () {
    function PantallaMovil() {
    }
    PantallaMovil.prototype.notificar = function (actualizacion) {
        console.log("Pantalla M\u00F3vil: El clima est\u00E1: ".concat(actualizacion));
    };
    return PantallaMovil;
}());
exports.PantallaMovil = PantallaMovil;
