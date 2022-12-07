const kwiczol = document.querySelector("#kwiczol");

let radios = document.querySelectorAll('.divBirdRadioButton input[type="radio"]');
let button = document.querySelector('#buttonBirds');

let birdPermutation = [];

button.addEventListener('click', () => {
    if(document.querySelectorAll('.divBirdRadioButton input[type="radio"]:checked').length < 7) {
        alert("something remains unchecked - please go backwards and check");
    } else {

	    for (let radio of radios) {
		    if (radio.checked) {
                birdPermutation.push(radio.value);
                document.getElementById("buttonBirds").disabled = true; 
                console.log(birdPermutation);
                    if(birdPermutation.includes("2") && birdPermutation.includes("7") && birdPermutation.includes("13") && birdPermutation.includes("16")) {
                        document.getElementById("resultBird").innerHTML = "Czyżyk"
                    } else if(birdPermutation.includes("1") && birdPermutation.includes("6") && birdPermutation.includes("12") && birdPermutation.includes("16")) {
                        document.getElementById("resultBird").innerHTML = "Potrzeszcz"
                    } else if(birdPermutation.includes("3") && birdPermutation.includes("8") && birdPermutation.includes("14") && birdPermutation.includes("16")) {
                        document.getElementById("resultBird1").innerHTML = "Kwiczoł "
                        document.getElementById("resultBird2").innerHTML = "Wesoły pożeracz dżdżownic "
                        document.getElementById("resultBird3").innerHTML = "<img src='./img/birds/kwiczol.jpg'>"
                    } else {
                        console.log("Something went wrong");
                    }
                
		    }
	    }
    }
})


