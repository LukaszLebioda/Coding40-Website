
let age;
let canada;
let japan;
let kenya;
let mexico;
let newZealand;
let pakistan;
let poland;

document.getElementById("buttonLegality").onclick = function(){
    
   age = document.getElementById("ageLegality").value;
   
   canada = document.getElementById("radio1")
   japan = document.getElementById("radio2")
   kenya = document.getElementById("radio3")
   mexico = document.getElementById("radio4")
   newZealand = document.getElementById("radio5")
   pakistan = document.getElementById("radio6")
   poland = document.getElementById("radio7")

   if(age.length === 0){
      window.alert("You haven't typed Your age, my dear");
    
   } else if(age <= 1){
      window.alert("Just can't be that young You little cheater 😉");
   } else if (age > 100) {
      window.alert("If You're really that mature - my congratulations! You don't need that program however. Just assume You can do anything You want 😄");

   } else if (document.querySelectorAll('input[type="radio"]:checked').length === 0) {
       alert("Sorry, but I can go any further unless You select a country...");
    
   } else if (radio1.checked) {
      document.getElementById("selectedAge").innerHTML = `Selected age: ${age}`;
      document.getElementById("selectedCountry").innerHTML = `Selected country: Canada`;

         if(age >= 65){
            document.getElementById("tableLegality1").innerHTML = '<i class="bi bi-hand-thumbs-up-fill icon-green"></i>'
            document.getElementById("tableLegality2").innerHTML = '<i class="bi bi-hand-thumbs-up-fill icon-green"></i>'
            document.getElementById("tableLegality3").innerHTML = '<i class="bi bi-hand-thumbs-up-fill icon-green"></i>'
            document.getElementById("tableLegality4").innerHTML = '<i class="bi bi-hand-thumbs-up-fill icon-green"></i>'

         } else if(age >= 18){
            document.getElementById("tableLegality1").innerHTML = '<i class="bi bi-hand-thumbs-up-fill icon-green"></i>'
            document.getElementById("tableLegality2").innerHTML = '<i class="bi bi-hand-thumbs-up-fill icon-green"></i>'
            document.getElementById("tableLegality3").innerHTML = '<i class="bi bi-hand-thumbs-up-fill icon-green"></i>'
            document.getElementById("tableLegality4").innerHTML = '<i class="bi bi-hand-thumbs-down-fill icon-red"></i>'

         } else if (age >= 10) {
            document.getElementById("tableLegality1").innerHTML = '<i class="bi bi-hand-thumbs-up-fill icon-green"></i>'
            document.getElementById("tableLegality2").innerHTML = '<i class="bi bi-hand-thumbs-down-fill icon-red"></i>'
            document.getElementById("tableLegality3").innerHTML = '<i class="bi bi-hand-thumbs-down-fill icon-red"></i>'
            document.getElementById("tableLegality4").innerHTML = '<i class="bi bi-hand-thumbs-down-fill icon-red"></i>'
         } else {
            document.getElementById("tableLegality1").innerHTML = '<i class="bi bi-hand-thumbs-down-fill icon-red"></i>'
            document.getElementById("tableLegality2").innerHTML = '<i class="bi bi-hand-thumbs-down-fill icon-red"></i>'  
            document.getElementById("tableLegality3").innerHTML = '<i class="bi bi-hand-thumbs-down-fill icon-red"></i>'  
            document.getElementById("tableLegality4").innerHTML = '<i class="bi bi-hand-thumbs-down-fill icon-red"></i>'
         }

   } else if (radio2.checked) {
      document.getElementById("selectedAge").innerHTML = `Selected age: ${age}`;
      document.getElementById("selectedCountry").innerHTML = `Selected country: Japan`;

         if(age >= 58){
            document.getElementById("tableLegality1").innerHTML = '<i class="bi bi-hand-thumbs-up-fill icon-green"></i>'
            document.getElementById("tableLegality2").innerHTML = '<i class="bi bi-hand-thumbs-up-fill icon-green"></i>'
            document.getElementById("tableLegality3").innerHTML = '<i class="bi bi-hand-thumbs-up-fill icon-green"></i>'
            document.getElementById("tableLegality4").innerHTML = '<i class="bi bi-hand-thumbs-up-fill icon-green"></i>'

         } else if(age >= 25){
            document.getElementById("tableLegality1").innerHTML = '<i class="bi bi-hand-thumbs-up-fill icon-green"></i>'
            document.getElementById("tableLegality2").innerHTML = '<i class="bi bi-hand-thumbs-up-fill icon-green"></i>'
            document.getElementById("tableLegality3").innerHTML = '<i class="bi bi-hand-thumbs-up-fill icon-green"></i>'
            document.getElementById("tableLegality4").innerHTML = '<i class="bi bi-hand-thumbs-down-fill icon-red"></i>'
         
         } else if(age >= 20){
            document.getElementById("tableLegality1").innerHTML = '<i class="bi bi-hand-thumbs-up-fill icon-green"></i>'
            document.getElementById("tableLegality2").innerHTML = '<i class="bi bi-hand-thumbs-up-fill icon-green"></i>'
            document.getElementById("tableLegality3").innerHTML = '<i class="bi bi-hand-thumbs-down-fill icon-red"></i>'
            document.getElementById("tableLegality4").innerHTML = '<i class="bi bi-hand-thumbs-down-fill icon-red"></i>'
        
         } else if (age >= 6) {
            document.getElementById("tableLegality1").innerHTML = '<i class="bi bi-hand-thumbs-up-fill icon-green"></i>'
            document.getElementById("tableLegality2").innerHTML = '<i class="bi bi-hand-thumbs-down-fill icon-red"></i>'
            document.getElementById("tableLegality3").innerHTML = '<i class="bi bi-hand-thumbs-down-fill icon-red"></i>'
            document.getElementById("tableLegality4").innerHTML = '<i class="bi bi-hand-thumbs-down-fill icon-red"></i>'
         } else {
            document.getElementById("tableLegality1").innerHTML = '<i class="bi bi-hand-thumbs-down-fill icon-red"></i>'
            document.getElementById("tableLegality2").innerHTML = '<i class="bi bi-hand-thumbs-down-fill icon-red"></i>'  
            document.getElementById("tableLegality3").innerHTML = '<i class="bi bi-hand-thumbs-down-fill icon-red"></i>'  
            document.getElementById("tableLegality4").innerHTML = '<i class="bi bi-hand-thumbs-down-fill icon-red"></i>'
         }
   
      } else if (radio3.checked) {
         document.getElementById("selectedAge").innerHTML = `Selected age: ${age}`;
         document.getElementById("selectedCountry").innerHTML = `Selected country: Kenya`;
   
            if(age >= 60){
               document.getElementById("tableLegality1").innerHTML = '<i class="bi bi-hand-thumbs-up-fill icon-green"></i>'
               document.getElementById("tableLegality2").innerHTML = '<i class="bi bi-hand-thumbs-up-fill icon-green"></i>'
               document.getElementById("tableLegality3").innerHTML = '<i class="bi bi-hand-thumbs-up-fill icon-green"></i>'
               document.getElementById("tableLegality4").innerHTML = '<i class="bi bi-hand-thumbs-up-fill icon-green"></i>'
   
            } else if(age >= 18){
               document.getElementById("tableLegality1").innerHTML = '<i class="bi bi-hand-thumbs-up-fill icon-green"></i>'
               document.getElementById("tableLegality2").innerHTML = '<i class="bi bi-hand-thumbs-up-fill icon-green"></i>'
               document.getElementById("tableLegality3").innerHTML = '<i class="bi bi-hand-thumbs-up-fill icon-green"></i>'
               document.getElementById("tableLegality4").innerHTML = '<i class="bi bi-hand-thumbs-down-fill icon-red"></i>'
            
            } else if (age >= 5) {
               document.getElementById("tableLegality1").innerHTML = '<i class="bi bi-hand-thumbs-up-fill icon-green"></i>'
               document.getElementById("tableLegality2").innerHTML = '<i class="bi bi-hand-thumbs-down-fill icon-red"></i>'
               document.getElementById("tableLegality3").innerHTML = '<i class="bi bi-hand-thumbs-down-fill icon-red"></i>'
               document.getElementById("tableLegality4").innerHTML = '<i class="bi bi-hand-thumbs-down-fill icon-red"></i>'
            } else {
               document.getElementById("tableLegality1").innerHTML = '<i class="bi bi-hand-thumbs-down-fill icon-red"></i>'
               document.getElementById("tableLegality2").innerHTML = '<i class="bi bi-hand-thumbs-down-fill icon-red"></i>'  
               document.getElementById("tableLegality3").innerHTML = '<i class="bi bi-hand-thumbs-down-fill icon-red"></i>'  
               document.getElementById("tableLegality4").innerHTML = '<i class="bi bi-hand-thumbs-down-fill icon-red"></i>'
            }

         } else if (radio4.checked) {
            document.getElementById("selectedAge").innerHTML = `Selected age: ${age}`;
            document.getElementById("selectedCountry").innerHTML = `Selected country: Mexico`;
      
               if(age >= 65){
                  document.getElementById("tableLegality1").innerHTML = '<i class="bi bi-hand-thumbs-up-fill icon-green"></i>'
                  document.getElementById("tableLegality2").innerHTML = '<i class="bi bi-hand-thumbs-up-fill icon-green"></i>'
                  document.getElementById("tableLegality3").innerHTML = '<i class="bi bi-hand-thumbs-up-fill icon-green"></i>'
                  document.getElementById("tableLegality4").innerHTML = '<i class="bi bi-hand-thumbs-up-fill icon-green"></i>'
      
               } else if(age >= 35){
                  document.getElementById("tableLegality1").innerHTML = '<i class="bi bi-hand-thumbs-up-fill icon-green"></i>'
                  document.getElementById("tableLegality2").innerHTML = '<i class="bi bi-hand-thumbs-up-fill icon-green"></i>'
                  document.getElementById("tableLegality3").innerHTML = '<i class="bi bi-hand-thumbs-up-fill icon-green"></i>'
                  document.getElementById("tableLegality4").innerHTML = '<i class="bi bi-hand-thumbs-down-fill icon-red"></i>'
               
               } else if(age >= 18){
                  document.getElementById("tableLegality1").innerHTML = '<i class="bi bi-hand-thumbs-up-fill icon-green"></i>'
                  document.getElementById("tableLegality2").innerHTML = '<i class="bi bi-hand-thumbs-up-fill icon-green"></i>'
                  document.getElementById("tableLegality3").innerHTML = '<i class="bi bi-hand-thumbs-down-fill icon-red"></i>'
                  document.getElementById("tableLegality4").innerHTML = '<i class="bi bi-hand-thumbs-down-fill icon-red"></i>'
              
               } else if (age >= 7) {
                  document.getElementById("tableLegality1").innerHTML = '<i class="bi bi-hand-thumbs-up-fill icon-green"></i>'
                  document.getElementById("tableLegality2").innerHTML = '<i class="bi bi-hand-thumbs-down-fill icon-red"></i>'
                  document.getElementById("tableLegality3").innerHTML = '<i class="bi bi-hand-thumbs-down-fill icon-red"></i>'
                  document.getElementById("tableLegality4").innerHTML = '<i class="bi bi-hand-thumbs-down-fill icon-red"></i>'
               } else {
                  document.getElementById("tableLegality1").innerHTML = '<i class="bi bi-hand-thumbs-down-fill icon-red"></i>'
                  document.getElementById("tableLegality2").innerHTML = '<i class="bi bi-hand-thumbs-down-fill icon-red"></i>'  
                  document.getElementById("tableLegality3").innerHTML = '<i class="bi bi-hand-thumbs-down-fill icon-red"></i>'  
                  document.getElementById("tableLegality4").innerHTML = '<i class="bi bi-hand-thumbs-down-fill icon-red"></i>'
               }
            } else if (radio5.checked) {
               document.getElementById("selectedAge").innerHTML = `Selected age: ${age}`;
               document.getElementById("selectedCountry").innerHTML = `Selected country: New Zealand`;
         
                  if(age >= 65){
                     document.getElementById("tableLegality1").innerHTML = '<i class="bi bi-hand-thumbs-up-fill icon-green"></i>'
                     document.getElementById("tableLegality2").innerHTML = '<i class="bi bi-hand-thumbs-up-fill icon-green"></i>'
                     document.getElementById("tableLegality3").innerHTML = '<i class="bi bi-hand-thumbs-up-fill icon-green"></i>'
                     document.getElementById("tableLegality4").innerHTML = '<i class="bi bi-hand-thumbs-up-fill icon-green"></i>'
         
                  } else if(age >= 18){
                     document.getElementById("tableLegality1").innerHTML = '<i class="bi bi-hand-thumbs-up-fill icon-green"></i>'
                     document.getElementById("tableLegality2").innerHTML = '<i class="bi bi-hand-thumbs-up-fill icon-green"></i>'
                     document.getElementById("tableLegality3").innerHTML = '<i class="bi bi-hand-thumbs-up-fill icon-green"></i>'
                     document.getElementById("tableLegality4").innerHTML = '<i class="bi bi-hand-thumbs-down-fill icon-red"></i>'
                  
                  } else if (age >= 14) {
                     document.getElementById("tableLegality1").innerHTML = '<i class="bi bi-hand-thumbs-up-fill icon-green"></i>'
                     document.getElementById("tableLegality2").innerHTML = '<i class="bi bi-hand-thumbs-down-fill icon-red"></i>'
                     document.getElementById("tableLegality3").innerHTML = '<i class="bi bi-hand-thumbs-down-fill icon-red"></i>'
                     document.getElementById("tableLegality4").innerHTML = '<i class="bi bi-hand-thumbs-down-fill icon-red"></i>'
                  } else {
                     document.getElementById("tableLegality1").innerHTML = '<i class="bi bi-hand-thumbs-down-fill icon-red"></i>'
                     document.getElementById("tableLegality2").innerHTML = '<i class="bi bi-hand-thumbs-down-fill icon-red"></i>'  
                     document.getElementById("tableLegality3").innerHTML = '<i class="bi bi-hand-thumbs-down-fill icon-red"></i>'  
                     document.getElementById("tableLegality4").innerHTML = '<i class="bi bi-hand-thumbs-down-fill icon-red"></i>'
                  }
               } else if (radio5.checked) {
               document.getElementById("selectedAge").innerHTML = `Selected age: ${age}`;
               document.getElementById("selectedCountry").innerHTML = `Selected country: New Zealand`;
         
                  if(age >= 65){
                     document.getElementById("tableLegality1").innerHTML = '<i class="bi bi-hand-thumbs-up-fill icon-green"></i>'
                     document.getElementById("tableLegality2").innerHTML = '<i class="bi bi-hand-thumbs-up-fill icon-green"></i>'
                     document.getElementById("tableLegality3").innerHTML = '<i class="bi bi-hand-thumbs-up-fill icon-green"></i>'
                     document.getElementById("tableLegality4").innerHTML = '<i class="bi bi-hand-thumbs-up-fill icon-green"></i>'
         
                  } else if(age >= 18){
                     document.getElementById("tableLegality1").innerHTML = '<i class="bi bi-hand-thumbs-up-fill icon-green"></i>'
                     document.getElementById("tableLegality2").innerHTML = '<i class="bi bi-hand-thumbs-up-fill icon-green"></i>'
                     document.getElementById("tableLegality3").innerHTML = '<i class="bi bi-hand-thumbs-up-fill icon-green"></i>'
                     document.getElementById("tableLegality4").innerHTML = '<i class="bi bi-hand-thumbs-down-fill icon-red"></i>'
                  
                  } else if (age >= 14) {
                     document.getElementById("tableLegality1").innerHTML = '<i class="bi bi-hand-thumbs-up-fill icon-green"></i>'
                     document.getElementById("tableLegality2").innerHTML = '<i class="bi bi-hand-thumbs-down-fill icon-red"></i>'
                     document.getElementById("tableLegality3").innerHTML = '<i class="bi bi-hand-thumbs-down-fill icon-red"></i>'
                     document.getElementById("tableLegality4").innerHTML = '<i class="bi bi-hand-thumbs-down-fill icon-red"></i>'
                  } else {
                     document.getElementById("tableLegality1").innerHTML = '<i class="bi bi-hand-thumbs-down-fill icon-red"></i>'
                     document.getElementById("tableLegality2").innerHTML = '<i class="bi bi-hand-thumbs-down-fill icon-red"></i>'  
                     document.getElementById("tableLegality3").innerHTML = '<i class="bi bi-hand-thumbs-down-fill icon-red"></i>'  
                     document.getElementById("tableLegality4").innerHTML = '<i class="bi bi-hand-thumbs-down-fill icon-red"></i>'
                  }
               } else if (radio6.checked) {
                  document.getElementById("selectedAge").innerHTML = `Selected age: ${age}`;
                  document.getElementById("selectedCountry").innerHTML = `Selected country: Poland`;
            
                     if(age >= 65){
                        document.getElementById("tableLegality1").innerHTML = '<i class="bi bi-hand-thumbs-up-fill icon-green"></i>'
                        document.getElementById("tableLegality2").innerHTML = '<i class="bi bi-hand-thumbs-up-fill icon-green"></i>'
                        document.getElementById("tableLegality3").innerHTML = '<i class="bi bi-hand-thumbs-up-fill icon-green"></i>'
                        document.getElementById("tableLegality4").innerHTML = '<i class="bi bi-gender-female"></i><i class="bi bi-hand-thumbs-down-fill icon-red"></i> <i class="bi bi-gender-male"></i><i class="bi bi-hand-thumbs-up-fill icon-green"></i>'
            
                     } else if(age >= 60){
                        document.getElementById("tableLegality1").innerHTML = '<i class="bi bi-hand-thumbs-up-fill icon-green"></i>'
                        document.getElementById("tableLegality2").innerHTML = '<i class="bi bi-hand-thumbs-up-fill icon-green"></i>'
                        document.getElementById("tableLegality3").innerHTML = '<i class="bi bi-hand-thumbs-up-fill icon-green"></i>'
                        document.getElementById("tableLegality4").innerHTML = '<i class="bi bi-gender-female"></i><i class="bi bi-hand-thumbs-up-fill icon-green"></i> <i class="bi bi-gender-male"></i><i class="bi bi-hand-thumbs-down-fill icon-red"></i>'
                     
                     } else if (age >= 35) {
                        document.getElementById("tableLegality1").innerHTML = '<i class="bi bi-hand-thumbs-up-fill icon-green"></i>'
                        document.getElementById("tableLegality2").innerHTML = '<i class="bi bi-hand-thumbs-up-fill icon-green"></i>'
                        document.getElementById("tableLegality3").innerHTML = '<i class="bi bi-hand-thumbs-up-fill icon-green"></i>'
                        document.getElementById("tableLegality4").innerHTML = '<i class="bi bi-hand-thumbs-down-fill icon-red"></i>'
                     } else if (age >= 18) {
                        document.getElementById("tableLegality1").innerHTML = '<i class="bi bi-hand-thumbs-up-fill icon-green"></i>'
                        document.getElementById("tableLegality2").innerHTML = '<i class="bi bi-hand-thumbs-up-fill icon-green"></i>'
                        document.getElementById("tableLegality3").innerHTML = '<i class="bi bi-hand-thumbs-down-fill icon-red"></i>'
                        document.getElementById("tableLegality4").innerHTML = '<i class="bi bi-hand-thumbs-down-fill icon-red"></i>'
                     } else if (age >= 7) {
                        document.getElementById("tableLegality1").innerHTML = '<i class="bi bi-hand-thumbs-up-fill icon-green"></i>'
                        document.getElementById("tableLegality2").innerHTML = '<i class="bi bi-hand-thumbs-down-fill icon-red"></i>'
                        document.getElementById("tableLegality3").innerHTML = '<i class="bi bi-hand-thumbs-down-fill icon-red"></i>'
                        document.getElementById("tableLegality4").innerHTML = '<i class="bi bi-hand-thumbs-down-fill icon-red"></i>'
                     } else {
                        document.getElementById("tableLegality1").innerHTML = '<i class="bi bi-hand-thumbs-down-fill icon-red icon-red"></i>'
                        document.getElementById("tableLegality2").innerHTML = '<i class="bi bi-hand-thumbs-down-fill icon-red icon-red"></i>'  
                        document.getElementById("tableLegality3").innerHTML = '<i class="bi bi-hand-thumbs-down-fill icon-red icon-red"></i>'  
                        document.getElementById("tableLegality4").innerHTML = '<i class="bi bi-hand-thumbs-down-fill icon-red icon-red"></i>'
                     }
}
}