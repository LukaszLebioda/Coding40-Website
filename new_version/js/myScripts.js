// copy texts (e.g. source code pieces) to CLIPBOARD:
const copyButton = document.querySelector("#clipboardButton");
copyButton.addEventListener("click", function () {

  const copyButton2 = document.createElement("button");
  copyButton2.innerHTML = "<i class='bi bi-clipboard-check'></i>";        

  copyButton.parentNode.replaceChild(copyButton2, copyButton);

          navigator.clipboard
              .writeText(document.getElementById("sourceCodeClipboard").innerText)
              .then(
                  success => console.log("text copied"), err => console.log("error copying text")
              )
})


                  