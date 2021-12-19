//muliplication



const number =  9;


for(let i = 1; i <= 10; i++) {

    // multiply i with number
    const result = i * number;

    
    console.log(`${number} * ${i} = ${result}`);
}


//bonus
for(let i = 1; i<=10; i++){
    for(let j = 1; j<=10; j++) {
        console.log (`${i} * ${j} = ${i * j}`);
    }
}

/* program to generate a multiplication table

// take input from the user
const number = parseInt(prompt('Enter an integer: '));

//creating a multiplication table
for(let i = 1; i <= 10; i++) {

    // multiply i with number
    const result = i * number;

    // display the result
    console.log(`${number} * ${i} = ${result}`);
}*/

