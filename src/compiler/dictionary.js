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

    constructGraph() {
        const graphArr = [];

        this.valuesDictionary.forEach(x => {
            Object.keys(x).forEach(y => {
                graphArr.push({
                    data: { id: y }
                });

                x[y].forEach(z => {
                    graphArr.push({
                        data: { id: z }
                    });

                    graphArr.push({
                        data: {
                            id: `${y}${z}`,
                            weight: 1,
                            source: y,
                            target: z
                        }
                    });
                });
            });
        });

        return graphArr;
    }
}

module.exports = { Dictionary };
