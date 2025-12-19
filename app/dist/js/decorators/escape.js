export function escape(target, propertyKey, descriptor) {
    const MetodoIriginal = descriptor.value;
    descriptor.value = function (...args) {
        let retorno = this.MetodoOriginal.apply(this, args);
        if (typeof retorno === 'string') {
            console.log(`@escape em ação na classe ${this.constructor.name} para o método ${String(propertyKey)}`);
            retorno = retorno.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        return retorno;
    };
    return descriptor;
}
