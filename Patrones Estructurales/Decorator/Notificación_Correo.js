"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificacionCorreo = void 0;
var NotificacionCorreo = /** @class */ (function () {
    function NotificacionCorreo() {
    }
    NotificacionCorreo.prototype.enviar = function (mensaje) {
        return "".concat(mensaje, ": mensaje v\u00EDa correo");
    };
    return NotificacionCorreo;
}());
exports.NotificacionCorreo = NotificacionCorreo;
