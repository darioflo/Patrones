"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificacionDecorator = void 0;
var NotificacionDecorator = /** @class */ (function () {
    function NotificacionDecorator(notificacion) {
        this.wrapper = notificacion;
    }
    NotificacionDecorator.prototype.enviar = function (mensaje) {
        return this.wrapper.enviar(mensaje);
    };
    return NotificacionDecorator;
}());
exports.NotificacionDecorator = NotificacionDecorator;
