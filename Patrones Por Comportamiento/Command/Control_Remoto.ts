import { Comando } from "./interface/Comando";

//este es el invocador
export class ControlRemoto {
  private comando: Comando;

  constructor(comandoInicial: Comando) {
    this.comando = comandoInicial;
  }

  setComando(comando: Comando) {
    this.comando = comando;
  }

  presionarBoton(): string {
    return this.comando.ejecutar();
  }
}
