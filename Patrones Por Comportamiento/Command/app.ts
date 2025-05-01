import { ComandoCaminar } from "./Comando_Caminar";
import { ComandoSaltar } from "./Comando_Saltar";
import { ControlRemoto } from "./Control_Remoto";
import { Robot } from "./Robot";

const robot: Robot = new Robot();

const comandoCaminar: ComandoCaminar = new ComandoCaminar(robot);
const comandoSaltar: ComandoSaltar = new ComandoSaltar(robot);

const control: ControlRemoto = new ControlRemoto(comandoCaminar);
console.log(control.presionarBoton());

control.setComando(comandoSaltar);
console.log(control.presionarBoton());
