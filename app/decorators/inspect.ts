export function inspect() {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args: any[]) {

            //AS 3 LINHAS SÃO PARA TER NOÇÃO DE ONDE ESTÁ VINDO O CÓDIGO E VERIFICAR ERROS COM JSON.

            //console.log(`--- Método ${propertyKey}`);
            //console.log(`------ parâmetros: ${JSON.stringify(args)}`)
            const retorno = metodoOriginal.apply(this, args);
            //console.log(`------ retorno ${JSON.stringify(retorno)}`)
            return retorno;
        }

        return descriptor;
    }
}