// LEAVE COMMENT

let comment;
let button1 = document.getElementById("leaveCommentButton");
let textarea = document.getElementById("leaveCommentTextArea");
let commentDisplay = document.getElementById("commentDisplay");

document.getElementById("leaveCommentButton").onclick = function () {

    comment = textarea.value;
    commentDisplay.innerHTML = `Sorry, but Your comment has not been sent anywhere. <br> It is displayed below instead: <br><br> <i>"${comment}"</i>`;
    
    textarea.value = "";

    commentDisplay.trim();

}