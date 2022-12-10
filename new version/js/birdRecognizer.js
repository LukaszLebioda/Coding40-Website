let radios = document.querySelectorAll('.divBirdRadioButton input[type="radio"]');
let button = document.querySelector('#buttonBirds');
const bp = []; // stands for bird permutation

button.addEventListener('click', () => {
    if(document.querySelectorAll('.divBirdRadioButton input[type="radio"]:checked').length < 6) {
        alert("One or more categories remain unchecked. Please revisit the questions");
    } else {

	    for (let radio of radios) {
		    if (radio.checked) {
                bp.push(radio.value);
                document.getElementById("buttonBirds").disabled = true; 
                console.log(bp);
                


                    // 1 trznadel
                    if((bp.includes("1") || bp.includes("2") || bp.includes("3") || bp.includes("4")) && (bp.includes("7") || bp.includes("9")) && bp.includes("14") && (bp.includes("22") || bp.includes("25")) && (bp.includes("28") || bp.includes("31")) && (bp.includes("37") || bp.includes("42") || bp.includes("43"))) 
                        {
                        document.getElementById("resultBird1").innerHTML = "Yellowhammer (trznadel)";
                        document.getElementById("resultBird2").innerHTML = "Sings persistently in the middle of hot, peaceful summer day. Supposedly inspired Beethoven to compose the 5th Symphony."
                        document.getElementById("resultBird3").innerHTML = "<img src='./img/birds/trznadel.jpg'>"
                        document.getElementById("resultBird4").innerHTML = "<br>Photo by Andreas Trepte, www.avi-fauna.info"
                        }
                        
                    // 2 szpak
                    // if((bp.includes("1") || bp.includes("2") || bp.includes("3")) && (bp.includes("9") || bp.includes("11") || bp.includes("12")) && bp.includes("14") && bp.includes("19") && (bp.includes("28") || bp.includes("29") || bp.includes("32") || bp.includes("33")) && (bp.includes("37") || bp.includes("40") || bp.includes("42") || bp.includes("43"))) 
                    //     {
                    //     document.getElementById("resultBirdName7").innerHTML = "Starling (szpak)";
                    //     document.getElementById("resultBirdDesc7").innerHTML = "Produces crazy electronic sounds an is able to perfectly imitate other birds, even simple human words."
                    //     document.getElementById("resultBirdPhoto7").innerHTML = "<img src='./img/birds/szpak.jpg'>"
                    //     document.getElementById("resultBirdFigure7").innerHTML = "<br>Photo by Frank Schulenburg, CC BY-SA 4.0"
                    //     }

                    // 3 kos
                    // if((bp.includes("1") || bp.includes("2") || bp.includes("3")) && (bp.includes("9") || bp.includes("11") || bp.includes("12")) && bp.includes("14") && bp.includes("19") && (bp.includes("28") || bp.includes("29") || bp.includes("32") || bp.includes("33")) && (bp.includes("37") || bp.includes("40") || bp.includes("42") || bp.includes("43"))) 
                    //     {
                    //     document.getElementById("resultBird9").innerHTML = "Kos";
                    //     document.getElementById("resultBird10").innerHTML = "Produces crazy electronic sounds an is able to perfectly imitate other birds, even simple human words."
                    //     document.getElementById("resultBird11").innerHTML = "<img src='./img/birds/szpak.jpg'>"
                    //     document.getElementById("resultBird12").innerHTML = "<br>Photo by Frank Schulenburg, CC BY-SA 4.0"    
                    //     }

                    // if (){
                    //     document.getElementById("resultBird1").innerHTML = "Sorry, I couldn't find any match :(";
                    //     console.log("Something went wrong");
                    // }
                
		    }
	    }
    }
})


