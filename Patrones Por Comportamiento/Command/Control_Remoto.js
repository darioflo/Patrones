"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlRemoto = void 0;
var ControlRemoto = /** @class */ (function () {
    function ControlRemoto(comandoInicial) {
        this.comando = comandoInicial;
    }
    ControlRemoto.prototype.setComando = function (comando) {
        this.comando = comando;
    };
    ControlRemoto.prototype.presionarBoton = function () {
        return this.comando.ejecutar();
    };
    return ControlRemoto;
}());
exports.ControlRemoto = ControlRemoto;
