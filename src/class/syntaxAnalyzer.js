const { Token } = require('./token.js');
const { Dictionary } = require('./dictionary.js');


class SyntaxAnalyzer {
    constructor(textArea) {
        this.textArea = textArea;
    }

    analyzeSyntax(inputValue = this.textArea) {
        const tokens = this.tokenize(inputValue);
        const validateSyntax = [];
        const resultTokens = [];

        for(let i = 0; i < tokens.length; i++) {
            switch(tokens[i].type) {
                case 'ARROW':
                case 'COMMA':
                case 'RIGHT_BRACKET':
                    tokens[i-1].type === 'IDENTIFIER' ?
                        validateSyntax :
                        validateSyntax.push(tokens[i]);
                    break;
                case 'LEFT_BRACKET':
                    tokens[i-1].type === 'ARROW' ?
                        validateSyntax :
                        validateSyntax.push(tokens[i]);
                    break;
                case 'IDENTIFIER':
                    if(i != 0) {
                        tokens[i-1].type === 'LEFT_BRACKET' ||
                        tokens[i-1].type === 'COMMA' ||
                        tokens[i-1].type === 'RIGHT_BRACKET' ?
                            validateSyntax :
                            validateSyntax.push(tokens[i]);
                    }
                    break;
            }
        }

        switch(validateSyntax.length) {
            case 0:
                resultTokens.push(tokens);
                break;
            default:
                console.log('Erro na sintaxe');
                break;
        }

        this.constructDictionary(resultTokens[0]);
    }

    constructDictionary(resultTokens) {
        // Teste para criação do dicionario apos a analise sintatica
        const preDictionary = [];
        const setResults = [];

        for(let j = 0; j < resultTokens.length; j++) {
            if(
                resultTokens[0].type === 'IDENTIFIER' &&
                resultTokens[j].type === 'IDENTIFIER'
            ) {
                const convertStr = resultTokens[j].value.toString();

                preDictionary.push(convertStr);
            }

            if(resultTokens[j].type === 'RIGHT_BRACKET') {
                const valuesDictionary = [];
                const key = preDictionary[0];

                if(preDictionary.length > 0) {
                    for(let j = 1; j < preDictionary.length; j++) {
                        const vl = preDictionary[j];

                        valuesDictionary.push(vl);
                    }
                }

                const resultDictionary = {
                    [key]: valuesDictionary
                };

                preDictionary.splice(0, preDictionary.length);

                setResults.push(resultDictionary);
            }
        }

        const graphResult = new Dictionary(setResults);

        graphResult.constructGraph();
    }

    tokenize(input) {
        const regex = /"([^"]*)"|,|->|\[|\]|(?:[A-Za-z]|[0-9])+/g;
        const matches = input.match(regex);

        if(!matches) {
            return [];
        }

        const tokens = matches.map(match => {
            switch(match) {
                case '->':
                    return new Token('ARROW', match);
                case '[':
                    return new Token('LEFT_BRACKET', match);
                case ']':
                    return new Token('RIGHT_BRACKET', match);
                case ',':
                    return new Token('COMMA', match);
                default:
                    return new Token('IDENTIFIER', match);
            }
        });

        return tokens;
    }
}

module.exports = { SyntaxAnalyzer };
