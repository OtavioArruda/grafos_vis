const { SyntaxAnalyzer } = require('./class/syntaxAnalyzer.js');

const startSyntaxAnalyzer = () =>  {
    console.log('startSyntaxAnalyzer');

    const inputArea = document.querySelector('textarea');

    inputArea.addEventListener('input', () => {
        const syntaxAnalyzer = new SyntaxAnalyzer(inputArea.value);

        syntaxAnalyzer.analyzeSyntax();
    });
};

module.exports = { startSyntaxAnalyzer };