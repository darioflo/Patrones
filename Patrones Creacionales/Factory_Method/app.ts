import { FabricaMunecas } from "./Fabrica_Munecas";
import { FabricaRobots } from "./Fabrica_Robots";

//uso en el cliente
const juguete1 = new FabricaMunecas();
const juguete2 = new FabricaRobots();

console.log(juguete1.jugar());
console.log(juguete2.jugar());
