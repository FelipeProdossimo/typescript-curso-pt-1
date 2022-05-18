import { Imprimivel } from "../utils/imprimivel.js";
import { comparavel } from "./comparavel.js";


//Exemplo de classe que pode se extender para mais classes
export interface Modelo<T> extends Imprimivel, comparavel<T> {

}