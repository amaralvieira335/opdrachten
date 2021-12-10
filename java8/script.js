

// opdracht 100 treu or false

const controle = function( number1 ) {
    
    const sum = number1 ;
    
    if (sum > 100) {


        return "treu"
        

    }else {
        return "false"
    }
 
    
};


const result2 = controle(1100,0);
console.log(result2);

// opdracht Brenda Bouncer

const brenda = function( number1, number2 ,number3) {
    
    const age = number1;
    const maxPeep = number2  ;
    const curPeep = number3;
    

    

if (age <18) {
    

    return "this is a club for adults"
    
}if (curPeep < maxPeep) {

        return "come in"
    }else {
        return "it's too busy now, come back later"
    }
    
    
};

const result = brenda(19,100,99);
console.log(result);      


//average calculater

function average() {
    var length = arguments.length;
    var sum = 0;
    
    for(var i=0; i<length; i++) {
      sum = sum + arguments[i];
    }
    
    return sum/length ;
  }
  
  console.log (Math.round (average (10,72,60,40,40))) ;

  

