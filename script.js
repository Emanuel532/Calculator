let add = (a, b) => a + b;
let substract = (a,b) => a -b;
let multiply = (a, b) => a*b;
let divide = (a, b) => { if(b != 0) return a/b; else return 'error' };
let operate = (no1, no2, operation) => operation(no1, no2);
