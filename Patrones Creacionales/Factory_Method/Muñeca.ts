import { Producto } from "./interface/Producto";

//la clase Muñeca será del mismo tipo de dato que la interfaz Producto
export class Muñeca implements Producto {
  material: string;

  constructor() {
    this.material = "goma";
  }

  hablar() {
    return "Se ha creado una muñeca";
  }
}
