/* 
STEP1 (ALL ELEMENTS): 
- store elements used in the application into variables;
- separately store master elements and partner elements;
- create two buttons for master element and partner element respectively;
- add class "elementItem" to every element;
- add class "elementPartner" to every partner element (id = "*_p");
- add class "elementMaster" to every master element (id = "*_m");
- set initial state of every partner element to "display: none";

STEP2 (BUTTON):
- within remix button function set: partner element to "display: none" and master element to "display: block";
- reset master elements and partner elements to their initial state;

STEP3 (SINGLE ELEMENT):
- provide info about master element (name, description, left side of notation x2);
- set partners of the master element to: "display: block" and "background-color: red;"
- set masters that became partners of master element to: "display: none";
- set the background of sibling partner elements to their initial state when partner element clicked;
-provide info about partner element and result of the reaction (element name, compound name, compound description, right side of the notation);
*/

// AZOT
let azotPartner = document.querySelector("#N_p"); // skyblue
let azotMaster = document.querySelector("#N_m"); // skyblue
azotPartner.style.display = "none";
// CHLOR
let chlorPartner = document.querySelector("#Cl_p"); // #FECDFC
let chlorMaster = document.querySelector("#Cl_m"); // #FECDFC
chlorPartner.style.display = "none";
// SIARKA
let siarkaPartner = document.querySelector("#S_p"); // skyblue
let siarkaMaster = document.querySelector("#S_m"); // skyblue
siarkaPartner.style.display = "none";
// SÓD
let sodPartner = document.querySelector("#Na_p"); // lightsalmon
let sodMaster = document.querySelector("#Na_m"); // lightsalmon
sodPartner.style.display = "none";
// TLEN
let tlenPartner = document.querySelector("#O_p"); // skyblue
let tlenMaster = document.querySelector("#O_m"); // skyblue
tlenPartner.style.display = "none";
// WAPŃ
let wapnPartner = document.querySelector("#Ca_p"); // moccasin
let wapnMaster = document.querySelector("#Ca_m"); // moccasin
wapnPartner.style.display = "none";
// WODÓR
let wodorPartner = document.querySelector("#H_p"); // lightblue
let wodorMaster = document.querySelector("#H_m"); // lightblue
wodorPartner.style.display = "none";

//------------------------------------------------------------------------------

// remix button - initial state:
let alchemyButton = document.querySelector("#alchemyButton");
alchemyButton.disabled = true;

//------------------------------------------------------------------------------

// function to enable all master elements:
let elementsMasters = document.querySelectorAll(".elementMaster");
function enableAllMasters() {
    elementsMasters.forEach(element => {
      element.removeAttribute("disabled");
    });
}

// function to disable / enable all partner elements:
let elementsPartners = document.querySelectorAll(".elementPartner");
function disableAllPartners() {
    elementsPartners.forEach(element => {
        element.setAttribute("disabled", "disabled");
        element.style.color = "black";
    });
}
function enableAllPartners() {
    elementsPartners.forEach(element => {
      element.removeAttribute("disabled");
    });
}

// function to disable / enable all the elements:
let elements = document.querySelectorAll(".elementItem");
function disableAll() {
    elements.forEach(element => {
      element.setAttribute("disabled", "disabled");
      element.style.color = "black";
    });
}
function enableAll() {
    elements.forEach(element => {
      element.removeAttribute("disabled");
    });
}

//------------------------------------------------------------------------------

// periodic table - initial state:
disableAll();
enableAllMasters();

//------------------------------------------------------------------------------

