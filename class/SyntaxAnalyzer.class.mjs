import Token from './Token.class.mjs';

class SyntaxAnalyzer {

    constructor(textArea) {
        this.textArea = textArea;
    }


    analyzeSyntax(inputValue) {
        inputValue = this.textArea
        let tokens = this.tokenize(inputValue);
        let validateSyntax = [];
        let preDictionary = [];
        let resultTokens = [];


        for (let i = 0; i < tokens.length; i++) {
            if (tokens[i].type === 'ARROW') {
                tokens[i-1].type === 'IDENTIFIER' ? validateSyntax : validateSyntax.push(tokens[i]);
            }
            else if (tokens[i].type === 'LEFT_BRACKET') {
                tokens[i-1].type === 'ARROW' ? validateSyntax : validateSyntax.push(tokens[i]);
            }
            else if (tokens[i].type === 'COMMA' ){
                tokens[i-1].type === 'IDENTIFIER' ? validateSyntax : validateSyntax.push(tokens[i]);
            }
            else if(tokens[i].type === 'RIGHT_BRACKET'){
                tokens[i-1].type === 'IDENTIFIER' ? validateSyntax : validateSyntax.push(tokens[i]); 
            }
            else if(tokens[i].type === 'IDENTIFIER' && i != 0){
                tokens[i-1].type === 'LEFT_BRACKET' || tokens[i-1].type === "COMMA" || tokens[i-1].type === 'RIGHT_BRACKET' ? validateSyntax : validateSyntax.push(tokens[i]);
            }
        }

        switch (validateSyntax.length) {
            case 0:
                resultTokens.push(tokens);
                break;
        
            default:
                console.log('Erro na sintaxe');
                break;
        }

        // Teste para criação do dicionario apos a analise sintatica
        let teste = [];
        resultTokens = resultTokens[0];
        for (let j = 0; j < resultTokens.length; j++) {
            if (resultTokens[0].type === 'IDENTIFIER' && resultTokens[j].type === 'IDENTIFIER') {
                let convertStr = resultTokens[j].value.toString();
                preDictionary.push(convertStr);
            }   
            if (j !== 0 && resultTokens[j].type === 'IDENTIFIER') {
                if (resultTokens[j-1].type === 'RIGHT_BRACKET') {
                    teste.push(resultTokens[j].value.toString())
                    preDictionary.splice(0, preDictionary.length - 1)
                }
            }   
        }
        this.Dictionary(preDictionary);
        //
    }



    tokenize(input) {
        const regex = /"([^"]*)"|,|->|\[|\]|(?:[A-Za-z]|[0-9])+/g;
        const matches = input.match(regex);

        if (!matches) {
            return [];
        }

        const tokens = matches.map(match => {
            switch (match) {
                case "->":
                    return new Token("ARROW", match);
                    break;

                case "[":
                    return new Token("LEFT_BRACKET", match);
                    break;

                case "]":
                    return new Token("RIGHT_BRACKET", match);
                    break;

                case ",":
                    return new Token("COMMA", match);
                    break;             
            
                default:
                    return new Token("IDENTIFIER", match);
                    break;
            }
        });

        return tokens;
    }



    Dictionary(listTokens, valuesDictionary = []) {
        let key = listTokens[0];
        let dictionary = [];

        if(listTokens.length > 0){
            for (let j = 1; j < listTokens.length; j++) {
                const vl = listTokens[j];
                valuesDictionary.push(vl);
            }
        }
        let resultDictionary = {
            [key]: valuesDictionary
        }

        dictionary.push(resultDictionary);
        console.log(dictionary);
    }
}

export default SyntaxAnalyzer;
