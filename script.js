const resetButton = document.getElementById('btnValueRectangle');
// const equalButton = document.getElementById('btnValueRectangle');
const deleteButton = document.getElementById('delete-button');
const screen = document.getElementById('screen');
const numberButtons = document.querySelectorAll('#number');

var variables = ['',''];
var operator = '';
var id= 0;

function reset(){
    variables = ['',''];
    operator = '';
    id = 0;
    updateScreen();}

function updateScreen(){
    if(variables[id] === '') {
        screen.innerText ='0';
    } else {screen.innerText = variables[id];}
}

function del(){
    if(variables[id].length > 0){
        variables[id] = variables[id].substr(0, variables[id].length-1);
        updateScreen();
    }
}   

resetButton.addEventListener('click', reset);

numberButtons.forEach(button => {
    button.addEventListener('click',() =>{
        const regexp = /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/;
        
        if( regexp.test(variables[id]+button.innerText)){
            variables[id] += button.innerText;
            updateScreen();
        }
    });
});
deleteButton.addEventListener('click', del);