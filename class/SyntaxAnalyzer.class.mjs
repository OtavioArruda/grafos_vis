import Token from './Token.class.mjs';

class SyntaxAnalyzer {
    constructor(textArea) {
        this.textArea = textArea;
    }

    analyzeSyntax() {
        const inputValue = this.textArea.value;
        const tokens = this.tokenize(inputValue);
        console.log(tokens);
    }

    tokenize(input) {
        const regex = /"([^"]*)"|,|=|\[|\]|(?:[A-Za-z]|[0-9])+/g;
        const matches = input.match(regex);

        if (!matches) {
            return [];
        }

        const tokens = matches.map(match => {
            if (match.startsWith('"')) {
                return new Token("STRING", match.slice(1, -1));
            } 
            else if (match === "="){
                return new Token("EQUAL", match);
            }
            else if (match === "[") {
                return new Token("LEFT_BRACKET", match);
            } 
            else if (match === "]") {
                return new Token("RIGHT_BRACKET", match);
            } 
            else if (match === ",") {
                return new Token("COMMA", match);
            } 
            else {
                return new Token("IDENTIFIER", match);
            }
        });

        return tokens;
    }
}

export default SyntaxAnalyzer;
