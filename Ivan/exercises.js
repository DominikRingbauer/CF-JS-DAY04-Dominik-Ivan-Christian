/* 	Basic
	Basic Exercise 1 + 2 */

function basicOne() {
	var first = document.getElementById("first_name").value;
	var last = document.getElementById("last_name").value;
	var x = document.getElementById("age").value;

	var options = document.getElementById("exercise_two").value;

	var result = document.getElementById("display").innerHTML = `Your first name is ${first}!  <br>
																Your last name is ${last} ! <br>
																Your age is ${x} ! <br>
																Your profession is ${options}`;

		if (first.length > 5) {
			document.getElementById("display").style.color = "green";
		}
		else {
			document.getElementById("display").style.color = "red";
		}										

		if (options == 'IT') {
			document.getElementById("display").style.color = "purple";
		}
		else if (options == 'Hospitality') {
			document.getElementById("display").style.color = "yellow";
		}
		else {
			document.getElementById("display").style.color = "blue";
		}
}

document.getElementById("submit").addEventListener("click", basicOne, false);



/* 	Intermediate
	Intermediate exercise 1 | Hotels */

class Hotel {
	hotelName: "";
	numberOfNights: "";
	adress: "";
	image: "";



	showAvailability: function() {

	}
}