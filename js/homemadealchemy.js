// elements used in the application:
let azot = document.querySelector("#N"); // skyblue
let chlor = document.querySelector("#Cl"); // #FECDFC
let wodor = document.querySelector("#H"); // lightblue
let siarka = document.querySelector("#S"); // skyblue
let sod = document.querySelector("#Na"); // lightsalmon
let tlen = document.querySelector("#O"); // skyblue
let wapn = document.querySelector("#Ca"); // moccasin

// remix button - initial state:
let alchemyButton = document.querySelector("#alchemyButton");
alchemyButton.disabled = true;

// function to enable all master elements:
let elementsMasters = document.querySelectorAll(".elementMaster");
function enableAllMasters() {
    elementsMasters.forEach(element => {
      element.removeAttribute("disabled");
    });
}

// functions to disable / enable all partner elements:
let elementsPartners = document.querySelectorAll(".elementPartner");
function disableAllPartners() {
    elementsPartners.forEach(element => {
        element.setAttribute("disabled", "disabled");
    });
}
function enableAllPartners() {
    elementsPartners.forEach(element => {
      element.removeAttribute("disabled");
    });
}

// functions to disable / enable all the elements:
let elements = document.querySelectorAll(".elementItem");
function disableAll() {
    elements.forEach(element => {
      element.setAttribute("disabled", "disabled");
    });
}
function enableAll() {
    elements.forEach(element => {
      element.removeAttribute("disabled");
    });
}

// periodic table - initial state:
disableAll();
enableAllMasters();

// remix button behaviour
// enabled when a partner element is clicked
alchemyButton.onclick = function () {

    // disables all the periodic table
    // enables master elements
    disableAll()
    enableAllMasters()

    // resets master elements to their initial state
    wodor.style.backgroundColor = "lightblue";
    wodor.style.transform = "scale(1)";
    siarka.style.backgroundColor = "skyblue";
    siarka.style.transform = "scale(1)";
              
    // resets partner elements to their initial state
    azot.style.backgroundColor = "skyblue";
    chlor.style.backgroundColor = "#FECDFC";
    siarka.style.backgroundColor = "skyblue";
    tlen.style.backgroundColor = "skyblue";

    // provides info about the element
    document.querySelector("#elementName").innerHTML = "---";
    document.querySelector("#elementDescription").innerHTML = "---";
    // provides information about compounds
    document.querySelector("#compoundName").innerHTML = "---";
    document.querySelector("#compoundDescription").innerHTML = "---";
    // provides information about chemical reaction (full names)
    document.querySelector("#elementLeftFull").innerHTML = "?";
    document.querySelector("#elementRightFull").innerHTML = "?";
    // provides information about chemical reaction (abbreviations)
    document.querySelector("#elementLeftAbbreviation").innerHTML = "?";
    document.querySelector("#elementRightAbbreviation").innerHTML = "?";
    
    // disables remix button
    this.disabled = true;

    // location.reload()

};

// WODÓR

// remember to mark master element in html file as elementMaster
// remember to reset master elements to their initial state (alchemy button)
// remember to reset partner elements to their initial state (alchemy button)

// buzzgggggggggggghhhhhhhhhh

