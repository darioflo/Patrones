import { EstacionClima } from "./Estacion_Clima";
import { PantallaGrande } from "./Pantalla_Grande";
import { PantallaMovil } from "./Pantalla_Movil";

let estacion: EstacionClima = new EstacionClima();
let pantallaGrande: PantallaGrande = new PantallaGrande();
let pantallaMovil: PantallaMovil = new PantallaMovil();

estacion.agregar(pantallaGrande);
estacion.agregar(pantallaMovil);

estacion.actualizar("Soleado");
estacion.cambiarClima("Lluvioso");
