import SyntaxAnalyzer from './class/SyntaxAnalyzer.class.mjs';

document.addEventListener("DOMContentLoaded", () => {
    let inputArea = document.querySelector('textarea');
    
    inputArea.addEventListener('input', () => {
        let syntaxAnalyzer = new SyntaxAnalyzer(inputArea.value);
        syntaxAnalyzer.analyzeSyntax();
    });
});