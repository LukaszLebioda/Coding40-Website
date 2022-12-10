// create element, create attribute, create css value, text content
// if resultbird == "" dsiplay message

const kos = "Blackbird (kos)";
const kosDescription = "dfgdfgdfg";
const kosRights = "Photo by Zeynel Cebeci, CC BY-SA 4.0"

const szpak = "Starling (szpak)";
const szpakDescription = "Produces crazy electronic sounds an is able to perfectly imitate other birds, even simple human words.";
const szpakRights = "Photo by Frank Schulenburg, CC BY-SA 4.0";

const trznadel = "Yellowhammer (trznadel)";
const trznadelDescription = "Sings persistently in the middle of hot, peaceful summer day. Supposedly inspired Beethoven to compose the 5th Symphony.";
const trznadelRights = "Photo by Andreas Trepte, www.avi-fauna.info";



let radios = document.querySelectorAll('.divBirdRadioButton input[type="radio"]');
let button = document.querySelector('#buttonBirds');
const bp = []; // stands for bird permutation

// let birdDiv;  // for general bird div
// let birdHeadingName; // for bird name
// // let birdHeadingSpan1; // for span in bird name
// // let birdHeading4; // for bird name
// let birdHeadingDesc; // for bird description
// let birdHeadingSpan2; // for span in bird description
// let birdHeadingSpan3; // for image
// let birdHeading6; // for photo rights

{/* <h4><span id="resultBirdName2" style="color: blue"></span></h4>
<h6><span id="resultBirdDesc2" style="color: blue"></span></h6>
<span id="resultBirdPhoto2"></span>
<h6 id="resultBirdFigure2"></h6> */}

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
                            const birdDiv = document.querySelector("#birdResultDiv");

                            const birdHeadingName = document.createElement("h4");
                            const birdHeadingDescription = document.createElement("h5");
                            const birdHeadingImage = document.createElement("img");
                            const birdHeadingRights = document.createElement("h6");

                            birdDiv.append(birdHeadingName, birdHeadingDescription, birdHeadingImage, birdHeadingRights);
                            
                            birdHeadingName.style.color = "blue";
                            birdHeadingName.style.padding = "10px";
                            birdHeadingName.textContent = trznadel;

                            birdHeadingDescription.style.color = "blue";
                            birdHeadingDescription.style.padding = "10px";
                            birdHeadingDescription.textContent = trznadelDescription;

                            birdHeadingImage.setAttribute("src", "./img/birds/trznadel.jpg");
                            birdHeadingImage.style.width = "780px";

                            birdHeadingRights.style.color = "blue";
                            birdHeadingRights.style.padding = "10px";
                            birdHeadingRights.textContent = trznadelRights;

                        }
                        
                    // 2 szpak
                    if((bp.includes("1") || bp.includes("2") || bp.includes("3")) && (bp.includes("9") || bp.includes("11") || bp.includes("12")) && bp.includes("14") && bp.includes("19") && (bp.includes("28") || bp.includes("29") || bp.includes("32") || bp.includes("33")) && (bp.includes("37") || bp.includes("40") || bp.includes("42") || bp.includes("43"))) 
                        {
                            const birdDiv = document.querySelector("#birdResultDiv");

                            const birdHeadingName = document.createElement("h4");
                            const birdHeadingDescription = document.createElement("h5");
                            const birdHeadingImage = document.createElement("img");
                            const birdHeadingRights = document.createElement("h6");

                            birdDiv.append(birdHeadingName, birdHeadingDescription, birdHeadingImage, birdHeadingRights);
                            
                            birdHeadingName.style.color = "blue";
                            birdHeadingName.style.padding = "10px";
                            birdHeadingName.textContent = szpak;

                            birdHeadingDescription.style.color = "blue";
                            birdHeadingDescription.style.padding = "10px";
                            birdHeadingDescription.textContent = szpakDescription;

                            birdHeadingImage.setAttribute("src", "./img/birds/szpak.jpg");
                            birdHeadingImage.style.width = "780px";

                            birdHeadingRights.style.color = "blue";
                            birdHeadingRights.style.padding = "10px";
                            birdHeadingRights.textContent = szpakRights;
                        }

                    // 3 kos
                    if((bp.includes("1") || bp.includes("2") || bp.includes("3")) && (bp.includes("9") || bp.includes("11") || bp.includes("12")) && bp.includes("14") && bp.includes("19") && (bp.includes("28") || bp.includes("29") || bp.includes("32") || bp.includes("33")) && (bp.includes("37") || bp.includes("40") || bp.includes("42") || bp.includes("43"))) 
                        {
                            const birdDiv = document.querySelector("#birdResultDiv");

                            const birdHeadingName = document.createElement("h4");
                            const birdHeadingDescription = document.createElement("h5");
                            const birdHeadingImage = document.createElement("img");
                            const birdHeadingRights = document.createElement("h6");

                            birdDiv.append(birdHeadingName, birdHeadingDescription, birdHeadingImage, birdHeadingRights);
                            
                            birdHeadingName.style.color = "blue";
                            birdHeadingName.style.padding = "10px";
                            birdHeadingName.textContent = kos;

                            birdHeadingDescription.style.color = "blue";
                            birdHeadingDescription.style.padding = "10px";
                            birdHeadingDescription.textContent = kosDescription;

                            birdHeadingImage.setAttribute("src", "./img/birds/kos.jpg");
                            birdHeadingImage.style.width = "780px";

                            birdHeadingRights.style.color = "blue";
                            birdHeadingRights.style.padding = "10px";
                            birdHeadingRights.textContent = kosRights;
                        }

                    // if (){
                    //     document.getElementById("resultBird1").innerHTML = "Sorry, I couldn't find any match :(";
                    //     console.log("Something went wrong");
                    // }
                
                    
                
		    }
	    }
    }
})


