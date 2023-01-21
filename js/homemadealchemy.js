// STORE ALL MASTER & PARTNER ELEMENTS INTO VARIABLE
// SET PARTNER ELEMENTS INITIAL STATE TO "DISPLAY: NONE";

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

// REMIX BUTTON
// remix button enabled when partner element is clicked

alchemyButton.onclick = function () {

    disableAll()
    enableAllMasters()

    // RESET PARTNER VERSIONS TO "DISPLAY: NONE"; 
    // RESET MASTER VERSIONS TO "DISPLAY: BLOCK"; 
    // RESET PARTNER VERSIONS & MASTER VERSIONS TO THEIR INITIAL COLOR;
    // RESET MASTER VERSIONS TO THEIR INITIAL SCALE (1); 

    azotPartner.style.display = "none";
    azotMaster.style.display = "block";
    azotPartner.style.backgroundColor = "skyblue";
    azotMaster.style.backgroundColor = "skyblue";
    azotMaster.style.transform = "scale(1)";

    chlorPartner.style.display = "none";
    chlorMaster.style.display = "block";
    chlorPartner.style.backgroundColor = "#FECDFC";
    chlorMaster.style.backgroundColor = "#FECDFC";
    chlorMaster.style.transform = "scale(1)";

    siarkaPartner.style.display = "none";
    siarkaMaster.style.display = "block";
    siarkaPartner.style.backgroundColor = "skyblue";
    siarkaMaster.style.backgroundColor = "skyblue";
    siarkaMaster.style.transform = "scale(1)";

    sodPartner.style.display = "none";
    sodMaster.style.display = "block";
    sodPartner.style.backgroundColor = "lightsalmon";
    sodMaster.style.backgroundColor = "lightsalmon";
    sodMaster.style.transform = "scale(1)";

    tlenPartner.style.display = "none";
    tlenMaster.style.display = "block";
    tlenPartner.style.backgroundColor = "skyblue";
    tlenMaster.style.backgroundColor = "skyblue";
    tlenMaster.style.transform = "scale(1)";

    wapnPartner.style.display = "none";
    wapnMaster.style.display = "block";
    wapnPartner.style.backgroundColor = "moccasin";
    wapnMaster.style.backgroundColor = "moccasin";
    wapnMaster.style.transform = "scale(1)";

    wodorPartner.style.display = "none";
    wodorMaster.style.display = "block";
    wodorPartner.style.backgroundColor = "skyblue";
    wodorMaster.style.backgroundColor = "skyblue";
    wodorMaster.style.transform = "scale(1)";

    // remove info about elements & compounds: name and description; 
    elementMaster.removeChild(elementMaster.firstChild);
    elementMaster.removeChild(elementMaster.lastChild);
    elementPartner.removeChild(elementPartner.firstChild);
    elementPartner.removeChild(elementPartner.lastChild);
    compoundName1.removeChild(compoundName1.firstChild);
    compoundName1.removeChild(compoundName1.lastChild);
    compoundName2.removeChild(compoundName2.firstChild);
    compoundName2.removeChild(compoundName2.lastChild);
    
    // disables remix button
    this.disabled = true;

};

//------------------------------------------------------------------------------------

// WODÓR

// HTML: CREATE SEPARATE VIVS (BUTTONS) FOR PARTNER VERSION & MASTER VERSION RESPECTIVELY;
// HTML: ADD CLASS "ELEMENTITEM" TO EVERY ELEMENT;
// HTML: ADD CLASS "ELEMENT PARTNER" TO EVERY PARTNER VERSION (id = "*_p");
// HTML: ADD CLASS "ELEMENT MASTER" TO EVERY MASTER VERSION (id = "*_p");

// STORE ALL MASTER & PARTNER ELEMENTS INTO VARIABLE
// SET PARTNER ELEMENTS INITIAL STATE TO "DISPLAY: NONE";

