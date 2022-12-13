
// coś zrobić, żeby wyświetlało komunikat: "Sorry, I couldn't find a match"
// i musi być przycisk "TRY AGAIN" w takim wypadku!


//let ifBird;

// if(ifBird.length = 1) {
                    //     console.log("OK!");
                    // } else {
                    //     console.log("Ups...");
                    // }
                    // if (1=1){
                        //     document.getElementById("resultBird1").innerHTML = "Sorry, I couldn't find any match :(";
                        //     console.log("Something went wrong");
                        // })

const kos = {
    name: "Blackbird (kos)",
    description: "One of the best singers out there, often to be heard composing from the top of a tree all day long. Tends to focus on singing so much, that may lose vigilance and become an easy pray for predators.",
    rights: "Photo by Zeynel Cebeci, CC BY-SA 4.0",
    photo: "./img/birds/kos.jpg"
}

const szpak = {
    name: "Starling (szpak)",
    description: "Produces futuristic sounds an is able to imitate other birds, even simple human words. A group of starlings can deplete a cherry-tree fruit deposit within minutes.",
    rights: "Photo by Frank Schulenburg, CC BY-SA 4.0",
    photo: "./img/birds/szpak.jpg"
}

const trznadel = {
    name: "Yellowhammer (trznadel)",
    description: "Sings persistently in the middle of hot summer day, when no other species sing. Supposedly inspired Beethoven to compose the 5th Symphony.",
    rights: "Photo by Andreas Trepte, www.avi-fauna.info",
    photo: "./img/birds/trznadel.jpg"
}

const wrobel = {
    name: "Sparrow (wróbel)",
    description: "Once one of the largest, the sparrow population is shrinking rapidly due to vanishing of old farm countryside. Fortunately sparrow is a very fertile creature...",
    rights: "Photo by CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=1719233",
    photo: "./img/birds/wrobel.jpg"
}

const mazurek = {
    name: "Tree-sparrow (mazurek)",
    description: "Similar to sparrow, but a bit smaller, with brown hat and black spots on cheeks. Less attached to humans, yet still tends to visit bird feeders in winter.",
    rights: "Photo by Andreas Trepte, CC BY-SA 2.5",
    photo: "./img/birds/mazurek.jpg"
}

const sojka = {
    name: "Jay (sójka)",
    description: "Its noisy squawks alarm other inhabitants of the forest, so it's not hunters' favourite bird. Tends to bury ahorns in the ground thus spreading oak seeds all over the place.",
    rights: "Photo by Luc Viatour, CC BY-SA 3.0",
    photo: "./img/birds/sojka.jpg"
}

const kowalik = {
    name: "Nuthatch (kowalik)",
    description: "The only European bird that can climb down head first. Blocks a tree hollow entrance with a mixture of saliva and clay to protect chicks from predators sneaking in.",
    rights: "Photo by Isiwal/Wikimedia Commons/CC BY-SA 4.0",
    photo: "./img/birds/kowalik.jpg"
}

