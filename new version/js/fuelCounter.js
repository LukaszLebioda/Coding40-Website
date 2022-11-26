
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

   if(route.length === 0 || price.length === 0 || averageConsumption === 0 || persons.length === 0){
      window.alert("Looks like You skipped some questions. Please review the form and make sure all the answers are provided");
    
   // } else if(age <= 1){
   //    window.alert("You just can't be that young You little cheater 😉");
       
   // } else if (age > 100) {
   //    window.alert("If You're really that mature - my congratulations! You don't need this program however. Just assume You can do anything You want 😄");


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