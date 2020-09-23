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
	hotelName = "";
	numberOfNights = "";
	userBooked = "";
	adress = "";
	image = "";
constructor(a, b, c, d, e) {
	this.hotelName = a;
	this.numberOfNights = b;
	this.userBooked = c;
	this.adress = d;
	this.image = e;
}

	showAvailability() {
        if (this.numberOfNights > this.userBooked) {
    	   	document.getElementById("reservation").innerHTML = `I/n´ll reserve` 
       	}
       else {
       		document.getElementById("apology").innerHTML = `Sorry, no available nights for ${this.hotelName} !`
       	}
 		}

	displayHotel() {
			document.getElementById("intermediate_one").innerHTML += `	<h1> ${this.hotelName} </h1>
																		<p> ${this.adress} </p>
																		<h3> ${this.numberOfNights} </h3>
																		<h3> ${this.userBooked} </h3>`;   
	}
};

var hotel1 = new Hotel("Hotel California", 2, 3, "larifari 1", NaN);
hotel1.displayHotel();	
hotel1.showAvailability();



