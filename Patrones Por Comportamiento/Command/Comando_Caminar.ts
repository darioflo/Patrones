import { Comando } from "./interface/Comando";
import { Robot } from "./Robot";

//comandos concretos aqui se busca separar la orden del que la ejecuta
export class ComandoCaminar implements Comando {
  private robot: Robot;

  constructor(robot: Robot) {
    this.robot = robot;
  }

  ejecutar(): string {
    return this.robot.caminar();
  }
}
