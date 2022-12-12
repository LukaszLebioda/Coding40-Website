
// co zrobić, żeby wyświetlało komunikat: "Sorry, I couldn't find a match"?

let ifBird;

const kos = {
    name: "Blackbird (kos)",
    description: "dfgdfgdfg",
    rights: "Photo by Zeynel Cebeci, CC BY-SA 4.0",
    photo: "./img/birds/kos.jpg"
}

const szpak = {
    name: "Starling (szpak)",
    description: "Produces crazy electronic sounds an is able to perfectly imitate other birds, even simple human words.",
    rights: "Photo by Frank Schulenburg, CC BY-SA 4.0",
    photo: "./img/birds/szpak.jpg"
}

const trznadel = {
    name: "Yellowhammer (trznadel)",
    description: "Sings persistently in the middle of hot summer day. Supposedly inspired Beethoven to compose the 5th Symphony.",
    rights: "Photo by Andreas Trepte, www.avi-fauna.info",
    photo: "./img/birds/trznadel.jpg"
}

const placeBird = (name, description, photo, rights) => {

                            const birdDiv = document.querySelector("#birdResultDiv");

                            const birdHeadingName = document.createElement("h4");
                            const birdHeadingDescription = document.createElement("h5");
                            const birdHeadingImage = document.createElement("img");
                            const birdHeadingRights = document.createElement("h6");
                            const birdEmptyDiv = document.createElement("span");

                            birdDiv.append(birdHeadingName, birdHeadingDescription, birdHeadingImage, birdHeadingRights, birdEmptyDiv);
                            
                            birdHeadingName.style.color = "blue";
                            birdHeadingName.style.padding = "10px";
                            birdHeadingName.textContent = name;

                            birdHeadingDescription.style.color = "blue";
                            birdHeadingDescription.style.padding = "10px";
                            birdHeadingDescription.textContent = description;

                            birdHeadingImage.setAttribute("src", photo);
                            birdHeadingImage.style.width = "780px";

                            birdHeadingRights.style.color = "blue";
                            birdHeadingRights.style.padding = "10px";
                            birdHeadingRights.textContent = rights;

                            birdEmptyDiv.textContent = "--------------------";
}

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
                            placeBird(trznadel.name, trznadel.description, trznadel.photo, trznadel.rights);
                        }
                        
                    // 2 szpak
                    if((bp.includes("1") || bp.includes("2") || bp.includes("3")) && (bp.includes("9") || bp.includes("11") || bp.includes("12")) && bp.includes("14") && bp.includes("19") && (bp.includes("28") || bp.includes("29") || bp.includes("32") || bp.includes("33")) && (bp.includes("37") || bp.includes("40") || bp.includes("42") || bp.includes("43"))) 
                        {
                            placeBird(szpak.name, szpak.description, szpak.photo, szpak.rights);
                        }

                    // 3 kos
                    if((bp.includes("1") || bp.includes("2") || bp.includes("3")) && (bp.includes("9") || bp.includes("11") || bp.includes("12")) && bp.includes("14") && bp.includes("19") && (bp.includes("28") || bp.includes("29") || bp.includes("32") || bp.includes("33")) && (bp.includes("37") || bp.includes("40") || bp.includes("42") || bp.includes("43"))) 
                        {
                            placeBird(kos.name, kos.description, kos.photo, kos.rights);
                        }  
                
                    // if(ifBird.length = 1) {
                    //     console.log("OK!");
                    // } else {
                    //     console.log("Ups...");
                    // }
                    // if (1=1){
                        //     document.getElementById("resultBird1").innerHTML = "Sorry, I couldn't find any match :(";
                        //     console.log("Something went wrong");
                        // })


		    }
	    }
    }
})


