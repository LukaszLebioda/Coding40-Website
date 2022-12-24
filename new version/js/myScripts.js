const button = document.querySelector("clipboardButton")
button.addEventListener("click", () => {
    
  const copyText = document.getElementById("sourceCodeClipboard");
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  navigator.clipboard.writeText(copyText.value);

  alert("Copied the text: " + copyText.value);
}