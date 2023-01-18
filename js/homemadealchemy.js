// list of elements:

const elements = document.querySelectorAll(".elementItem");
elements.disabled = true;

let wodor = document.querySelector("#H");
let tlen = document.querySelector("#O");
let siarka = document.querySelector("#S");
let chlor = document.querySelector("#Cl");
let azot = document.querySelector("#N");
let srebro = document.querySelector("#Ag");

// --------------------------------------------------------

// mousover / hover over element:
let elementText = document.querySelector("#whatElement");

let alchemyButton = document.querySelector("#alchemyButton");
alchemyButton.disabled = true;

const elementClick = (

    element, elementColor, 
    
    partner1, partnerColor1, mixture1, description1, addLeft1, addRight1,
    
    partner2, partnerColor2, partner3, partnerColor3, partner4, partnerColor4, partner5, partnerColor5, mixture2, mixture3, mixture4, mixture5
    
    ) => {

        element.addEventListener("click", () =>{
        element.style.transform = "scale(1.5)";
        element.style.backgroundColor = "red";
        element.style.border = "1px solid black";
        document.querySelector("#element1").innerHTML = addLeft1;
        partner1.style.backgroundColor = "red";
        partner2.style.backgroundColor = "red";
        partner3.style.backgroundColor = "red";
        partner4.style.backgroundColor = "red";
        partner5.style.backgroundColor = "red";

        partner1.addEventListener("click", () => {
        document.querySelector("#elementNameLabel1").innerHTML = mixture1;
        document.querySelector("#elementNameLabel2").innerHTML = description1;
        document.querySelector("#element2").innerHTML = addRight1;
        partner2.style.backgroundColor = partnerColor2;
        partner3.style.backgroundColor = partnerColor3;
        partner4.style.backgroundColor = partnerColor4;
        partner5.style.backgroundColor = partnerColor5;

        alchemyButton.disabled = false;

        }, {once: true})

        // partner2.addEventListener("click", () => {
        // document.querySelector("#elementMix").innerHTML = mixture2;

        // })

        alchemyButton.addEventListener("click", () => {
            // location.reload();
            element.style.backgroundColor = elementColor;
            element.style.transform = "scale(1)";
            partner1.style.backgroundColor = partnerColor1;
            partner2.style.backgroundColor = partnerColor2;
            partner3.style.backgroundColor = partnerColor3;
            partner4.style.backgroundColor = partnerColor4;
            partner5.style.backgroundColor = partnerColor5;

            document.querySelector("#elementNameLabel1").innerHTML = "---";
            document.querySelector("#elementNameLabel2").innerHTML = "---";
            document.querySelector("#element1").innerHTML = "?";
            document.querySelector("#element2").innerHTML = "?";

            alchemyButton.disabled = true;
            // partner1.disabled = true;
            // partner1.style.color = "black";
        });

    })

}

// ------------------------------------------------------------

// addEventListeners for every element:

wodor.addEventListener("click", elementClick
(
    wodor, "lightblue", 
    
    tlen, "skyblue", "WATER", "Tap water, bath water or bottled from the nearby store. <br> 71% of the surface of the Earth lies underwater. <br> 60-75% human bodyweght is water. <br> Eart is the only planet we know that has liquid water.", "H", "O = H2O",
    
    siarka, "skyblue", chlor, "#FECDFC", azot, "skyblue", srebro, "#D0F0C0",  

    ));
















