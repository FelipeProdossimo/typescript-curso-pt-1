import { Negociacao } from "./negociacao.js";
//Tipo Generics no modo Array
//Array + <T> é para complementar a class com varios tipos genericamente.
export class Negociacoes {
    private negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }

    lista(): readonly Negociacao[] {
        return this.negociacoes;
    }
}