// remix button behaviour (enabled when a partner element is clicked)
alchemyButton.onclick = function () {

    disableAll()
    enableAllMasters()

    // display block, display none
    azotPartner.style.display = "none";
    azotMaster.style.display = "block";

    chlorPartner.style.display = "none";
    chlorMaster.style.display = "block";

    siarkaPartner.style.display = "none";
    siarkaMaster.style.display = "block";

    sodPartner.style.display = "none";
    sodMaster.style.display = "block";

    wodorPartner.style.display = "none";
    wodorMaster.style.display = "block";

    tlenPartner.style.display = "none";
    tlenMaster.style.display = "block";

    wapnPartner.style.display = "none";
    wapnMaster.style.display = "block";

    // reset master elements and partner elements to their initial state
    azotPartner.style.backgroundColor = "skyblue";
    azotMaster.style.backgroundColor = "skyblue";
    azotMaster.style.transform = "scale(1)";
    
    chlorPartner.style.backgroundColor = "#FECDFC";
    chlorMaster.style.backgroundColor = "#FECDFC";
    chlorMaster.style.transform = "scale(1)";

    siarkaPartner.style.backgroundColor = "skyblue";
    siarkaMaster.style.backgroundColor = "skyblue";
    siarkaMaster.style.transform = "scale(1)";
    
    sodPartner.style.backgroundColor = "lightsalmon";
    sodMaster.style.backgroundColor = "lightsalmon";
    sodMaster.style.transform = "scale(1)";

    tlenPartner.style.backgroundColor = "skyblue";
    tlenMaster.style.backgroundColor = "skyblue";
    tlenMaster.style.transform = "scale(1)";

    wapnPartner.style.backgroundColor = "moccasin";
    wapnMaster.style.backgroundColor = "moccasin";
    wapnMaster.style.transform = "scale(1)";

    wodorPartner.style.backgroundColor = "moccasin";
    wodorMaster.style.backgroundColor = "moccasin";
    wodorMaster.style.transform = "scale(1)";
    
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

};

//------------------------------------------------------------------------------------

// WODÓR

