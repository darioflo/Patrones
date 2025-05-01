// Definimos una interfaz común que será utilizada por el cliente.
// Esto asegura que cualquier clase que implemente esta interfaz
// tendrá el método `enviarMensaje`.
export interface Mensajero {
  enviarMensaje(): string;
}
