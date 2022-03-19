const resetButton = document.getElementById('reset-button');
const equalButton = document.getElementById('equal-button');
const deleteButton = document.getElementById('delete-button');
const screen = document.querySelector('.imputN');
const numberButtons = document.querySelectorAll('#number');
const operationButtons = document.querySelectorAll('#operator-button')

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
        screen.innerText ='_';
    } else {screen.innerText = variables[id];}
}

function del(){
    if(variables[id].length > 0){
        variables[id] = variables[id].substr(0, variables[id].length-1);
        updateScreen();
    }
}   

function calculate(){
    var res = eval(variables[0] + operator + variables[1]);
    operator = '';
    variables[1] ='';
    variables[0] = res;
    id = 0;
    updateScreen();
    variables[0] = '';
}

resetButton.addEventListener('click', reset);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        const regexp = /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/;
        
        if( regexp.test(variables[id]+button.innerText)){
            variables[id] += button.innerText;
            updateScreen();
        }
    });
});
deleteButton.addEventListener('click', del);

operationButtons.forEach(button => {
    button.addEventListener('click', ()=> {
        if(variables[0] === '' && screen.innerText !== '0'){
            variables[0] = screen.innerText;
        }
        id++;
        switch(button.innerText){
            case '+':
            case '-':
            case '/':
                operator = button.innerText;
                break;
            case 'X':
                operator ='*';

        }
        console.log('variables: ', variables, ' id: ', ' operator: ', operator);
    })
})

equalButton.addEventListener('click', calculate); 

// ^ working 

const body = document.querySelector('body');
const topColor = document.querySelector('.container');
const switchBox = document.querySelector('.switchBox');
const switchTheme1 = document.querySelector('.switchColor1');
const switchTheme2 = document.querySelector('.switchColor2');
const switchTheme3 = document.querySelector('.switchColor3');
const boxResult = document.querySelector('.boxResult');
const boxButtons = document.querySelector('.boxButtons');

const numberBtns = document.querySelectorAll('.Ncolor');


function Theme1() {
    body.style.backgroundColor = "hsl(222, 26%, 31%)";
    topColor.style.color ="#ffffff";
    switchBox.style.backgroundColor = "hsl(223, 31%, 20%)"; 
    switchTheme1.style.backgroundColor = "hsl(6, 63%, 50%)";
    switchTheme2.style.backgroundColor = "hsl(223, 31%, 20%)";
    switchTheme3.style.backgroundColor = "hsl(223, 31%, 20%)";
    boxResult.style.backgroundColor = "hsl(224, 36%, 15%)";
    boxResult.style.color = "#ffffff";
    boxButtons.style.backgroundColor = "hsl(223, 31%, 20%)";
    resetButton.style.backgroundColor = "hsl(225, 21%, 49%)";
    resetButton.style.boxShadow = "0px 4px 0px 0px hsl(224, 28%, 35%)";
    equalButton.style.backgroundColor = "hsl(6, 63%, 50%)";
    equalButton.style.boxShadow = "0px 4px 0px 0px hsl(6, 70%, 34%)";
    deleteButton.style.backgroundColor = "hsl(225, 21%, 49%)";
    deleteButton.style.boxShadow = "0px 4px 0px 0px hsl(224, 28%, 35%)";
    numberBtns.forEach((numberBtns)=>{
      numberBtns.style.backgroundColor = "hsl(30, 25%, 89%)";
      numberBtns.style.color = "hsl(221, 14%, 31%)";
      numberBtns.style.boxShadow = "0px 4px 0px 0px hsl(28, 16%, 65%)";
    });
  }

function Theme2() {
  body.style.backgroundColor = "hsl(0, 0%, 90%)";
  topColor.style.color ="hsl(0, 0%, 11%)";
  switchBox.style.backgroundColor = "hsl(0, 5%, 81%)"; 
  switchTheme1.style.backgroundColor = "hsl(0, 5%, 81%)";
  switchTheme2.style.backgroundColor = "hsl(25, 98%, 40%)";
  switchTheme3.style.backgroundColor = "hsl(0, 5%, 81%)";
  boxResult.style.backgroundColor = "hsl(0, 0%, 93%)";
  boxResult.style.color = "hsl(0, 0%, 11%)";
  boxButtons.style.backgroundColor = "hsl(0, 5%, 81%)";
  resetButton.style.backgroundColor = "hsl(185, 42%, 37%)";
  resetButton.style.boxShadow = "0px 4px 0px 0px hsl(185, 58%, 25%)";
  equalButton.style.backgroundColor = "#C85401";
  equalButton.style.boxShadow = "0px 4px 0px 0px hsl(25, 99%, 27%)";
  deleteButton.style.backgroundColor = "hsl(185, 42%, 37%)";
  deleteButton.style.boxShadow = "0px 4px 0px 0px hsl(185, 58%, 25%)";
  numberBtns.forEach((numberBtns)=>{
    numberBtns.style.backgroundColor = "hsl(45, 7%, 89%)";
    numberBtns.style.color = "hsl(0, 0%, 11%)";
    numberBtns.style.boxShadow = "0px 4px 0px 0px hsl(35, 11%, 61%)";
  });
}

function Theme3() {
    body.style.backgroundColor = "hsl(268, 75%, 9%)";
    topColor.style.color ="hsl(52, 100%, 62%)";
    switchBox.style.backgroundColor = "hsl(268, 71%, 12%)"; 
    switchTheme1.style.backgroundColor = "hsl(268, 71%, 12%)";
    switchTheme2.style.backgroundColor = "hsl(268, 71%, 12%)";
    switchTheme3.style.backgroundColor = "hsl(176, 100%, 44%)";
    boxResult.style.backgroundColor = "hsl(268, 71%, 12%)";
    boxResult.style.color = "hsl(52, 100%, 62%)";
    boxButtons.style.backgroundColor = "hsl(268, 71%, 12%)";
    resetButton.style.backgroundColor = "hsl(281, 89%, 26%)";
    resetButton.style.boxShadow = "0px 4px 0px 0px hsl(285, 91%, 52%)";
    equalButton.style.backgroundColor = "hsl(176, 100%, 44%)";
    equalButton.style.boxShadow = "0px 4px 0px 0px hsl(177, 92%, 70%)";
    deleteButton.style.backgroundColor = "hsl(281, 89%, 26%)";
    deleteButton.style.boxShadow = "0px 4px 0px 0px hsl(285, 91%, 52%)";
    numberBtns.forEach((numberBtns)=>{
      numberBtns.style.backgroundColor = "hsl(268, 47%, 21%)";
      numberBtns.style.color = "hsl(52, 100%, 62%)";
      numberBtns.style.boxShadow = "0px 4px 0px 0px hsl(290, 70%, 36%)";
    });
  }


switchTheme1.addEventListener('click', Theme1);
switchTheme2.addEventListener('click', Theme2);
switchTheme3.addEventListener('click', Theme3);
