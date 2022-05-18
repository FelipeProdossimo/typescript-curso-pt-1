import { Imprimivel } from "../utils/imprimivel.js";
import { Negociacao } from "./negociacao.js";
//Tipo Generics no modo Array
//Array + <T> é para complementar a class com varios tipos genericamente.
export class Negociacoes implements Imprimivel{
    private negociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }

    public lista(): readonly Negociacao[] {
        return this.negociacoes;
    }

    public paraTexto(): string {
        return (JSON.stringify(this.negociacoes, null, 2))
    }
}