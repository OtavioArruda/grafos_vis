const { SyntaxAnalyzer } = require('./compiler/syntaxAnalyzer.js');

const startSyntaxAnalyzer = (cy, cyOptions) =>  {
    console.log('startSyntaxAnalyzer');

    const inputArea = document.querySelector('textarea');

    inputArea.addEventListener('input', () => {
        const syntaxAnalyzer = new SyntaxAnalyzer(inputArea.value);

        cy.json({ elements: syntaxAnalyzer.analyzeSyntax() });

        const cyLayout = cy.elements().layout(cyOptions);

        cyLayout.run();
    });
};

module.exports = { startSyntaxAnalyzer };