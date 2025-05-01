import { FabricadeJuguetes } from "./Fabrica_Juguetes";
import { Producto } from "./interface/Producto";
import { Muñeca } from "./Muñeca";

export class FabricaMunecas extends FabricadeJuguetes {
  //Implementacion del Factory Method con la lógica correspondiente a cada clase
  crearJuguete(): Producto {
    return new Muñeca();
  }
}
