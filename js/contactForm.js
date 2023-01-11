


let name = document.getElementById("name");
let email = document.getElementById("email");
let message = document.getElementById("message");

let alertName = document.getElementById("alertName");
let alertEmail = document.getElementById("alertEmail");
let alertMessage = document.getElementById("alertMessage");

let contactFormButton = document.getElementById("contactFormButton");

// const reg = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/;

const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

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
           
        } else if (!reg.test(email.value)) {
                
          document.getElementById("alertEmail").innerHTML = "There might be a typo in the email address You've provided...";
          document.getElementById("email").style.border = "1px solid red";

          email.addEventListener("click", () => {
            document.getElementById("alertEmail").innerHTML = "";
            document.getElementById("email").style.border = "1px solid #bbb";
          })

        } else if (message.value == "") {

            document.getElementById("alertMessage").innerHTML = "Please type at least one UTF-8 character :)";
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

