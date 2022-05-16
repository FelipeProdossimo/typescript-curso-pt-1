import { Negociacao } from "./negociacao.js";
//Tipo Generics no modo Array
//Array + <T> é para complementar a class com varios tipos genericamente.
export class Negociacoes {
    private negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }

    lista(): ReadonlyArray<Negociacao> {
        return this.negociacoes;
    }
}
