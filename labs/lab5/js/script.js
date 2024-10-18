function calculateNumbers(){
    const input = document.getElementById('numbers').value;
    //Converting the recieved array to an int array.
    const stringArray = input.split(',');
    const numbersArray = [];

    stringArray.forEach(element => {
        const number = parseInt(element.trim());
        numbersArray.push(number);
    });
    //test
    //console.log(numbersArray);

    //storing results.
    let primeCount = 0;
    let compositeCount = 0;
    let neitherCount = 0;

    //for-loop
    for (let i = 0; i < numbersArray.length; i++) {
        const num = numbersArray[i];
        if (num == 1) {
            neitherCount++;
        } else if (isPrime(num)) {
            primeCount++;
        } else {
            compositeCount++;
        }
    }

    document.getElementById('for-primeNum').textContent = primeCount;
    document.getElementById('for-compositeNum').textContent = compositeCount;
    document.getElementById('for-neitherNum').textContent = neitherCount;
    
    //reset count
    primeCount = 0;
    compositeCount = 0;
    neitherCount = 0;

    //forEach-loop
    numbersArray.forEach(num => {
        if(num == 1){
            neitherCount++;
        }else if(isPrime(num)){
            primeCount++;
        }else{
            compositeCount++;
        }
    })

    document.getElementById('forEach-primeNum').textContent = primeCount;
    document.getElementById('forEach-compositeNum').textContent = compositeCount;
    document.getElementById('forEach-neitherNum').textContent = neitherCount;

     //reset count
     primeCount = 0;
     compositeCount = 0;
     neitherCount = 0;

    //map-loop
    numbersArray.map(num => {
        if (num == 1) {
            neitherCount++;
        } else if (isPrime(num)) {
            primeCount++;
        } else {
            compositeCount++;
        }
    });
 
    document.getElementById('map-primeNum').textContent = primeCount;
    document.getElementById('map-compositeNum').textContent = compositeCount;
    document.getElementById('map-neitherNum').textContent = neitherCount;
}

function isPrime(num){
    if(num <= 1){
        return false;
    }else{
        for(let i = 2; i <= num /2; i++){
            if(num % i === 0){
                return false;
            }
        }
    }
    return true;
}