// REMIX BUTTON: RESET PARTNER VERSIONS TO "DISPLAY: NONE"; 
// REMIX BUTTON: RESET MASTER VERSIONS TO "DISPLAY: BLOCK"; 
// REMIX BUTTON: RESET PARTNER VERSIONS & MASTER VERSIONS TO THEIR INITIAL COLOR;
// REMIX BUTTON: RESET MASTER VERSIONS TO THEIR INITIAL SCALE (1); 

wodorMaster.onclick = function() {

    // to prevent recreate master related div elements when reclicked
    wodorMaster.disabled = true;

    // enables all partners:
    enableAllPartners();

    // change this master element when clicked
    this.style.backgroundColor = "red";
    this.style.transform = "scale(1.5)";

    // create elements for master element's name & description
    const elementMaster = document.querySelector("#elementMaster");
    const elementMasterName = document.createElement("h5");
    const elementMasterDescription = document.createElement("h6");
    elementMaster.append(elementMasterName, elementMasterDescription);
    elementMasterName.textContent = "HYDROGEN (H)";
    elementMasterName.style.fontWeight = "bold";
    elementMasterDescription.innerHTML = "The most common element in the Universe (91% of all atoms out there). The first one to be created in the Big Bang. Its conversion into helium is the reason why the Sun will shine and spread its warm rays for the next 4 billion years.";
    elementMasterDescription.style.padding = "10px 40px 10px 40px";

    
    // removes master elements
    // installs partner elements
    // turns partner elements red 
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

        // PARTNER ELEMENT 1
        tlenPartner.onclick = function() {

            // disables all the elements
            // enable all master elements
            disableAll()
            enableAllMasters();

            // to prevent recreate master related div elements when reclicked
            wodorMaster.disabled = true; 

            // enables remix button
            alchemyButton.disabled = false;
            
            // resets the background of sibling partner elements
            azotPartner.style.backgroundColor = "skyblue";
            chlorPartner.style.backgroundColor = "#FECDFC";
            siarkaPartner.style.backgroundColor = "skyblue";

            // create elements for partner element's name & description
            const elementPartner = document.querySelector("#elementPartner");
            const elementPartnerName = document.createElement("h5");
            const elementPartnerDescription = document.createElement("h6");
            elementPartner.append(elementPartnerName, elementPartnerDescription);
            elementPartnerName.textContent = "OXYGEN (O)";
            elementPartnerName.style.fontWeight = "bold";
            elementPartnerDescription.innerHTML = "właściwości tlenu";
            elementPartnerDescription.style.padding = "10px 40px 10px 40px";

            // create elements for first compound's name and description
            const compound1 = document.querySelector("#compoundName1");
            const compoundName1 = document.createElement("h5");
            const compoundDescription1 = document.createElement("h6");
            compound1.append(compoundName1, compoundDescription1);
            compoundName1.innerHTML = "WODA (H<sub>2</sub>O)";
            compoundName1.style.fontWeight = "bold";
            compoundDescription1.innerHTML = "Location: tap water, bath water or bottled one from the nearby store. <br><br> 71% of the surface of the Earth lies underwater. 60-75% human bodyweght is water. Water was brought to Earth by asteroids billions of years ago.<hr>";
            compoundDescription1.style.padding = "10px 40px 10px 40px";

            // create elements for second compound's name and description
            const compound2 = document.querySelector("#compoundName2");
            // const separator = document.createElement("h6");
            // const compoundNotation2 = document.createElement("h6");
            const compoundName2 = document.createElement("h5");
            const compoundDescription2 = document.createElement("h6");
            compound2.append(compoundName2, compoundDescription2);
            // compoundNotation2.textContent = "H202";
            compoundName2.textContent = "Vater2";
            compoundName2.style.fontWeight = "bold";
            compoundDescription2.textContent = "zyciodainy napuj2";
            compoundDescription2.style.padding = "10px 40px 10px 40px";

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

