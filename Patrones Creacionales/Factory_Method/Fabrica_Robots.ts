import { FabricadeJuguetes } from "./Fabrica_Juguetes";
import { Producto } from "./interface/Producto";
import { Robot } from "./Robot";

export class FabricaRobots extends FabricadeJuguetes {
  //Implementacion del Factory Method con la lógica correspondiente a cada clase
  crearJuguete(): Producto {
    return new Robot();
  }
}
