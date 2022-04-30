let add = (a, b) => (parseFloat(a) + parseFloat(b)).toString();
let substract = (a,b) => (parseFloat(a) - parseFloat(b)).toString();
let multiply = (a, b) => (parseFloat(a) * parseFloat(b) ).toString();
let divide = (a, b) => { if(b != 0) return ( (parseFloat(a)/parseFloat(b)).toString()); else return 'error' };
let reminder = (a, b) => {if(b != 0) return ( (parseFloat(a)%parseFloat(b)).toString()); else return 'error'};
let operate = (no1, no2, operation) => operation(no1, no2);
let displayValueBot = "";
let displayValueTop = "";
 
//number buttons:
for(let i = 0; i <= 9; i++) {
    let button = document.getElementById(i.toString());
    button.addEventListener( 'click', () => {
        
        if(gotOperationSign(displayValueTop))
            digitButtonPressed(i);
        else if( displayValueTop != '')
            alert("Choose operation first!");
        else 
            digitButtonPressed(i);
    });
}

//delete button INAINTE DE EDITSADsad
let ACBtn = document.getElementById("AC");
ACBtn.addEventListener( 'click', () => {
    resetAll();
})

//addition button
let addBtn = document.getElementById("addition");
addBtn.addEventListener( 'click', () => {
    if(displayValueTop.toString().includes('error')) {
        resetAll();
        return;
    }
    if( gotOperationSign(displayValueTop) ) {
        equalFunction();
        displayValueTop += " +";
        redraw();
    } else if( displayValueTop == '') {
        displayValueTop = displayValueBot + " +";
        displayValueBot = "";
        redraw();
    } else {
        displayValueTop = displayValueTop + " +";
        redraw();
    }
})

//subtraction button
let substractBtn = document.getElementById("substraction");
substractBtn.addEventListener( 'click', () => {
    if(displayValueTop.toString().includes('error')) {
        resetAll();
        return;
    }
    if( gotOperationSign(displayValueTop) ) {
        equalFunction();
        displayValueTop += " -";
        redraw();
    } else if( displayValueTop == '') {
        displayValueTop = displayValueBot + " -";
        displayValueBot = "";
        redraw();
    } else {
        displayValueTop = displayValueTop + " -";
        redraw();
    }
})


//multiplication button 
let multiplyBtn = document.getElementById("multiplication");
multiplyBtn.addEventListener( 'click', () => {
    if(displayValueBot == '' && displayValueTop == '') {

    }

    if(displayValueTop.toString().includes('error')) {
        resetAll();
        return;
    }
    if( gotOperationSign(displayValueTop) ) {
        equalFunction();
        displayValueTop += " *";
        redraw();
    } else if( displayValueTop == '') {
        displayValueTop = displayValueBot + " *";
        displayValueBot = "";
        redraw();
    } else {
        displayValueTop = displayValueTop + " *";
        redraw();
    }
})

//division button 
let divBtn = document.getElementById("division");
divBtn.addEventListener( 'click', () => {
    if(displayValueTop.toString().includes('error')) {
        resetAll();
        return;
    }
    if( gotOperationSign(displayValueTop) ) {
        equalFunction();
        displayValueTop += " ÷";
        redraw();
    } else if( displayValueTop == '') {
        displayValueTop = displayValueBot + " ÷";
        displayValueBot = "";
        redraw();
    } else {
        displayValueTop = displayValueTop + " ÷";
        redraw();
    }
})

//reminder button 
let remBtn = document.getElementById("reminder");
remBtn.addEventListener( 'click', () => {

    if(displayValueTop.toString().includes('error')) {
        resetAll();
        return;
    }
    if( gotOperationSign(displayValueTop) ) {
        equalFunction();
        displayValueTop += " %";
        redraw();
    } else if( displayValueTop == '') {
        displayValueTop = displayValueBot + " %";
        displayValueBot = "";
        redraw();
    } else {
        displayValueTop = displayValueTop + " %";
        redraw();
    }
})
 
//#### equal button ÷

let equalFunction = () => {
    if(displayValueTop.toString().includes('error')) {
        resetAll();
        return;
    }

    if( gotOperationSign(displayValueTop) ) {;
        if(gotOperationSign(displayValueTop) == "+") { //derminat tipul operatiei
            if(displayValueBot=='') displayValueBot = '0'
            displayValueTop = operate( displayValueTop.toString().split(" ")[0], displayValueBot, add );
            displayValueBot = "";
            redraw();
        } else if(gotOperationSign(displayValueTop) == "-") {
            if(displayValueBot=='') displayValueBot = '0'
            displayValueTop = operate( displayValueTop.toString().split(" ")[0], displayValueBot, substract );
            displayValueBot = "";
            redraw();
        } else if (gotOperationSign(displayValueTop) == '*') {
            if(displayValueBot=='') displayValueBot = '1';
            displayValueTop = operate( displayValueTop.toString().split(" ")[0], displayValueBot, multiply );
            displayValueBot = "";
            redraw();
        } else if (gotOperationSign(displayValueTop) == '÷') {
            if(displayValueBot=='') displayValueBot = '1'
            displayValueTop = operate( displayValueTop.toString().split(" ")[0], displayValueBot, divide );
            displayValueBot = "";
            redraw();
        } else if (gotOperationSign(displayValueTop) == '%') {
            if(displayValueBot=='') displayValueBot = '1'
            displayValueTop = operate( displayValueTop.toString().split(" ")[0], displayValueBot, reminder );
            displayValueBot = "";
            redraw();
        }
    } else {
        if(displayValueTop != '') {
            alert("choose an operation first!");
            
        } else {
            displayValueTop = displayValueBot + " +";
            displayValueBot = "";
            redraw();
        }
    }
};

let equalBtn = document.getElementById("equal");
equalBtn.addEventListener( 'click', () => equalFunction());


//dot button

let dotBtn = document.getElementById("dot");
dotBtn.addEventListener('click', () => {
    if(displayValueBot.toString().length >= 1 && !displayValueBot.toString().includes(".") ) {
        displayValueBot = displayValueBot.toString() + ".";
        redraw();
    } else {

    }
});

//miscellaneous funcs

let resetAll = () => {
    displayValueBot = '';
    displayValueTop = '';
    redraw();
}

let redraw = () => {
    let display = document.getElementsByClassName("display");

    let bot = display[0].getElementsByClassName("bot");
    bot[0].innerHTML = displayValueBot;

    let top = display[0].getElementsByClassName("top");
    top[0].innerHTML = displayValueTop;
};

let digitButtonPressed = (digit) => {
    if(displayValueBot == '' || displayValueBot == '0')
        displayValueBot = digit.toString();
    else 
        displayValueBot = displayValueBot.concat(digit.toString());
    redraw()
}

let gotOperationSign = (value) => {
    value = value.toString();
    if(value.includes("+")) return "+";
    else if(value.substring(1).includes("-")) return "-";
    else if (value.includes("*")) return "*";
    else if (value.includes("÷")) return "÷";
    else if (value.includes("%")) return "%";
    return false;
}