"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.FabricaRobots = void 0;
var Fabrica_Juguetes_1 = require("./Fabrica_Juguetes");
var Robot_1 = require("./Robot");
var FabricaRobots = /** @class */ (function (_super) {
    __extends(FabricaRobots, _super);
    function FabricaRobots() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FabricaRobots.prototype.crearJuguete = function () {
        return new Robot_1.Robot();
    };
    return FabricaRobots;
}(Fabrica_Juguetes_1.FabricadeJuguetes));
exports.FabricaRobots = FabricaRobots;
