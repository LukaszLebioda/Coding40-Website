<<<<<<< HEAD
// timer

function countdown()
{
	var today = new Date();
		
	var day = today.getDate();
		if (day<10) day = "0"+day;
	var month = today.getMonth()+1;
		if (month<10) month = "0"+month;
	var year = today.getFullYear();
		
	var hour = today.getHours();
		if (hour<10) hour = "0"+hour;
		
	var minute = today.getMinutes();
		if (minute<10) minute = "0"+minute;
		
	var second = today.getSeconds();
		if (second<10) second = "0"+second;
		
	document.getElementById("clock").innerHTML = 
	day+"/"+month+"/"+year+" "+hour+":"+minute+":"+second;
		 
		setTimeout("countdown()",1000);	
}

// przycisk "Git Commit" chowa element na stronie
$(document).ready(function(){
    $("#gitButton").click(function(){
        $(".form").toggle(1500);
    });
});

// ustawia wysokość diva nav i ad względem wysokości diva content
$(document).ready(function(){
    let divHeight = $("#content").height(); 
        $("#nav").css('min-height', divHeight+'px');
    let divHeight2 = $("#content").height(); 
        $("#ad").css('min-height', divHeight2+'px');
});

=======
// timer

function countdown()
{
	var today = new Date();
		
	var day = today.getDate();
		if (day<10) day = "0"+day;
	var month = today.getMonth()+1;
		if (month<10) month = "0"+month;
	var year = today.getFullYear();
		
	var hour = today.getHours();
		if (hour<10) hour = "0"+hour;
		
	var minute = today.getMinutes();
		if (minute<10) minute = "0"+minute;
		
	var second = today.getSeconds();
		if (second<10) second = "0"+second;
		
	document.getElementById("clock").innerHTML = 
	day+"/"+month+"/"+year+" "+hour+":"+minute+":"+second;
		 
		setTimeout("countdown()",1000);	
}

// przycisk "Git Commit" chowa element na stronie
$(document).ready(function(){
    $("#gitButton").click(function(){
        $(".form").toggle(1500);
    });
});

// ustawia wysokość diva nav i ad względem wysokości diva content
$(document).ready(function(){
    let divHeight = $("#content").height(); 
        $("#nav").css('min-height', divHeight+'px');
    let divHeight2 = $("#content").height(); 
        $("#ad").css('min-height', divHeight2+'px');
});

>>>>>>> 8ef211cb77f978ba98ff0d44c6c8228d13100b44
