function raadNummer() {

  var randomNum = Math.floor(Math.random() * 26) + 1;

  console.log(randomNum);


  alert("Welcome\nWhats your name?");

  var name = window.prompt("Enter your name: ");
  alert("Hey " + name);

  var geuss;
  geuss = prompt("vul nummer in tussen 1 en 25 je mag 5x raden");

  var counter = 0;
  var Maxtries = 3;


  /*for(i =0; i<10; i++){
    
  }*/
  while (geuss != randomNum) {
    var geuss = prompt("Unfortunately, that is not correct! you have tried " + counter + "times");

    counter += 1;

    if (counter > Maxtries) {
      alert("game over " + name);
      break;
    }

    if (geuss == randomNum) {
      window.alert("you`ve won");
      var geuss = alert("bye bye" + name + " see you");
      break;

    } /*else {
  geuss = prompt("try again")

}*/
  }



}

