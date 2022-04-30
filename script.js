let add = (a, b) => a + b;
let substract = (a,b) => a -b;
let multiply = (a, b) => a*b;
let divide = (a, b) => { if(b != 0) return a/b; else return 'error' };
let operate = (no1, no2, operation) => operation(no1, no2);
let displayValueBot = "";

let redraw = () => {
    let display = document.getElementsByClassName("display");
    
    let bot = display[0].getElementsByClassName("bot");
    bot[0].innerHTML = displayValueBot;
};

//number buttons:
for(let i = 0; i <= 9; i++) {
    let button = document.getElementById(i.toString());
    button.addEventListener( 'click', () => digitButtonPressed(i));
}

//delete button
let ACBtn = document.getElementById("AC");
ACBtn.addEventListener( 'click', () => {
    displayValueBot = '0';
    redraw();
})


let digitButtonPressed = (digit) => {
    if(displayValueBot == '' || displayValueBot == '0')
        displayValueBot = digit.toString();
    else 
        displayValueBot = displayValueBot.concat(digit.toString());
    redraw()
}