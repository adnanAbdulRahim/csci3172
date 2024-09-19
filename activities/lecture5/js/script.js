/*Create a 'calculate' function that requires the user to provide it with two parameters to allow 
for at least four calculations (e.g., add, subtract, multiply, and divide) 
You could also try an option were the user needs to provide three parameters 
(number, number, calculation).
Use the return and or console.log( ) function to give the output of the calculation
Think of ways not only to extend the code but also judge the best structure for your code 
(e.g., control structures, nested functions, scopes)
The purpose of this activity is for you to get used to working with JS and its syntax, 
try things, be creative and have fun!*/

//two parameter calculate function
function calculateAdd(a, b){
    return a + b;
}

function calculateSubtract(a, b){
    return a - b;
}

function calculateMultiply(a, b){
    return a * b;
}

function calculateDivide(a, b){
    //if denominator = 0 => error
    if(b == 0){
        console.log("Please type a valid denominator->(b).")
        return null;
    }
    return a/b;
}

//three parameter calculate functuion
function calculate(a, b, operation){
    switch(operation){
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'multiply':
            return a*b;
        case 'divide':
            if(b == 0){
                console.log("Cannot divide by zero.")
                return null;
            }
            return a/b;
        //if something other than valid operation(add, subtract, multiply, divide) typed in.
        default:
            console.log("Please type valid operation (add, subtract, multiply, divide");
            return null;
    }
}

//testing
console.log(calculateAdd(3,5));
//returns 8
console.log(calculateSubtract(3,5));
//returns -2
console.log(calculateMultiply(3,5));
//returns 15
console.log(calculateDivide(4,2));
//retuns 2
console.log(calculateDivide(5,0));
//returns "Please type a valid denominator->(b)." and null.
console.log(calculate(3,5,'add'));
//returns 8
console.log(calculate(3,5,'subtract'));
//returns -2
console.log(calculate(3,5,'multiply'));
//returns 15
console.log(calculate(4,2,'divide'));
//returns 2
console.log(calculate(4,0,'divide'));
//returns "Cannot divide by zero."
console.log(calculate(5,4,'wow'));
//returns "Please type valid operation (add, subtract, multiply, divide" and null.