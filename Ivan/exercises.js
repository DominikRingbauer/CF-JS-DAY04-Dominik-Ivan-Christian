
function basicOne() {
	var first = document.getElementById("first_name").value;
	var last = document.getElementById("last_name").value;
	var x = document.getElementById("age").value;

	var result = document.getElementById("display").innerHTML = `Your first name is ${first}!  <br>
																Your last name is ${last} ! <br>
																Your age is ${x} ! <br>`;

		if (first.length > 5) {
			document.getElementById("display").style.color = "green";
		}
		else {
			document.getElementById("display").style.color = "red";
		}										

}


document.getElementById("submit").addEventListener("click", basicOne, false);