// 1ste Function

/*const leefTijd = function( number ) {
    
    const persoon = number ;
    
    if (persoon >= 18) {


        return "treu"
        

    }else {
        return "false"
    }
 
   
};*/


//2de Function

const hoeOud = function (number1) {

    if (number1 >= 18) {
        return "true"
    } else {
        return "false"
    }
    return number1;
};

console.log(hoeOud(19))


const groet = function (number) {

    const leefTijd = hoeOud(number);

    if (number >= 18) {
        return "Hey you"
    } else {
        return "Hey Kiddo"
    }

    return number;
};

console.log(groet(19));

//btw


const keer = function(number) {
    console.log("btwprijs");
    return number * 1.21;
};

const doComplexCalculation = function(number) {
    console.log("vermenigvuldig met btw percentage");
    const btw = keer(number);
    return btw;
};

console.log(doComplexCalculation(5));


//basisprijs berekenen

const gedeelt = function(number) {
    console.log("basisprijs");
    return number / 1.21;
};

const min = function(number) {
    console.log("btw percentage");
    return number - gedeelt;
};

const terugBerekenen = function(number) {
    console.log("trek af btw percentage");
    const gedeeltNumber = gedeelt(number);
    const minNumber = min(number);
    return gedeeltNumber;
    return minNumber;
};

console.log(terugBerekenen(6.05));

