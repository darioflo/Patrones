import { Producto } from "./interface/Producto";

//la clase Robot será del mismo tipo de dato que la interfaz Producto
export class Robot implements Producto {
  material: string;

  constructor() {
    this.material = "plastico";
  }

  hablar() {
    return "Se ha creado un robot";
  }
}
