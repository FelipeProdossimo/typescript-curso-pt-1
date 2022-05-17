import { inspect } from "../decorators/inspect.js";
import { LogarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";

export abstract class View<T> {

    protected elemento: HTMLElement;
    //colocar o "?" Após o parâmetro ele se torna opcional. sempre o último se torna opcional.
    constructor(seletor: string) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento as HTMLElement;
        } else {
            throw Error(`Seletor ${seletor} não existe no DOM. Verifique!`)
        }
    }


    @LogarTempoDeExecucao(true)
    @inspect()
    public update(model: T): void {
        let template = this.template(model);
        this.elemento.innerHTML = template;
    }
    protected abstract template(model: T): string;
}