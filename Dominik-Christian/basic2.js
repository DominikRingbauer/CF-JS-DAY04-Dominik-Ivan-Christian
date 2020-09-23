function extract(){
	var firstname = document.getElementById("one").value;
	document.getElementById("first").innerHTML = firstname;
	
	var lastname = document.getElementById("two").value;
	document.getElementById("last").innerHTML = lastname;

	var number = document.getElementById("three").value
    document.getElementById("age").innerHTML = number;
    
    var dropdown =document.getElementById("select").value;
console.log(dropdown)

	if (firstname.length > 5) {
		document.getElementById("first").style.color = "green";
	} else {
        document.getElementById("first").style.color = "red";
    } 
        if ( dropdown == 'Web Developer'){
            document.getElementById("profession").style.backgroundColor = "purple";
        }
          else if (dropdown == 'Hospitality'){   
            document.getElementById("profession").style.backgroundColor = "yellow";
        }

    else { document.getElementById("profession").style.backgroundColor = "white";
        }
}

        document.getElementById("submit").addEventListener("click",extract,false);

   

        

