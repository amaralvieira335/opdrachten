const jeLeeftijd = 18;



if (jeLeeftijd > 18) {
    console.log("je bent ouder dan 18 je mag naar binnen<br>");


} if (jeLeeftijd == 18) {
    console.log("je bent 18 je mag naar binnen <br>");



} else if (jeLeeftijd < 18) {
    console.log("het spijt me zeer maar je bent niet oud genoeg daarom wordt je niet toegelaten in ons pub<br>");
}

const age = 17;

if (age >= 18 && age <= 25) {
    console.log("je krijgt 50% korting op je drankje")

} else if (age < 18 || age > 25) {
    console.log(" je krijgt geen korting op drank")
}

const firstName = "Bram"

if (firstName == "Bram" || firstName == "Sarah") {
    console.log("je krijgt een gratis biertje")

}/* else if (firstName !="Bram" || firstName !="Sarah");{
    console.log ("je krijgt geen gratis biertje")
}*/

const totalAmount = 110;

if (totalAmount >= 25 && totalAmount <= 49) {
    console.log(" je krijgt veggie bitterballen")

} if (totalAmount >= 50 && totalAmount <= 99) {
    console.log(" je krijgt een portie nachos")

} if (totalAmount >= 100) {
    console.log(" je krijgt een gratis fles champagne")
}


const isvrouw = true;




if (isvrouw) {
    console.log("je mag naar binnen het is ladies night<br>")

} else {
    console.log("je kan niet naar binnen want het is ladies night<br>")
}

const driverStatus = "bob";


if (driverStatus === "dronkenlap") {
    console.log(" jij bent de bob je mag rijden")
} else {
    console.log("je mag niet rijden want je hebt alcohol gedronken")
}