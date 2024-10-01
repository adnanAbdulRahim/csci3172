
//Task 1
document.getElementById('selectDay').addEventListener('change', function(){
    
    var daySelected = this.value;
    var bgColor = document.getElementById("divSelect");
    //testing
    //console.log(daySelected);
    switch (daySelected) {
        case "Monday":
            bgColor.style.backgroundColor = "red";
            break;
        case "Tuesday":
            bgColor.style.backgroundColor = "blue";
            break;
        case "Wednesday":
            bgColor.style.backgroundColor = "green";
            break;
        case "Thursday":
            bgColor.style.backgroundColor = "pink";
            break;
        case "Friday":
            bgColor.style.backgroundColor = "lightblue";
            break;
        case "Saturday":
            bgColor.style.backgroundColor = "lightgreen";
            break;
        case "Sunday":
            bgColor.style.backgroundColor = "darkred";
            break;
        default:
            bgColor.style.backgroundColor = "white";
            break;
    }
})

//Task 2

function getNum(){
    var number = document.getElementById('number').value;
    return parseInt(number);
}

function numberCheck(){
    var evenOdd='';
    var range='';
    var primeComposite = "prime";

    var num = getNum();
    console.log(num);

    //evenOdd
    if(num % 2 === 0){
        evenOdd = 'even';
    }else{
        evenOdd = 'odd';
    }

    //primeComposite
    //rules for prime: not 1
    //not divisible by anything but 1 and itself.

    //discarding 1
    if(num === 1){
        primeComposite = "non prime/composite";
    }else if(num > 1){
        //checking for % 0 between 2 and half of the num.
        for(let i = 2; i <= num/2; i++){
            if(num % i === 0){
                primeComposite = "composite";
                break;
            }
            
        }
    }

    //range
    if(num > 100){
        range = "greater than 100.";
    }else if(num > 75){
        range = "greater than 75 and gess that or equal to 100.";
    }else if(num > 50){
        range = "greater than 50 and gess than or equal to 75";
    }else{
        range = "less than or equal to 50";
    }

    alert("The number entered is an " + evenOdd + " " + primeComposite + " number " + range);
}