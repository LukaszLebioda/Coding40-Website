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
function disableAllMasters() {
    elementsMasters.forEach(element => {
        element.setAttribute("disabled", "disabled");
        element.style.color = "black";
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

disableAll();
enableAllMasters();

//------------------------------------------------------------------------------

// REMIX BUTTON

alchemyButton.onclick = function () {

    disableAll()
    enableAllMasters()

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

    elementMaster.removeChild(elementMaster.firstChild);
    elementPartner.removeChild(elementPartner.firstChild);
    compoundName1.removeChild(compoundName1.firstChild);
    compoundName1.removeChild(compoundName1.lastChild);
    compoundName2.removeChild(compoundName2.firstChild);
    compoundName2.removeChild(compoundName2.lastChild);
    compoundName3.removeChild(compoundName3.firstChild);
    compoundName3.removeChild(compoundName3.lastChild);
    compoundName4.removeChild(compoundName4.firstChild);
    compoundName4.removeChild(compoundName4.lastChild);
    compoundName5.removeChild(compoundName5.firstChild);
    compoundName5.removeChild(compoundName5.lastChild);

    this.disabled = true;

};

//------------------------------------------------------------------------------------

// ***** WODÓR MASTER ***** //

wodorMaster.onclick = function() {

    disableAll()
    enableAllPartners();
    this.style.backgroundColor = "red";
    this.style.transform = "scale(1.5)";

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

    const elementMaster = document.querySelector("#elementMaster");
    const elementMasterName = document.createElement("h5");
    elementMaster.append(elementMasterName);
    elementMasterName.textContent = "HYDROGEN (H)";
    elementMasterName.style.fontWeight = "bold";

        // PARTNER ELEMENT 1
        tlenPartner.onclick = function() {

            disableAll()
            alchemyButton.disabled = false;
            
            azotPartner.style.backgroundColor = "skyblue";
            chlorPartner.style.backgroundColor = "#FECDFC";
            siarkaPartner.style.backgroundColor = "skyblue";

            const elementPartner = document.querySelector("#elementPartner");
            const elementPartnerName = document.createElement("h5");
            elementPartner.append(elementPartnerName);
            elementPartnerName.textContent = "OXYGEN (O)";
            elementPartnerName.style.fontWeight = "bold";
           
            const compound1 = document.querySelector("#compoundName1");
            const compoundName1 = document.createElement("h5");
            const compoundDescription1 = document.createElement("h6");
            compound1.append(compoundName1, compoundDescription1);
            compoundName1.innerHTML = "WATER (H<sub>2</sub>O)";
            compoundName1.style.fontWeight = "bold";
            compoundDescription1.innerHTML = "71% of the surface of the Earth lies underwater. 60-75% human bodyweight is water. Water was brought to Earth by asteroids billions of years ago. It's the environment where life first appeared and started to evolve.<hr>";
            compoundDescription1.style.padding = "10px 20px 10px 20px";

            const compound2 = document.querySelector("#compoundName2");
            const compoundName2 = document.createElement("h5");
            const compoundDescription2 = document.createElement("h6");
            compound2.append(compoundName2, compoundDescription2);
            compoundName2.innerHTML = "HYDROGEN PEROXIDE (H<sub>2</sub>O<sub>2</sub>)";
            compoundName2.style.fontWeight = "bold";
            compoundDescription2.innerHTML = "Low-concentrated solution is friendly as it cleans minor wounds. Medium-concentrated solution becomes a bleach used at hairdressers' to brighten hair. High-concentrated one becomes very toxic and is used only in the industry (e.g. in the production of rocket and submarine fuel).";
            compoundDescription2.style.padding = "10px 20px 10px 20px";

            const compound3 = document.querySelector("#compoundName3");
            const compoundName3 = document.createElement("h5");
            const compoundDescription3 = document.createElement("h6");
            compound3.append(compoundName3, compoundDescription3);
            compoundName3.innerHTML = "";
            compoundName3.style.fontWeight = "bold";
            compoundDescription3.innerHTML = "";
            compoundDescription3.style.padding = "";

            const compound4 = document.querySelector("#compoundName4");
            const compoundName4 = document.createElement("h5");
            const compoundDescription4 = document.createElement("h6");
            compound4.append(compoundName4, compoundDescription4);
            compoundName4.innerHTML = "";
            compoundName4.style.fontWeight = "bold";
            compoundDescription4.innerHTML = "";
            compoundDescription4.style.padding = "";

            const compound5 = document.querySelector("#compoundName5");
            const compoundName5 = document.createElement("h5");
            const compoundDescription5 = document.createElement("h6");
            compound5.append(compoundName5, compoundDescription5);
            compoundName5.innerHTML = "";
            compoundName5.style.fontWeight = "bold";
            compoundDescription5.innerHTML = "";
            compoundDescription5.style.padding = "";

        }

        // PARTNER ELEMENT 2
        chlorPartner.onclick = function() {

            disableAll()
            alchemyButton.disabled = false;
            
            azotPartner.style.backgroundColor = "skyblue";
            tlenPartner.style.backgroundColor = "skyblue";
            siarkaPartner.style.backgroundColor = "skyblue";

            const elementPartner = document.querySelector("#elementPartner");
            const elementPartnerName = document.createElement("h5");
            elementPartner.append(elementPartnerName);
            elementPartnerName.textContent = "CHLORINE (Cl)";
            elementPartnerName.style.fontWeight = "bold";

            const compound1 = document.querySelector("#compoundName1");
            const compoundName1 = document.createElement("h5");
            const compoundDescription1 = document.createElement("h6");
            compound1.append(compoundName1, compoundDescription1);
            compoundName1.innerHTML = "HYDROCHLORIC ACID (HCl)";
            compoundName1.style.fontWeight = "bold";
            compoundDescription1.innerHTML = "One of the strongest inorganic acids and at the same time an important digestive factor present in every mammal's stomach (humans included). Broadly used in the industry (metalworking, food industry etc.) as well as in the underground production of illegal drugs.";
            compoundDescription1.style.padding = "10px 20px 10px 20px";

            const compound2 = document.querySelector("#compoundName2");
            const compoundName2 = document.createElement("h5");
            const compoundDescription2 = document.createElement("h6");
            compound2.append(compoundName2, compoundDescription2);
            compoundName2.innerHTML = "";
            compoundName2.style.fontWeight = "bold";
            compoundDescription2.innerHTML = "";
            compoundDescription2.style.padding = "";

             const compound3 = document.querySelector("#compoundName3");
             const compoundName3 = document.createElement("h5");
             const compoundDescription3 = document.createElement("h6");
             compound3.append(compoundName3, compoundDescription3);
             compoundName3.innerHTML = "";
             compoundName3.style.fontWeight = "bold";
             compoundDescription3.innerHTML = "";
             compoundDescription3.style.padding = "";
 
             const compound4 = document.querySelector("#compoundName4");
             const compoundName4 = document.createElement("h5");
             const compoundDescription4 = document.createElement("h6");
             compound4.append(compoundName4, compoundDescription4);
             compoundName4.innerHTML = "";
             compoundName4.style.fontWeight = "bold";
             compoundDescription4.innerHTML = "";
             compoundDescription4.style.padding = "";
 
             const compound5 = document.querySelector("#compoundName5");
             const compoundName5 = document.createElement("h5");
             const compoundDescription5 = document.createElement("h6");
             compound5.append(compoundName5, compoundDescription5);
             compoundName5.innerHTML = "";
             compoundName5.style.fontWeight = "bold";
             compoundDescription5.innerHTML = "";
             compoundDescription5.style.padding = "";
            
        }

        // PARTNER ELEMENT 3
        siarkaPartner.onclick = function() {

            disableAll()
            alchemyButton.disabled = false;
            
            azotPartner.style.backgroundColor = "skyblue";
            tlenPartner.style.backgroundColor = "skyblue";
            chlorPartner.style.backgroundColor = "#FECDFC";

            const elementPartner = document.querySelector("#elementPartner");
            const elementPartnerName = document.createElement("h5");
            elementPartner.append(elementPartnerName);
            elementPartnerName.textContent = "SULFUR (S)";
            elementPartnerName.style.fontWeight = "bold";

            const compound1 = document.querySelector("#compoundName1");
            const compoundName1 = document.createElement("h5");
            const compoundDescription1 = document.createElement("h6");
            compound1.append(compoundName1, compoundDescription1);
            compoundName1.innerHTML = "HYDROGEN SULFIDE (H<sub>2</sub>S)";
            compoundName1.style.fontWeight = "bold";
            compoundDescription1.innerHTML = "Toxic and poisonous, but luckily tends to warn its surroundings by spreading a very unpleasant smell of rotten eggs. Sometimes escapes its underground hideouts (gas deposits, mineral waters etc.), especially in the proximity of active volcanoes or some hot springs.";
            compoundDescription1.style.padding = "10px 20px 10px 20px";

            const compound2 = document.querySelector("#compoundName2");
            const compoundName2 = document.createElement("h5");
            const compoundDescription2 = document.createElement("h6");
            compound2.append(compoundName2, compoundDescription2);
            compoundName2.innerHTML = "";
            compoundName2.style.fontWeight = "bold";
            compoundDescription2.innerHTML = "";
            compoundDescription2.style.padding = "";

             const compound3 = document.querySelector("#compoundName3");
             const compoundName3 = document.createElement("h5");
             const compoundDescription3 = document.createElement("h6");
             compound3.append(compoundName3, compoundDescription3);
             compoundName3.innerHTML = "";
             compoundName3.style.fontWeight = "bold";
             compoundDescription3.innerHTML = "";
             compoundDescription3.style.padding = "";
 
             const compound4 = document.querySelector("#compoundName4");
             const compoundName4 = document.createElement("h5");
             const compoundDescription4 = document.createElement("h6");
             compound4.append(compoundName4, compoundDescription4);
             compoundName4.innerHTML = "";
             compoundName4.style.fontWeight = "bold";
             compoundDescription4.innerHTML = "";
             compoundDescription4.style.padding = "";
 

             const compound5 = document.querySelector("#compoundName5");
             const compoundName5 = document.createElement("h5");
             const compoundDescription5 = document.createElement("h6");
             compound5.append(compoundName5, compoundDescription5);
             compoundName5.innerHTML = "";
             compoundName5.style.fontWeight = "bold";
             compoundDescription5.innerHTML = "";
             compoundDescription5.style.padding = "";

        }     

        azotPartner.onclick = function() {

            disableAll()
            alchemyButton.disabled = false;
            
            tlenPartner.style.backgroundColor = "skyblue";
            chlorPartner.style.backgroundColor = "#FECDFC";
            siarkaPartner.style.backgroundColor = "skyblue";

            const elementPartner = document.querySelector("#elementPartner");
            const elementPartnerName = document.createElement("h5");
            elementPartner.append(elementPartnerName);
            elementPartnerName.textContent = "NITROGEN (N)";
            elementPartnerName.style.fontWeight = "bold";
           
            const compound1 = document.querySelector("#compoundName1");
            const compoundName1 = document.createElement("h5");
            const compoundDescription1 = document.createElement("h6");
            compound1.append(compoundName1, compoundDescription1);
            compoundName1.innerHTML = "AMMONIA (NH<sub>3</sub>)";
            compoundName1.style.fontWeight = "bold";
            compoundDescription1.innerHTML = "A gas of strong, recognizable smell that can irritate both eyes and nose. Used in the production of fertilizers, as well as explosives, cosmetics and fabrics. Since the Middle Ages known a useful cleaning agent (metal parts, greasy stains etc.).<hr>";
            compoundDescription1.style.padding = "10px 20px 10px 20px";

            const compound2 = document.querySelector("#compoundName2");
            const compoundName2 = document.createElement("h5");
            const compoundDescription2 = document.createElement("h6");
            compound2.append(compoundName2, compoundDescription2);
            compoundName2.innerHTML = "HYDRAZINE (N<sub>2</sub>H<sub>4</sub>)";
            compoundName2.style.fontWeight = "bold";
            compoundDescription2.innerHTML = "Extremely poisonous, corrosive, flammable and carcinogenic. Used as space rocket and submarine fuel as well as a DNA sequencing agent.";
            compoundDescription2.style.padding = "10px 20px 10px 20px";

            const compound3 = document.querySelector("#compoundName3");
            const compoundName3 = document.createElement("h5");
            const compoundDescription3 = document.createElement("h6");
            compound3.append(compoundName3, compoundDescription3);
            compoundName3.innerHTML = "";
            compoundName3.style.fontWeight = "bold";
            compoundDescription3.innerHTML = "";
            compoundDescription3.style.padding = "";

            const compound4 = document.querySelector("#compoundName4");
            const compoundName4 = document.createElement("h5");
            const compoundDescription4 = document.createElement("h6");
            compound4.append(compoundName4, compoundDescription4);
            compoundName4.innerHTML = "";
            compoundName4.style.fontWeight = "bold";
            compoundDescription4.innerHTML = "";
            compoundDescription4.style.padding = "";

            const compound5 = document.querySelector("#compoundName5");
            const compoundName5 = document.createElement("h5");
            const compoundDescription5 = document.createElement("h6");
            compound5.append(compoundName5, compoundDescription5);
            compoundName5.innerHTML = "";
            compoundName5.style.fontWeight = "bold";
            compoundDescription5.innerHTML = "";
            compoundDescription5.style.padding = "";

        }
}

// -----------------------------------------------------------------------------------------

// ***** SIARKA MASTER ***** //

siarkaMaster.onclick = function() {

    disableAll()
    enableAllPartners();
    this.style.backgroundColor = "red";
    this.style.transform = "scale(1.5)";
   
    wodorPartner.style.display = "block"; 
    wodorPartner.style.backgroundColor = "red"; 
    wodorMaster.style.display = "none"; 

    tlenPartner.style.display = "block"; 
    tlenPartner.style.backgroundColor = "red";
    tlenMaster.style.display = "none"; 

    const elementMaster = document.querySelector("#elementMaster");
    const elementMasterName = document.createElement("h5");
    elementMaster.append(elementMasterName);
    elementMasterName.textContent = "SULFUR (S)";
    elementMasterName.style.fontWeight = "bold";

        // PARTNER ELEMENT 1 
        wodorPartner.onclick = function() {

            disableAll()
            alchemyButton.disabled = false;
            
            tlenPartner.style.backgroundColor = "skyblue";

            const elementPartner = document.querySelector("#elementPartner");
            const elementPartnerName = document.createElement("h5");
            elementPartner.append(elementPartnerName);
            elementPartnerName.textContent = "HYDROGEN (O)";
            elementPartnerName.style.fontWeight = "bold";

            const compound1 = document.querySelector("#compoundName1");
            const compoundName1 = document.createElement("h5");
            const compoundDescription1 = document.createElement("h6");
            compound1.append(compoundName1, compoundDescription1);
            compoundName1.innerHTML = "HYDROGEN SULFIDE (H<sub>2</sub>S)";
            compoundName1.style.fontWeight = "bold";
            compoundDescription1.innerHTML = "Toxic and poisonous, but luckily tends to warn its surroundings by spreading a very unpleasant smell of rotten eggs. Sometimes escapes its underground hideouts (gas deposits, mineral waters etc.), especially in the proximity of active volcanoes or some hot springs.";
            compoundDescription1.style.padding = "10px 20px 10px 20px";

            const compound2 = document.querySelector("#compoundName2");
            const compoundName2 = document.createElement("h5");
            const compoundDescription2 = document.createElement("h6");
            compound2.append(compoundName2, compoundDescription2);
            compoundName2.innerHTML = "";
            compoundName2.style.fontWeight = "bold";
            compoundDescription2.innerHTML = "";
            compoundDescription2.style.padding = "";

             const compound3 = document.querySelector("#compoundName3");
             const compoundName3 = document.createElement("h5");
             const compoundDescription3 = document.createElement("h6");
             compound3.append(compoundName3, compoundDescription3);
             compoundName3.innerHTML = "";
             compoundName3.style.fontWeight = "bold";
             compoundDescription3.innerHTML = "";
             compoundDescription3.style.padding = "";
 
             const compound4 = document.querySelector("#compoundName4");
             const compoundName4 = document.createElement("h5");
             const compoundDescription4 = document.createElement("h6");
             compound4.append(compoundName4, compoundDescription4);
             compoundName4.innerHTML = "";
             compoundName4.style.fontWeight = "bold";
             compoundDescription4.innerHTML = "";
             compoundDescription4.style.padding = "";
 
             const compound5 = document.querySelector("#compoundName5");
             const compoundName5 = document.createElement("h5");
             const compoundDescription5 = document.createElement("h6");
             compound5.append(compoundName5, compoundDescription5);
             compoundName5.innerHTML = "";
             compoundName5.style.fontWeight = "bold";
             compoundDescription5.innerHTML = "";
             compoundDescription5.style.padding = "";

        }

        // PARTNER ELEMENT 2 
        tlenPartner.onclick = function() {

            disableAll()
            alchemyButton.disabled = false;
            
            wodorPartner.style.backgroundColor = "lightblue";

            const elementPartner = document.querySelector("#elementPartner");
            const elementPartnerName = document.createElement("h5");
            elementPartner.append(elementPartnerName);
            elementPartnerName.textContent = "OXYGEN (O)";
            elementPartnerName.style.fontWeight = "bold";

            const compound1 = document.querySelector("#compoundName1");
            const compoundName1 = document.createElement("h5");
            const compoundDescription1 = document.createElement("h6");
            compound1.append(compoundName1, compoundDescription1);
            compoundName1.innerHTML = "SULFUR DIOXIDE (SO<sub>2</sub>)";
            compoundName1.style.fontWeight = "bold";
            compoundDescription1.innerHTML = "A toxic gas that is being released to the atmosphere naturally by volcanic activity as well as the side effect of fossil fuels combustion and thus contributes to the global warming effect. Mixed with water creates a sulfuric acid clouds that can fall down as acid rain. A significant part of Venus's atmosphere.";
            compoundDescription1.style.padding = "10px 20px 10px 20px";

            const compound2 = document.querySelector("#compoundName2");
            const compoundName2 = document.createElement("h5");
            const compoundDescription2 = document.createElement("h6");
            compound2.append(compoundName2, compoundDescription2);
            compoundName2.innerHTML = "";
            compoundName2.style.fontWeight = "bold";
            compoundDescription2.innerHTML = "";
            compoundDescription2.style.padding = "";

             const compound3 = document.querySelector("#compoundName3");
             const compoundName3 = document.createElement("h5");
             const compoundDescription3 = document.createElement("h6");
             compound3.append(compoundName3, compoundDescription3);
             compoundName3.innerHTML = "";
             compoundName3.style.fontWeight = "bold";
             compoundDescription3.innerHTML = "";
             compoundDescription3.style.padding = "";
 
             const compound4 = document.querySelector("#compoundName4");
             const compoundName4 = document.createElement("h5");
             const compoundDescription4 = document.createElement("h6");
             compound4.append(compoundName4, compoundDescription4);
             compoundName4.innerHTML = "";
             compoundName4.style.fontWeight = "bold";
             compoundDescription4.innerHTML = "";
             compoundDescription4.style.padding = "";
 
             const compound5 = document.querySelector("#compoundName5");
             const compoundName5 = document.createElement("h5");
             const compoundDescription5 = document.createElement("h6");
             compound5.append(compoundName5, compoundDescription5);
             compoundName5.innerHTML = "";
             compoundName5.style.fontWeight = "bold";
             compoundDescription5.innerHTML = "";
             compoundDescription5.style.padding = "";

        }
}

//-----------------------------------------------------------------------------------------

// ***** AZOT MASTER ***** //

azotMaster.onclick = function() {

    disableAll()
    enableAllPartners();
    this.style.backgroundColor = "red";
    this.style.transform = "scale(1.5)";

    wodorPartner.style.display = "block";
    wodorPartner.style.backgroundColor = "red";
    wodorMaster.style.display = "none";

    tlenPartner.style.display = "block";
    tlenPartner.style.backgroundColor = "red";
    tlenMaster.style.display = "none";

    const elementMaster = document.querySelector("#elementMaster");
    const elementMasterName = document.createElement("h5");
    const elementMasterDescription = document.createElement("h6");
    elementMaster.append(elementMasterName);
    elementMasterName.textContent = "NITROGEN (N)";
    elementMasterName.style.fontWeight = "bold";

        // PARTNER ELEMENT 1
        tlenPartner.onclick = function() {

            disableAll()
            alchemyButton.disabled = false;
            
            wodorPartner.style.backgroundColor = "lightblue";

            const elementPartner = document.querySelector("#elementPartner");
            const elementPartnerName = document.createElement("h5");
            elementPartner.append(elementPartnerName);
            elementPartnerName.textContent = "OXYGEN (O)";
            elementPartnerName.style.fontWeight = "bold";

            const compound1 = document.querySelector("#compoundName1");
            const compoundName1 = document.createElement("h5");
            const compoundDescription1 = document.createElement("h6");
            compound1.append(compoundName1, compoundDescription1);
            compoundName1.innerHTML = "NITRIC OXIDE (NO)";
            compoundName1.style.fontWeight = "bold";
            compoundDescription1.innerHTML = "An important compound produced by humans and other mammals. It regulates the blood pressure and stimulates the proper muscle nourishment and oxigenation, hence it's very important for fit & active persons.";
            compoundDescription1.style.padding = "10px 20px 10px 20px";

            const compound2 = document.querySelector("#compoundName2");
            const compoundName2 = document.createElement("h5");
            const compoundDescription2 = document.createElement("h6");
            compound2.append(compoundName2, compoundDescription2);
            compoundName2.innerHTML = "";
            compoundName2.style.fontWeight = "bold";
            compoundDescription2.innerHTML = "";
            compoundDescription2.style.padding = "";

            const compound3 = document.querySelector("#compoundName3");
            const compoundName3 = document.createElement("h5");
            const compoundDescription3 = document.createElement("h6");
            compound3.append(compoundName3, compoundDescription3);
            compoundName3.innerHTML = "";
            compoundName3.style.fontWeight = "bold";
            compoundDescription3.innerHTML = "";
            compoundDescription3.style.padding = "";

            const compound4 = document.querySelector("#compoundName4");
            const compoundName4 = document.createElement("h5");
            const compoundDescription4 = document.createElement("h6");
            compound4.append(compoundName4, compoundDescription4);
            compoundName4.innerHTML = "";
            compoundName4.style.fontWeight = "bold";
            compoundDescription4.innerHTML = "";
            compoundDescription4.style.padding = "";

            const compound5 = document.querySelector("#compoundName5");
            const compoundName5 = document.createElement("h5");
            const compoundDescription5 = document.createElement("h6");
            compound5.append(compoundName5, compoundDescription5);
            compoundName5.innerHTML = "";
            compoundName5.style.fontWeight = "bold";
            compoundDescription5.innerHTML = "";
            compoundDescription5.style.padding = "";

        }

        // PARTNER ELEMENT 2
        wodorPartner.onclick = function() {

            disableAll()
            alchemyButton.disabled = false;
            
            tlenPartner.style.backgroundColor = "skyblue";

            const elementPartner = document.querySelector("#elementPartner");
            const elementPartnerName = document.createElement("h5");
            elementPartner.append(elementPartnerName);
            elementPartnerName.textContent = "HYDROGEN (H)";
            elementPartnerName.style.fontWeight = "bold";

            const compound1 = document.querySelector("#compoundName1");
            const compoundName1 = document.createElement("h5");
            const compoundDescription1 = document.createElement("h6");
            compound1.append(compoundName1, compoundDescription1);
            compoundName1.innerHTML = "AMMONIA (NH<sub>3</sub>)";
            compoundName1.style.fontWeight = "bold";
            compoundDescription1.innerHTML = "A gas of strong, recognizable smell that can irritate both eyes and nose. Used in the production of fertilizers, as well as explosives, cosmetics and fabrics. Since the Middle Ages known a useful cleaning agent (metal parts, greasy stains etc.).";
            compoundDescription1.style.padding = "10px 20px 10px 20px";

            const compound2 = document.querySelector("#compoundName2");
            const compoundName2 = document.createElement("h5");
            const compoundDescription2 = document.createElement("h6");
            compound2.append(compoundName2, compoundDescription2);
            compoundName2.innerHTML = "";
            compoundName2.style.fontWeight = "bold";
            compoundDescription2.innerHTML = "";
            compoundDescription2.style.padding = "";

            const compound3 = document.querySelector("#compoundName3");
            const compoundName3 = document.createElement("h5");
            const compoundDescription3 = document.createElement("h6");
            compound3.append(compoundName3, compoundDescription3);
            compoundName3.innerHTML = "";
            compoundName3.style.fontWeight = "bold";
            compoundDescription3.innerHTML = "";
            compoundDescription3.style.padding = "";

            const compound4 = document.querySelector("#compoundName4");
            const compoundName4 = document.createElement("h5");
            const compoundDescription4 = document.createElement("h6");
            compound4.append(compoundName4, compoundDescription4);
            compoundName4.innerHTML = "";
            compoundName4.style.fontWeight = "bold";
            compoundDescription4.innerHTML = "";
            compoundDescription4.style.padding = "";

            const compound5 = document.querySelector("#compoundName5");
            const compoundName5 = document.createElement("h5");
            const compoundDescription5 = document.createElement("h6");
            compound5.append(compoundName5, compoundDescription5);
            compoundName5.innerHTML = "";
            compoundName5.style.fontWeight = "bold";
            compoundDescription5.innerHTML = "";
            compoundDescription5.style.padding = "";

        }

    }