wodorMaster.onclick = function() {

    // enables partners
    enableAllPartners();

    // change master element when clicked
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
    
    // turns partner elements red and replaces master with partner
    azotPartner.style.display = "block";
    azotPartner.style.backgroundColor = "red";
    azotMaster.style.display = "none";

    chlorPartner.style.display = "block";
    chlorPartner.style.backgroundColor = "red";
    chlorMaster.style.display = "none";

    siarkaPartner.style.display = "block";
    siarkaPartner.style.backgroundColor = "red";
    siarkaMaster.style.display = "none";

    tlenPartner.style.display = "block";
    tlenPartner.style.backgroundColor = "red";
    tlenMaster.style.display = "none";

        // partner element 1
        tlenPartner.onclick = function() {

            // disables all the elements
            disableAll()
            enableAllMasters();
            // enables remix button
            alchemyButton.disabled = false;
            
            // resets the background of other partner elements
            azotPartner.style.backgroundColor = "skyblue";
            chlorPartner.style.backgroundColor = "#FECDFC";
            siarkaPartner.style.backgroundColor = "skyblue";

            // places partner element's name into the chemical reaction
            document.getElementById("elementRightFull").innerHTML = "<b>OXYGEN = WATER</b>";
            // places partner element's abbreviation + result into the chemical reaction
            document.getElementById("elementRightAbbreviation").innerHTML = "<b>O = H<sub>2</sub>0<b>";
            
            // places compounds name
            document.getElementById("compoundName").innerHTML = "<b>WATER</b>";
            // places compounds description
            document.getElementById("compoundDescription").innerHTML = "Location: tap water, bath water or bottled one from the nearby store. <br><br> 71% of the surface of the Earth lies underwater. 60-75% human bodyweght is water. Water was brought to Earth by asteroids billions of years ago.";

        }

        // partner element 2
        chlorPartner.onclick = function() {

            // disables all the elements
            disableAll()
            enableAllMasters();
            // enables remix button
            alchemyButton.disabled = false;
            
            // resets the background of other partner elements
            azotPartner.style.backgroundColor = "skyblue";
            tlenPartner.style.backgroundColor = "skyblue";
            siarkaPartner.style.backgroundColor = "skyblue";

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
        siarkaPartner.onclick = function() {

            // disables all the elements
            disableAll()
            enableAllMasters();
            // enables remix button
            alchemyButton.disabled = false;
            
            // resets the background of other partner elements
            azotPartner.style.backgroundColor = "skyblue";
            tlenPartner.style.backgroundColor = "skyblue";
            chlorPartner.style.backgroundColor = "#FECDFC";

            // places partner element's name into the chemical reaction
            document.getElementById("elementRightFull").innerHTML = "<b>SULFUR = HYDROGEN SULFIDE</b>";
            // places partner element's abbreviation + result into the chemical reaction
            document.getElementById("elementRightAbbreviation").innerHTML = "<b>S = H<sub>2</sub>S<b>";
            // places compounds name
            document.getElementById("compoundName").innerHTML = "<b>HYDROGEN SULFIDE</b>";
            // places compounds description
            document.getElementById("compoundDescription").innerHTML = "Location: underground gas deposits, underground mineral waters, volcanoes. <br><br> Toxic and poisonous, but luckily tends to warn its surroundings by spreading a very unpleasant smell of rotten eggs.";

        }     
}

// --------------------------------------------------------------------------

siarkaMaster.onclick = function() {

    // enables partners
    enableAllPartners();

    // change master element when clicked
    this.style.backgroundColor = "red";
    this.style.transform = "scale(1.5)";

    // provides master elements' name 
    document.getElementById("elementName").innerHTML = "<b>SULFUR</b>";
    // provides info about master element
    document.getElementById("elementDescription").innerHTML = "A widespread element often found in the form of yellowish minerals. Used e.g. in plastics industry, petrochemical industry, medicine (for skin diseases) and of course in matches' manufacturing. The smell os sulfur compounds is to be sensed in the nearby of active volcanoes or some hot springs.";
    // places master element's full name into the chemical reaction notation
    document.getElementById("elementLeftFull").innerHTML = "<b>SULFUR</b>";
    // places master element's abbreviation into the chemical reaction
    document.getElementById("elementLeftAbbreviation").innerHTML = "<b>S</b>";
    
    // turns partner elements red
    wodorPartner.style.display = "block"; 
    wodorPartner.style.backgroundColor = "red"; 
    wodorMaster.style.display = "none"; 

    tlenPartner.style.display = "block"; 
    tlenPartner.style.backgroundColor = "red";
    tlenMaster.style.display = "none"; 

        // partner element 1
        wodorPartner.onclick = function() {

            // disables all the elements
            disableAll()
            enableAllMasters();
            // enables remix button
            alchemyButton.disabled = false;
            
            // resets the background of partner elements
            tlenPartner.style.backgroundColor = "skyblue";

            // places partner element's name into the chemical reaction
            document.getElementById("elementRightFull").innerHTML = "<b>HYDROGEN = HYDROGEN SULFIDE</b>";
            // places partner element's abbreviation + result into the chemical reaction
            document.getElementById("elementRightAbbreviation").innerHTML = "<b>H = H<sub>2</sub>S<b>";
            // places compounds name
            document.getElementById("compoundName").innerHTML = "<b>HYDROGEN SULFIDE</b>";
            // places compounds description
            document.getElementById("compoundDescription").innerHTML = "Location: underground gas deposits, underground mineral waters, volcanoes. <br><br> Toxic and poisonous, but luckily tends to warn its surroundings by spreading a very unpleasant smell of rotten eggs.";

        }

        // partner element 2
        tlenPartner.onclick = function() {

            // disables all the elements
            disableAll()
            enableAllMasters();
            // enables remix button
            alchemyButton.disabled = false;
            
            // resets the background of partner elements
            wodorPartner.style.backgroundColor = "lightblue";

            // places partner element's name into the chemical reaction
            document.getElementById("elementRightFull").innerHTML = "<b>hhHYDROGEN = HYDROGEN SULFIDE</b>";
            // places partner element's abbreviation + result into the chemical reaction
            document.getElementById("elementRightAbbreviation").innerHTML = "<b>hhH = H<sub>2</sub>S<b>";
            // places compounds name
            document.getElementById("compoundName").innerHTML = "<b>hhHYDROGEN SULFIDE</b>";
            // places compounds description
            document.getElementById("compoundDescription").innerHTML = "hhLocation: underground gas deposits, underground mineral waters, volcanoes. <br><br> Toxic and poisonous, but luckily tends to warn its surroundings by spreading a very unpleasant smell of rotten eggs.";

        }
}

