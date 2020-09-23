function extract(){
	var firstname = document.getElementById("one").value;
	document.getElementById("first").innerHTML = firstname;

	var lastname = document.getElementById("two").value;
	document.getElementById("last").innerHTML = lastname;

	var number = document.getElementById("three").value
	document.getElementById("age").innerHTML = number;

	console.log(firstname);
}

document.getElementById("submit").addEventListener("click",extract,false);
