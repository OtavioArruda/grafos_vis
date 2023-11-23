class Dictionary {
    constructor(valuesDictionary) {
        this.valuesDictionary = valuesDictionary;
    }

    checkDuplicateKeys(){
        const graph = this.valuesDictionary;
        const processedKeys = {};
    
        return graph.map(obj => {
            const key = Object.keys(obj)[0];
    
            if (processedKeys[key]) {
                // console.log(`Chave duplicada: ${key}`);
                console.log('Erro na sintaxe');
            }
    
            processedKeys[key] = true;
            return obj;
        });
    }
}

module.exports = { Dictionary };