class ReadSyntax{
    constructor(textArea){
        this.textArea = textArea;
    }
    
    inputEvent(){
        this.textArea.addEventListener('input', () => {
            let updatedValue = this.textArea.value;
            console.log(updatedValue);
        })
    }
}



document.addEventListener("DOMContentLoaded", () => {
    let inputArea = document.querySelector('textarea');

    let eventInp = new ReadSyntax(inputArea);
    eventInp.inputEvent();
})