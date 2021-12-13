//decleration

function calculateSquare (number1,number2,) 
{
    const firstSquare = number1 * number1 ;
    const secondSquare = number2 * number2;
    const firstSum = firstSquare + secondSquare;
    const thirdSquare = firstSum * firstSum;
    
    return thirdSquare;
};

console.log(calculateSquare(2, 2,)); 



// Function Expression

const calculateSquare1 = function(number1,number2,) 
{
    const firstSquare = number1 * number1 ;
    const secondSquare = number2 * number2;
    const firstSum = firstSquare + secondSquare;
    const thirdSquare = firstSum * firstSum;
    
    return thirdSquare;
};

console.log(calculateSquare1(2, 3,)); 

//Arrow function

const calculateSquare2 = (number1,number2,) => 
{
    const firstSquare = number1 * number1 ;
    const secondSquare = number2 * number2;
    const firstSum = firstSquare + secondSquare;
    const thirdSquare = firstSum * firstSum;
    
    return thirdSquare;
};

console.log(calculateSquare2(4, 2,)); 

