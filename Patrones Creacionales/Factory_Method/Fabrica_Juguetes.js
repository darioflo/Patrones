"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FabricadeJuguetes = void 0;
var FabricadeJuguetes = /** @class */ (function () {
    function FabricadeJuguetes() {
    }
    FabricadeJuguetes.prototype.operar = function () {
        var jugueteNuevo = this.crearJuguete();
        return jugueteNuevo.hablar();
    };
    return FabricadeJuguetes;
}());
exports.FabricadeJuguetes = FabricadeJuguetes;
