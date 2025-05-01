"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComandoCaminar = void 0;
var ComandoCaminar = /** @class */ (function () {
    function ComandoCaminar(robot) {
        this.robot = robot;
    }
    ComandoCaminar.prototype.ejecutar = function () {
        return this.robot.caminar();
    };
    return ComandoCaminar;
}());
exports.ComandoCaminar = ComandoCaminar;
