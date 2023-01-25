// copy texts (e.g. source code pieces) to CLIPBOARD:
// Trzeba stworzy jedn funkcj do tych wszystkich clipboardw!!!

// const copyButton1 = document.querySelector("#clipboardButton1");
// const copyButton2 = document.querySelector("#clipboardButton2");

// const whichButton = (button, sourceCode) => {
//     const copyButton0 = document.createElement("button");
//     copyButton0.innerHTML = "<i class='bi bi-clipboard-check'></i>";        
  
//     button.parentNode.replaceChild(copyButton0, button);
  
//             navigator.clipboard
//                 .writeText(document.getElementById(sourceCode).innerText)
//                 .then(
//                     success => console.log("text copied"), err => console.log("error copying text")
//                 )
// }

// copyButton1.addEventListener("click", whichButton(copyButton1, "sourceCodeClipboard1"));
// copyButton2.addEventListener("click", whichButton(copyButton2, "sourceCodeClipboard2"));


const copyButton1 = document.querySelector("#clipboardButton1");
copyButton1.addEventListener("click", function () {

  const copyButton0 = document.createElement("button");
  copyButton0.innerHTML = "<i class='bi bi-clipboard-check'></i>";        

  copyButton1.parentNode.replaceChild(copyButton0, copyButton1);

          navigator.clipboard
              .writeText(document.getElementById("sourceCodeClipboard1").innerText)
              .then(
                  success => console.log("text copied"), err => console.log("error copying text")
              )
})

const copyButton2 = document.querySelector("#clipboardButton2");
copyButton2.addEventListener("click", function () {

  const copyButton0 = document.createElement("button");
  copyButton0.innerHTML = "<i class='bi bi-clipboard-check'></i>";        

  copyButton2.parentNode.replaceChild(copyButton0, copyButton2);

          navigator.clipboard
              .writeText(document.getElementById("sourceCodeClipboard2").innerText)
              .then(
                  success => console.log("text copied"), err => console.log("error copying text")
              )
})

const copyButton3 = document.querySelector("#clipboardButton3");
copyButton3.addEventListener("click", function () {

  const copyButton0 = document.createElement("button");
  copyButton0.innerHTML = "<i class='bi bi-clipboard-check'></i>";        

  copyButton3.parentNode.replaceChild(copyButton0, copyButton3);

          navigator.clipboard
              .writeText(document.getElementById("sourceCodeClipboard3").innerText)
              .then(
                  success => console.log("text copied"), err => console.log("error copying text")
              )
})


                  