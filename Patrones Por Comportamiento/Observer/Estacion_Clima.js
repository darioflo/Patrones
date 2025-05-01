"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstacionClima = void 0;
var EstacionClima = /** @class */ (function () {
    function EstacionClima() {
        this.observadores = [];
    }
    EstacionClima.prototype.agregar = function (observador) {
        this.observadores.push(observador);
    };
    EstacionClima.prototype.quitar = function (observador) {
        this.observadores = this.observadores.filter(function (obs) { return obs !== observador; });
    };
    EstacionClima.prototype.actualizar = function (actualizacion) {
        for (var _i = 0, _a = this.observadores; _i < _a.length; _i++) {
            var observador = _a[_i];
            observador.notificar(actualizacion);
        }
    };
    EstacionClima.prototype.cambiarClima = function (nuevoClima) {
        console.log("El clima cambi\u00F3 a: ".concat(nuevoClima));
        this.actualizar(nuevoClima);
    };
    return EstacionClima;
}());
exports.EstacionClima = EstacionClima;
