let add = (a, b) => (parseInt(a) + parseInt(b)).toString();
let substract = (a,b) => (parseInt(a) - parseInt(b)).toString();
let multiply = (a, b) => a*b;
let divide = (a, b) => { if(b != 0) return a/b; else return 'error' };
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

//delete button
let ACBtn = document.getElementById("AC");
ACBtn.addEventListener( 'click', () => {
    displayValueBot = '0';
    displayValueTop = '';
    redraw();
})

//addition button
let addBtn = document.getElementById("addition");
addBtn.addEventListener( 'click', () => {
    
    if( gotOperationSign(displayValueTop) ) {
        equalFunction();
        displayValueTop += " +";
        redraw();
    } else if( displayValueTop == '') {
        displayValueTop = displayValueBot + " +";
        displayValueBot = "0";
        redraw();
    } else {
        displayValueTop = displayValueTop + " +";
        redraw();
    }
})

//substraction button
let substractBtn = document.getElementById("substraction");
substractBtn.addEventListener( 'click', () => {
    
    if( gotOperationSign(displayValueTop) ) {
        equalFunction();
        displayValueTop += " -";
        redraw();
    } else if( displayValueTop == '') {
        displayValueTop = displayValueBot + " -";
        displayValueBot = "0";
        redraw();
    } else {
        displayValueTop = displayValueTop + " -";
        redraw();
    }
})

//equal button

let equalFunction = () => {
    if( gotOperationSign(displayValueTop) ) {
        if(displayValueBot=='') displayValueBot = '0';
        if(gotOperationSign(displayValueTop) == "+") {
            displayValueTop = operate( displayValueTop.split(" ")[0], displayValueBot, add );
            displayValueBot = "";
            redraw();
        } else if(gotOperationSign(displayValueTop) == "-") {
            displayValueTop = operate( displayValueTop.split(" ")[0], displayValueBot, substract );
            displayValueBot = "";
            redraw();
        }
    } else {
        if(displayValueTop != '') {
            alert("choose an operation first!");
            
        } else {
            displayValueTop = displayValueBot + " +";
            displayValueBot = "0";
            redraw();
        }
    }
};

let equalBtn = document.getElementById("equal");
equalBtn.addEventListener( 'click', () => equalFunction());


//miscellaneous funcs

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
    else if (value.includes("/")) return "/";
    else if (value.includes("÷")) return "÷";
    return false;
}