// ---------------------------------------------------------------------

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
                    if(
                        // season 1-4
                        (bp.includes("1") || bp.includes("2") || bp.includes("3") || bp.includes("4")) 
                        // location 5-12
                        && (bp.includes("7") || bp.includes("9")) 
                        // size 13-18
                        && bp.includes("13") 
                        // color 19-27
                        && (bp.includes("22") || bp.includes("24") || bp.includes("25")) 
                        // numbers 28-33
                        && (bp.includes("28") || bp.includes("30") || bp.includes("31")) 
                        // activity 34-43
                        && (bp.includes("39") || bp.includes("42") || bp.includes("43"))
                        ) {
                            placeBird(trznadel.name, trznadel.description, trznadel.photo, trznadel.rights);
                        }
                        
                    // 2 szpak
                    if(
                        // season 1-4
                        (bp.includes("1") || bp.includes("2") || bp.includes("3")) 
                        // location 5-12
                        && (bp.includes("9") || bp.includes("11") || bp.includes("12")) 
                        // size 13-18
                        && bp.includes("14") 
                        // color 19-27
                        && bp.includes("19") 
                        // numbers 28-33
                        && (bp.includes("28") || bp.includes("30") || bp.includes("31") || bp.includes("32") || bp.includes("33")) 
                        // activity 34-43
                        && (bp.includes("39") || bp.includes("40") || bp.includes("42") || bp.includes("43"))
                        ) {
                            placeBird(szpak.name, szpak.description, szpak.photo, szpak.rights);
                        }

                    // 3 kos
                    if(
                        // season 1-4
                        (bp.includes("1") || bp.includes("2") || bp.includes("3") || bp.includes("4")) 
                        // location 5-12
                        && (bp.includes("8") || bp.includes("9") || bp.includes("10") || bp.includes("12")) 
                        // size 13-18
                        && bp.includes("14") 
                        // color 19-27
                        && bp.includes("19") 
                        // numbers 28-33
                        && (bp.includes("28") || bp.includes("30")) 
                        // activity 34-43
                        && (bp.includes("37") || bp.includes("40") || bp.includes("42") || bp.includes("43"))) 
                        {
                            placeBird(kos.name, kos.description, kos.photo, kos.rights);
                        }  

                    // 4 wróbel
                    if(
                        // season 1-4
                        (bp.includes("1") || bp.includes("2") || bp.includes("3") || bp.includes("4")) 
                        // location 5-12
                        && (bp.includes("7") || bp.includes("9") || bp.includes("11") || bp.includes("12")) 
                        // size 13-18
                        && bp.includes("13") 
                        // color 19-27
                        && (bp.includes("22") || bp.includes("23")) 
                        // numbers 28-33
                        && (bp.includes("28") || bp.includes("30") || bp.includes("31") || bp.includes("32")) 
                        // activity 34-43
                        && (bp.includes("37") || bp.includes("39") || bp.includes("40") || bp.includes("42"))) 
                        {
                            placeBird(wrobel.name, wrobel.description, wrobel.photo, wrobel.rights);
                        }  
                
                    // 4 mazurek
                    if(
                        // season 1-4
                        (bp.includes("1") || bp.includes("2") || bp.includes("3") || bp.includes("4")) 
                        // location 5-12
                        && (bp.includes("7") || bp.includes("9") || bp.includes("12")) 
                        // size 13-18
                        && bp.includes("13") 
                        // color 19-27
                        && (bp.includes("22") || bp.includes("23")) 
                        // numbers 28-33
                        && (bp.includes("28") || bp.includes("30") || bp.includes("31")) 
                        // activity 34-43
                        && (bp.includes("37") || bp.includes("39") || bp.includes("40") || bp.includes("42"))) 
                        {
                            placeBird(mazurek.name, mazurek.description, mazurek.photo, mazurek.rights);
                        }  

                    // 5 sójka
                    if(
                        // season 1-4
                        (bp.includes("1") || bp.includes("2") || bp.includes("3") || bp.includes("4")) 
                        // location 5-12
                        && (bp.includes("7") || bp.includes("8") || bp.includes("9") || bp.includes("10") || bp.includes("12")) 
                        // size 13-18
                        && bp.includes("15") 
                        // color 19-27
                        && (bp.includes("26") || bp.includes("27")) 
                        // numbers 28-33
                        && (bp.includes("28") || bp.includes("30")) 
                        // activity 34-43
                        && (bp.includes("39") || bp.includes("40") || bp.includes("42") || bp.includes("43"))) 
                        {
                            placeBird(sojka.name, sojka.description, sojka.photo, sojka.rights);
                        }  

                    // 6 kowalik
                    if(
                        // season 1-4
                        (bp.includes("1") || bp.includes("2") || bp.includes("3") || bp.includes("4")) 
                        // location 5-12
                        && (bp.includes("8") || bp.includes("9") || bp.includes("12")) 
                        // size 13-18
                        && bp.includes("13") 
                        // color 19-27
                        && (bp.includes("24") || bp.includes("26")) 
                        // numbers 28-33
                        && (bp.includes("28") || bp.includes("30")) 
                        // activity 34-43
                        && (bp.includes("37") || bp.includes("39") || bp.includes("41"))) 
                        {
                            placeBird(kowalik.name, kowalik.description, kowalik.photo, kowalik.rights);
                        }  


		    }
	    }
    }
})


