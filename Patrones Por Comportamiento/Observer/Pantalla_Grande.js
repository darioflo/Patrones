"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PantallaGrande = void 0;
var PantallaGrande = /** @class */ (function () {
    function PantallaGrande() {
    }
    PantallaGrande.prototype.notificar = function (actualizacion) {
        console.log("Pantalla Grande: El clima est\u00E1: ".concat(actualizacion));
    };
    return PantallaGrande;
}());
exports.PantallaGrande = PantallaGrande;
