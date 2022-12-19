
// coś zrobić, żeby wyświetlało komunikat: "Sorry, I couldn't find a match"

// coś zrobić, żeby wyświetlało komunikat: "Sorry, I couldn't find a match"
// i żeby reloadowało nie do main page, a do właściwego accordiona z programem;

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
    sequence: 1,
    name: "Blackbird (kos)",
    description: "One of the best singers out there, often to be heard composing from the top of a tree all day long. Tends to focus on singing so much, that may lose vigilance and become an easy pray for predators.",
    rights: "Photo by Zeynel Cebeci, CC BY-SA 4.0",
    photo: "./img/birds/kos.jpg"
}

const szpak = {
    sequence: 2,
    name: "Starling (szpak)",
    description: "Produces futuristic sounds an is able to imitate other birds, even simple human words. A group of starlings can deplete a cherry-tree fruit deposit within minutes.",
    rights: "Photo by Frank Schulenburg, CC BY-SA 4.0",
    photo: "./img/birds/szpak.jpg"
}

const trznadel = {
    sequence: 3,
    name: "Yellowhammer (trznadel)",
    description: "Sings persistently in the middle of hot summer day, when no other species sing. Supposedly inspired Beethoven to compose the 5th Symphony.",
    rights: "Photo by Andreas Trepte, www.avi-fauna.info",
    photo: "./img/birds/trznadel.jpg"
}

const wrobel = {
    sequence: 4,
    name: "Sparrow (wróbel)",
    description: "Once one of the largest, the sparrow population is shrinking rapidly due to vanishing of old farm countryside. Fortunately sparrow is a very fertile creature...",
    rights: "Photo by CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=1719233",
    photo: "./img/birds/wrobel.jpg"
}

const mazurek = {
    sequence: 5,
    name: "Tree-sparrow (mazurek)",
    description: "Similar to sparrow, but a bit smaller, with brown hat and black spots on cheeks. Less attached to humans, yet still tends to visit bird feeders in winter.",
    rights: "Photo by Andreas Trepte, CC BY-SA 2.5",
    photo: "./img/birds/mazurek.jpg"
}

const sojka = {
    sequence: 6,
    name: "Jay (sójka)",
    description: "Its noisy squawks alarm other inhabitants of the forest, so it's not hunters' favourite bird. Tends to bury ahorns in the ground thus spreading oak seeds all over the place.",
    rights: "Photo by Luc Viatour, CC BY-SA 3.0",
    photo: "./img/birds/sojka.jpg"
}

const kowalik = {
    sequence: 7,
    name: "Nuthatch (kowalik)",
    description: "The only European bird that can climb down head first. Blocks a tree hollow entrance with a mixture of saliva and clay to protect chicks from predators sneaking in.",
    rights: "Photo by Isiwal/Wikimedia Commons/CC BY-SA 4.0",
    photo: "./img/birds/kowalik.jpg"
}

const bocianBialy = {
    sequence: 8,
    name: "White stork (bocian biały)",
    description: "Contrary to legends white storks don't bring babies. They are ruthless predators that hunt earthworms, insects, rodents, chicks and yes... frogs as well.",
    rights: "Photo by Frank Vassen, CC BY 2.0",
    photo: "./img/birds/bocianbialy.jpg"
}

const rybitwaRzeczna = {
    sequence: 9,
    name: "Common tern (rybitwa rzeczna)",
    description: "Often seen when cicrling above rivers or lakes and diving into water from the air with huge speed only to re-emerge with a fish in the beak. Lays eggs on the sandy ground on small islands or hidden shores.",
    rights: "Photo by Tony Hisgett, CC BY 2.0",
    photo: "./img/birds/rybitwarzeczna.jpg"
}

const dudek = {
    sequence: 10,
    name: "Hoopoe (dudek)",
    description: "A fold-out fan and exotic colours distinct this bird form other species. In many European languages its name reflects the sounds it produces.",
    rights: "Photo by J.M.Garg - CC BY-SA 3.0",
    photo: "./img/birds/dudek.jpg"
}

const golabMiejski = {
    sequence: 11,
    name: "City pigeon (gołąb miejski)",
    description: "This pigeon is able to drink water without tilting its head up! It's a descendant of one rock pigeon - the world's oldest domesticated bird mentioned by both Mesopotamian cuneiforms as well as Egyptian hieroglyphics.",
    rights: "Photo by Muhammad Mahdi Karim - Own work, GFDL 1.2,",
    photo: "./img/birds/golabmiejski.jpg"
}

const grzywacz = {
    sequence: 12,
    name: "Wood pigeon (grzywacz)",
    description: "Bigger than city pigeon but less city-related, with white stains on both sides of the neck and flies away before winter. Produces 5-syllable melody what distincts it from other pigeon species.",
    rights: "Photo by Tristan Ferne, CC BY 2.0",
    photo: "./img/birds/grzywacz.jpg"
}

