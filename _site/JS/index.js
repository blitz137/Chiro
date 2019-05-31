var leftclick = document.querySelector(".fa-chevron-circle-left");
var rightclick = document.querySelector(".fa-chevron-circle-right");
var reviewp = document.querySelectorAll(".reviewp"), i;
var num =0;



leftclick.addEventListener("click", function(){
	num= num-1;
	if(num===-1){
		num = reviewp.length-1;
	}
	for(i =0; i<reviewp.length; i++){
	
	
 reviewp[i].classList.remove("visible");


	
}
	reviewp[num].classList.add("visible");

});

rightclick.addEventListener("click", function(){
	num= num+1;
	if(num == reviewp.length){
		num=0;
	}
	for(i =0; i<reviewp.length; i++){
	reviewp[i].classList.remove("visible");
	
}
	reviewp[num].classList.add("visible");

});

reviewp[num].classList.add("visible");


var myVar = setInterval(myTimer, 17000);


	
function myTimer() {
 reviewp[num].classList.add("fadeout");
 num= num+1;
	if(num >= reviewp.length){
		num=0;
	}
	
	
setTimeout(theOneFunc, 3 * 1000, 3);
	
		
  	}







const theOneFunc = delay => {
	for(i =0; i<reviewp.length; i++){
	reviewp[i].classList.remove("visible");
	reviewp[i].classList.remove("fadeout");
}

 reviewp[num].classList.add("visible");
};


