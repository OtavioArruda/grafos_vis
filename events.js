import SyntaxAnalyzer from './class/SyntaxAnalyzer.class.mjs';


document.addEventListener("DOMContentLoaded", () => {
    let inputArea = document.querySelector('textarea');
    let syntaxAnalyzer = new SyntaxAnalyzer(inputArea);

    inputArea.addEventListener('input', () => {
        syntaxAnalyzer.analyzeSyntax();
    });
});