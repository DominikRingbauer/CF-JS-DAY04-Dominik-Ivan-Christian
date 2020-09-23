function extract(){
	var firstname = document.getElementById("one").value;
	document.getElementById("first").innerHTML = firstname;
	

	var lastname = document.getElementById("two").value;
	document.getElementById("last").innerHTML = lastname;

	var number = document.getElementById("three").value
	document.getElementById("age").innerHTML = number;

	if (firstname.length > 5) {
		document.getElementById("first").style.color = "green";
	} else
		document.getElementById("first").style.color = "red";

}


	


document.getElementById("submit").addEventListener("click",extract,false);





