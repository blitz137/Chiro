window.onload = function() {
	var section =document.querySelectorAll("section");
	var darrow = document.querySelectorAll(".fa-chevron-circle-down");
	var rarrow = document.querySelectorAll(".fa-chevron-circle-right");
	var li =document.querySelectorAll("li");
	var elements =document.querySelectorAll('section');
	var ul = document.querySelectorAll("ul");
	var droprec =document.querySelector(".droprec");
	var hash = window.location.hash;

	if (hash ==""){
		hash = "#article1";
		section[0].classList.add("start");
	}



	for (var i = 0; i < li.length; i++) {
		li[i].addEventListener("click", function(){
		section[0].classList.remove("start");
		});
	}


	for (var i = 0; i < darrow.length; i++) {
		darrow[i].addEventListener("click", function(){
		 	this.classList.toggle("visible");
		 	for (var i = 0; i < darrow.length; i++) {
				if(!darrow[i].classList.contains("visible")){
					rarrow[i].classList.add("visible");
					ul[i].classList.remove("visible");
				}	
			}

		});
	}
	for (var i = 0; i < rarrow.length; i++) {
	 rarrow[i].addEventListener("click", function(){
	 	this.classList.toggle("visible");
	 	for (var i = 0; i < rarrow.length; i++) {
				if(!rarrow[i].classList.contains("visible")){
					darrow[i].classList.add("visible");
					ul[i].classList.add("visible");
				}	
			}
	 });
	}
document.querySelector('a[href="' + hash + '"]').parentNode.parentNode.parentNode.querySelector(".fa-chevron-circle-right").click();

droprec.removeAttribute("style");


};