const sierpowka = {
    sequence: 13,
    name: "Collared dove (sierpówka)",
    description: "First seen in Poland back in 1940, came from Asia. Similar to city pigeon but with a black collar around the neck and produces 3-syllable monotonous melody.",
    rights: "Photo by Adrian Pingstone, public domain",
    photo: "./img/birds/sierpowka.jpg"
}

const czaplaSiwa = {
    sequence: 14,
    name: "Grey heron (czapla siwa)",
    description: "Often seen standing perfectly motionless, scanning the water in search for careless prey. It's long neck, acting as harpoon while hunting, folds like a letter 'S' while flying high.",
    rights: "Photo by J.M.Garg - A feltöltő saját munkája, CC BY-SA 4.0",
    photo: "./img/birds/czaplasiwa.jpg"
}

const czaplaBiala = {
    sequence: 15,
    name: "Great egret (czapla biała)",
    description: "Hunts alone, standing still hidden among reeds. Or in groups, wading in water with hunting partners and scaring the fish in precise and coordinated action.",
    rights: "Photo by 'Mike' Michael L. Baird, CC BY 2.0",
    photo: "./img/birds/czaplabiala.jpg"
}

// ---------------------------------------------------------------------

const placeBird = (name, description, photo, rights) => {

                            const birdDiv = document.querySelector("#birdResultDiv");

                            const birdHeadingName = document.createElement("h4");
                            const birdHeadingDescription = document.createElement("h6");
                            const birdHeadingImage = document.createElement("img");
                            const birdHeadingRights = document.createElement("h6");
                            const birdEmptyDiv = document.createElement("span");

                            birdDiv.append(birdHeadingName, birdHeadingDescription, birdHeadingImage, birdHeadingRights, birdEmptyDiv);
                            
                            birdHeadingName.style.color = "blue";
                            birdHeadingName.style.padding = "10px";
                            birdHeadingName.textContent = name;
                            birdHeadingName.setAttribute("id", "birdie");

                            console.log(name);
                            console.log(birdHeadingName);

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
let button = document.querySelector("#buttonBirds");
let button2 = document.querySelector("#buttonBirds2");
const bp = []; // stands for bird permutation

button2.addEventListener("click", () => {
    document.getElementById("buttonBirds").disabled = false;
    document.getElementById("buttonBirds2").disabled = true;
    location.reload();
})

button.addEventListener("click", () => {
    if(document.querySelectorAll('.divBirdRadioButton input[type="radio"]:checked').length < 6) {
        alert("One or more categories remain unchecked. Please revisit the questions");
    } else {

	    for (let radio of radios) {
		    if (radio.checked) {
                bp.push(radio.value);
                document.getElementById("buttonBirds").disabled = true; 
                document.getElementById("buttonBirds2").disabled = false; 
                console.log(bp);
                
                    // 3 trznadel
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

                    // 1 kos
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
                
                    // 5 mazurek
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

                    // 6 sójka
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

                    // 7 kowalik
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

                    // 8 bocian biały
                    if(
                        // season 1-4
                        (bp.includes("1") || bp.includes("2") || bp.includes("3")) 
                        // location 5-12
                        && (bp.includes("7") || bp.includes("9")) 
                        // size 13-18
                        && bp.includes("18") 
                        // color 19-27
                        && (bp.includes("21")) 
                        // numbers 28-33
                        && (bp.includes("28") || bp.includes("29") || bp.includes("30") || bp.includes("31") || bp.includes("32") || bp.includes("33")) 
                        // activity 34-43
                        && (bp.includes("38") || bp.includes("40") || bp.includes("42") || bp.includes("43"))) 
                        {
                            placeBird(bocianBialy.name, bocianBialy.description, bocianBialy.photo, bocianBialy.rights);
                        }  

                    // 9 rybitwa rzeczna
                    if(
                        // season 1-4
                        (bp.includes("1") || bp.includes("2") || bp.includes("3")) 
                        // location 5-12
                        && (bp.includes("5") || bp.includes("6") || bp.includes("7")) 
                        // size 13-18
                        && bp.includes("15") 
                        // color 19-27
                        && (bp.includes("20") || bp.includes("23")) 
                        // numbers 28-33
                        && (bp.includes("28") || bp.includes("30") || bp.includes("31") || bp.includes("32")) 
                        // activity 34-43
                        && (bp.includes("36") || bp.includes("38") || bp.includes("40"))) 
                        {
                            placeBird(rybitwaRzeczna.name, rybitwaRzeczna.description, rybitwaRzeczna.photo, rybitwaRzeczna.rights);
                        }  

                    // 10 dudek
                    if(
                        // season 1-4
                        (bp.includes("1") || bp.includes("2")) 
                        // location 5-12
                        && (bp.includes("7") || bp.includes("8") || bp.includes("9")) 
                        // size 13-18
                        && (bp.includes("14") || bp.includes("15")) 
                        // color 19-27
                        && (bp.includes("21") || bp.includes("26") || bp.includes("27")) 
                        // numbers 28-33
                        && (bp.includes("28") || bp.includes("30")) 
                        // activity 34-43
                        && (bp.includes("39") || bp.includes("40") || bp.includes("42") || bp.includes("43"))
                        ) 
                        {
                            placeBird(dudek.name, dudek.description, dudek.photo, dudek.rights);
                        }  

                    // 11 gołąb miejski
                    if(
                        // season 1-4
                        (bp.includes("1") || bp.includes("2") || bp.includes("3") || bp.includes("4")) 
                        // location 5-12
                        && (bp.includes("7") || bp.includes("11") || bp.includes("12")) 
                        // size 13-18
                        && (bp.includes("15")) 
                        // color 19-27
                        && (bp.includes("23") || bp.includes("24")) 
                        // numbers 28-33
                        && (bp.includes("28") || bp.includes("30") || bp.includes("31") || bp.includes("32") || bp.includes("33")) 
                        // activity 34-43
                        && (bp.includes("38") || bp.includes("39") || bp.includes("40") || bp.includes("42") || bp.includes("43"))
                        ) 
                        {
                            placeBird(golabMiejski.name, golabMiejski.description, golabMiejski.photo, golabMiejski.rights);
                        }  

                    // 12 grzywacz
                    if(
                        // season 1-4
                        (bp.includes("1") || bp.includes("2") || bp.includes("3")) 
                        // location 5-12
                        && (bp.includes("7") || bp.includes("8") || bp.includes("9") || bp.includes("11") || bp.includes("12")) 
                        // size 13-18
                        && bp.includes("15") 
                        // color 19-27
                        && (bp.includes("23") || bp.includes("24")) 
                        // numbers 28-33
                        && (bp.includes("28") || bp.includes("30") || bp.includes("31")) 
                        // activity 34-43
                        && (bp.includes("39") || bp.includes("40") || bp.includes("42") || bp.includes("43"))
                        ) 
                        {
                            placeBird(grzywacz.name, grzywacz.description, grzywacz.photo, grzywacz.rights);
                        }  

                    // 13 sierpówka
                    if(
                        // season 1-4
                        (bp.includes("1") || bp.includes("2") || bp.includes("3")) 
                        // location 5-12
                        && (bp.includes("8") || bp.includes("9") || bp.includes("11") || bp.includes("12")) 
                        // size 13-18
                        && bp.includes("15")
                        // color 19-27
                        && (bp.includes("23") || bp.includes("24")) 
                        // numbers 28-33
                        && (bp.includes("28") || bp.includes("30") || bp.includes("31")) 
                        // activity 34-43
                        && (bp.includes("39") || bp.includes("40") || bp.includes("42") || bp.includes("43"))
                        ) 
                        {
                            placeBird(sierpowka.name, sierpowka.description, sierpowka.photo, sierpowka.rights);
                        } 
                        
                     // 14 czapla siwa
                     if(
                        // season 1-4
                        (bp.includes("1") || bp.includes("2") || bp.includes("3")) 
                        // location 5-12
                        && (bp.includes("5") || bp.includes("6") || bp.includes("12")) 
                        // size 13-18
                        && bp.includes("18")
                        // color 19-27
                        && bp.includes("23") 
                        // numbers 28-33
                        && (bp.includes("28") || bp.includes("30") || bp.includes("31")) 
                        // activity 34-43
                        && (bp.includes("35") || bp.includes("36") || bp.includes("38") || bp.includes("43"))
                        ) 
                        {
                            placeBird(czaplaSiwa.name, czaplaSiwa.description, czaplaSiwa.photo, czaplaSiwa.rights);
                        }  

                    // 15 czapla biała
                    if(
                        // season 1-4
                        (bp.includes("1") || bp.includes("2") || bp.includes("3")) 
                        // location 5-12
                        && (bp.includes("5") || bp.includes("6")) 
                        // size 13-18
                        && bp.includes("18")
                        // color 19-27
                        && bp.includes("20") 
                        // numbers 28-33
                        && (bp.includes("28") || bp.includes("30") || bp.includes("31") || bp.includes("32") || bp.includes("33")) 
                        // activity 34-43
                        && (bp.includes("35") || bp.includes("36") || bp.includes("38") || bp.includes("43"))
                        ) 
                        {
                            placeBird(czaplaBiala.name, czaplaBiala.description, czaplaBiala.photo, czaplaBiala.rights);
                        }  
                        
		    }
	    }
        const birdie = document.querySelector("#birdie");
        console.log(birdie);
        if (birdie === null) {
            document.getElementById("noBirdMatch").innerHTML = "Sorry, I couldn't find any match :(";
        }
    }
})


