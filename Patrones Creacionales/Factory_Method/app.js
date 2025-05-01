"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fabrica_Mu_ecas_1 = require("./fabrica_Mu\u00F1ecas");
var Fabrica_Robots_1 = require("./Fabrica_Robots");
var juguete1 = new fabrica_Mu_ecas_1.FabricaMuñecas();
var juguete2 = new Fabrica_Robots_1.FabricaRobots();
console.log(juguete1.operar());
console.log(juguete2.operar());
