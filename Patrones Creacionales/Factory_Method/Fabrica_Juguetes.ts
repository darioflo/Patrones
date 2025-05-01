import { Producto } from "./interface/Producto";

// clase abstracta donde se declara el Factory Method
export abstract class FabricadeJuguetes {
  //Factory Method
  abstract crearJuguete(): Producto;

  //Método comun que puede llevar el producto
  jugar() {
    const jugueteNuevo = this.crearJuguete();
    return jugueteNuevo.hablar();
  }
}