wodor.onclick = function() {

    // enables all master element partners
    enableAllPartners();

    // changes the look of master element when clicked
    this.style.backgroundColor = "red";
    this.style.transform = "scale(1.5)";

    // provides master elements' name 
    document.getElementById("elementName").innerHTML = "<b>HYDROGEN</b>";
    // provides info about master element
    document.getElementById("elementDescription").innerHTML = "The most common element in the Universe (91% of all atoms out there). The first one to be created in the Big Bang. Its conversion into helium is the reason why the Sun will shine and spread its warm rays for the next 4 billion years.";
    // places master element's full name into the chemical reaction notation
    document.getElementById("elementLeftFull").innerHTML = "<b>HYDROGEN</b>";
    // places master element's abbreviation into the chemical reaction
    document.getElementById("elementLeftAbbreviation").innerHTML = "<b>H</b>";
    
    // turns partner elements red
    azot.style.backgroundColor = "red"; 
    chlor.style.backgroundColor = "red";
    siarka.style.backgroundColor = "red";
    tlen.style.backgroundColor = "red";

        // partner element 1
        tlen.onclick = function() {

            // disables all the elements
            disableAll()
            enableAllMasters();
            // enables remix button
            alchemyButton.disabled = false;
            
            // resets the background of other partner elements
            azot.style.backgroundColor = "skyblue";
            chlor.style.backgroundColor = "#FECDFC";
            siarka.style.backgroundColor = "skyblue";

            // places partner element's name into the chemical reaction
            document.getElementById("elementRightFull").innerHTML = "<b>OXYGEN = WATER</b>";
            // places partner element's abbreviation + result into the chemical reaction
            document.getElementById("elementRightAbbreviation").innerHTML = "<b>O = H<sub>2</sub>0<b>";
            // places compounds name
            document.getElementById("compoundName").innerHTML = "<b>WATER</b>";
            // places compounds description
            document.getElementById("compoundDescription").innerHTML = "Location: tap water, bath water or bottled from the nearby store. <br><br> 71% of the surface of the Earth lies underwater. 60-75% human bodyweght is water. It was brought to Earth by asteroids billions of years ago.";

        }

        // partner element 2
        chlor.onclick = function() {

            // disables all the elements
            disableAll()
            enableAllMasters();
            // enables remix button
            alchemyButton.disabled = false;
            
            // resets the background of other partner elements
            azot.style.backgroundColor = "skyblue";
            tlen.style.backgroundColor = "skyblue";
            siarka.style.backgroundColor = "skyblue";

            // places partner element's name into the chemical reaction
            document.getElementById("elementRightFull").innerHTML = "<b>CHLORINE = HYDROCHLORIC ACID</b>";
            // places partner element's abbreviation + result into the chemical reaction
            document.getElementById("elementRightAbbreviation").innerHTML = "<b>Cl = HCl<b>";
            // places compounds name
            document.getElementById("compoundName").innerHTML = "<b>HYDROCHLORIC ACID</b>";
            // places compounds description
            document.getElementById("compoundDescription").innerHTML = "Location: mammals' stomachs (humans included). <br><br> One of the strongest inorganic acids. An important digestive factor. Broadly used in the industry (metalworking, food industry etc.) as well as in the underground production of illegal drugs.";
        }

        // partner element 3
        siarka.onclick = function() {

            // disables all the elements
            disableAll()
            enableAllMasters();
            // enables remix button
            alchemyButton.disabled = false;
            
            // resets the background of other partner elements
            azot.style.backgroundColor = "skyblue";
            tlen.style.backgroundColor = "skyblue";
            chlor.style.backgroundColor = "#FECDFC";

            // places partner element's name into the chemical reaction
            document.getElementById("elementRightFull").innerHTML = "<b>SULFUR = HYDROGEN SULFIDE</b>";
            // places partner element's abbreviation + result into the chemical reaction
            document.getElementById("elementRightAbbreviation").innerHTML = "<b>S = H<sub>2</sub>S<b>";
            // places compounds name
            document.getElementById("compoundName").innerHTML = "<b>HYDROGEN SULFIDE</b>";
            // places compounds description
            document.getElementById("compoundDescription").innerHTML = "Location: underground gas deposits, underground mineral waters, volcanoes. <br><br> Toxic and poisonous, but luckily tends to warn its surroundings by spreading a very unpleasant smell of rotten eggs.";

            return;
        }     
}

// ----------------------------------

siarka.onclick = function() {

    // enables all master element partners
    enableAllPartners();

    // changes the look of master element when clicked
    this.style.backgroundColor = "red";
    this.style.transform = "scale(1.5)";

    // provides master elements' name 
    document.getElementById("elementName").innerHTML = "<b>SULFEUR</b>";
    // provides info about master element
    document.getElementById("elementDescription").innerHTML = "SULFUR!!! The most common element in the Universe (91% of all atoms out there). The first one to be created in the Big Bang. Its conversion into helium is the reason why the Sun will shine and spread its warm rays for the next 4 billion years.";
    // places master element's full name into the chemical reaction notation
    document.getElementById("elementLeftFull").innerHTML = "<b>SULFUR</b>";
    // places master element's abbreviation into the chemical reaction
    document.getElementById("elementLeftAbbreviation").innerHTML = "<b>S</b>";
    
    // turns partner elements red
    wodor.style.backgroundColor = "red"; 
    tlen.style.backgroundColor = "red";
  
        // partner element 1
        wodor.onclick = function() {

            // disables all the elements
            disableAll()
            enableAllMasters();
            // enables remix button
            alchemyButton.disabled = false;
            
            // resets the background of partner elements
            tlen.style.backgroundColor = "skyblue";

            // places partner element's name into the chemical reaction
            document.getElementById("elementRightFull").innerHTML = "<b>HYDROGEN = HYDROGEN SULFIDE</b>";
            // places partner element's abbreviation + result into the chemical reaction
            document.getElementById("elementRightAbbreviation").innerHTML = "<b>H = H<sub>2</sub>0<b>";
            // places compounds name
            document.getElementById("compoundName").innerHTML = "<b>HYDROGEN SULFIDE</b>";
            // places compounds description
            document.getElementById("compoundDescription").innerHTML = "Location: underground gas deposits, underground mineral waters, volcanoes. <br><br> Toxic and poisonous, but luckily tends to warn its surroundings by spreading a very unpleasant smell of rotten eggs.";

            return;
        }
}

