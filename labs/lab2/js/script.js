console.log("Hello World!")

//a.
function areaOfCircle(radius){
    //What is the scope of a const variable?
    //const has scope within the block and cannot be re-assigned;
    //consts have to be given a value when declared.
    const pie = 3.14;
    var area = pie*radius**2;
    return area;
}
console.log(areaOfCircle(6));

//b.
function mathAdd(a, b){
    var sum = a + b;
    return sum; 
}
function mathSubtract(a, b){
    var sum = a - b;
    return sum; 
}
function mathMultiply(a, b){
    var sum = a * b;
    return sum; 
}
function mathDivide(a, b){
    return (b === 0) ? "Cannot divide 0" : a /b;
}
console.log(mathAdd(6, 2));
console.log(mathSubtract(6, 2));
console.log(mathMultiply(6, 2));
console.log(mathDivide(6, 2));
console.log(mathDivide(6, 0));

//c.
function areaOfRectangle(length, width){

    var area = length * width;
    return area;
}
console.log(areaOfRectangle(20, 15));
//When were the let and const keywords added to JavaScript?
//ES6(2015)
//Sources:
//https://www.w3schools.com/js/js_let.asp#:~:text=Before%20ES6%20(2015)%2C%20JavaScript,JavaScript%20keywords%3A%20let%20and%20const%20.
//https://www.w3schools.com/js/js_const.asp