var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 3000;	// Time Between Switch
	 
// Image List
images[0] = "https://picsum.photos/800/400?random=1";
images[1] = "https://picsum.photos/800/400?random=2";
images[2] = "https://picsum.photos/800/400?random=3";
images[3] = "https://picsum.photos/800/400?random=4";

// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;

//Form Validation
const name = document.getElementById('name');
const email = document.getElementById('email');
const travel = document.getElementById('travel');
const form = document.getElementById('form');

const name_error = document.getElementById('name_error');
const email_error = document.getElementById('email_error');
const travel_error = document.getElementById('travel_error');

form.addEventListener('submit',(e)=>
    {  
    
    
       var email_check = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    
       if(name.value === '' || name.value == null)
    
       {
          e.preventDefault();
          name_error.innerHTML = "Name is required!";
       }
    
    
       else
       {
          name_error.innerHTML = "";
       }

       if(!email.value.match(email_check))
        {
           e.preventDefault();
           email_error.innerHTML = "Valid Email is required!";
     
        }
     
        else
        {
           email_error.innerHTML = "";
        }

        if(travel.value === '' || travel.value == null)

        {
            e.preventDefault();
            travel_error.innerHTML = "Please select an options!";
        }
         
         
        else
        {
            travel_error.innerHTML = "";
        }

    })