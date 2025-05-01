"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComandoSaltar = void 0;
var ComandoSaltar = /** @class */ (function () {
    function ComandoSaltar(robot) {
        this.robot = robot;
    }
    ComandoSaltar.prototype.ejecutar = function () {
        return this.robot.saltar();
    };
    return ComandoSaltar;
}());
exports.ComandoSaltar = ComandoSaltar;
