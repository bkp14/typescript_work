//A local scope means a variable can only be accessed inside the function or block where it was declared.
function add() {
    let num1 = 10;
    let num2 = 20;

    console.log(num1 + num2);
}

add();

//console.log(num1); 
if (true) {
    let age = 25;

    console.log(age); 
}

