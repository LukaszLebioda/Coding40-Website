
let route;
let price;
let averageConsumption;
let persons;

let totalConsumption;

let resultUnrounded;
let resultRounded;

document.getElementById("buttonGasoline").onclick = function(){
    
   route = document.getElementById("routeGasoline").value;
   price = document.getElementById("priceGasoline").value;
   averageConsumption = document.getElementById("averageConsumptionGasoline").value;
   persons = document.getElementById("personsGasoline").value;

   if(route === "" || price === ""|| averageConsumption === "" || persons === ""){
      window.alert("Looks like You skipped some questions. Please review the form and make sure all the answers are provided");
    
   } else if (route <= 0 || price <= 0 || averageConsumption <= 0 || persons <= 0) {
       window.alert("Some answers You've provided are zero(s) or number(s) below zero. I'm sure You've done this undeliberately :) Please correct this however, because I want to move on with all the counting.");
   } else {
      
      totalConsumption = (route * averageConsumption) / 100

      resultUnrounded = totalConsumption * price / persons
      resultRounded = resultUnrounded.toFixed(2)
       
        document.getElementById("providedRoute").innerHTML = `${route} km`
        
        document.getElementById("providedPrice").innerHTML = `${price} (e.g. EUR)` 
        document.getElementById("providedAverageConsumption").innerHTML = `${averageConsumption} / 100km`  
        document.getElementById("providedPersonsNumber").innerHTML = `${persons} person(s)`
        document.getElementById("resultGasoline").innerHTML = `${resultRounded} (e.g. EUR / person(s))`

        }
}