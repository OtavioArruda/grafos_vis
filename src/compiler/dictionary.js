class Dictionary {
    constructor(valuesDictionary) {
        this.valuesDictionary = valuesDictionary;
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
