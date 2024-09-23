console.log("Hello World!")

//a.
function areaOfCircle(radius){
    //What is the scope of a const variable?
    //const has scope within the block and cannot be re-assigned;
    const pie = 3.14;
    var area = pie*radius**2;
    return area;
}
console.log(areaOfCircle(6));

//b.
function skibidiMath(a, b){
    var results = {
        addition: a + b,
        subtraction: a - b,
        multiplication: a * b,
        division: b === 0 ?"Cannot divide by 0": a / b
    }
    return results;
}
console.log(skibidiMath(6,2));
console.log(skibidiMath(6,0));

//c.
function areaOfRectangle(length, width){

    var area = length * width;
    return area;
}
console.log(areaOfRectangle(20, 15));
//When were the let and const keywords added to JavaScript?
//2015
//Source:https://www.w3schools.com/js/js_let.asp#:~:text=Before%20ES6%20(2015)%2C%20JavaScript,JavaScript%20keywords%3A%20let%20and%20const%20.