var navbars = document.querySelector(".navbars");
var dropnav =document.querySelector(".dropnav");
var a = document.querySelectorAll("a");
var hash = window.location.hash;



navbars.addEventListener("click", function(){
	dropnav.classList.toggle("globalvisible");
	navbars.classList.toggle("background");

	
});




switch(window.location.href){
	

	case (window.location.origin+"/about"):
		a[6].classList.add("background");
	break;
	
	case (window.location.origin+"/resources"+hash):
		a[7].classList.add("background");
	break;
	
	case (window.location.origin+"/services"):
		a[8].classList.add("background");
	break;
	
	case (window.location.origin+"/schedule"):
		a[9].classList.add("background");
		break;
	
	default: 
	console.log("fail");

	
	
}
