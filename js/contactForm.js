


let name = document.getElementById("name");
let email = document.getElementById("email");
let message = document.getElementById("message");

let alertName = document.getElementById("alertName");
let alertEmail = document.getElementById("alertEmail");
let alertMessage = document.getElementById("alertMessage");

let contactFormButton = document.getElementById("contactFormButton");


document
      .getElementById("myForm")
      .addEventListener("submit", function (event) {
        event.preventDefault();

        const serviceID = "service_fxwx7hj";
        const templateID = "template_bgmpopb";

        if(name.value == ""){

            document.getElementById("alertName").innerHTML = "What's Your name?";
            document.getElementById("name").style.border = "1px solid red";

            name.addEventListener("click", () => {
              document.getElementById("alertName").innerHTML = "";
              document.getElementById("name").style.border = "1px solid #bbb";
            })
            
        } else if (email.value == "")  {

            document.getElementById("alertEmail").innerHTML = "What's Your email address?";
            document.getElementById("email").style.border = "1px solid red";

            email.addEventListener("click", () => {
              document.getElementById("alertEmail").innerHTML = "";
              document.getElementById("email").style.border = "1px solid #bbb";
            })
            
        } else if (message.value == "") {

            document.getElementById("alertMessage").innerHTML = "Please type at least few UTF-8 characters :)";
            document.getElementById("message").style.border = "1px solid red";

            message.addEventListener("click", () => {
              document.getElementById("alertMessage").innerHTML = "";
              document.getElementById("message").style.border = "1px solid #bbb";
            })

        } else {

        contactFormButton.disabled = true;
        
        $(document).ready(function() {
          $("#contactFormButton").css("background-color", "lightgray");
        });

        // send the email here
        emailjs.sendForm(serviceID, templateID, this).then(
          (response) => {

            console.log("SUCCESS!", response.status, response.text);
  
            document.getElementById("myForm").style.display = "none";

            document.getElementById("confirmationSpan").innerHTML = "Thank You for sending the email. It will be attended shortly.";

            document.getElementById("confirmationDiv").style.margin = "70px";

            document.getElementById("confirmationDiv").style.padding = "40px";

          },
          (error) => {
            console.log("FAILED...", error);

            document.getElementById("myForm").style.display = "none";

            document.getElementById("confirmationSpan").innerHTML = "Something went wrong. Either a server thing or just my code...";

            document.getElementById("confirmationDiv").style.margin = "70px";

            document.getElementById("confirmationDiv").style.padding = "40px";
          }
        );

        }
      });

