let homevar=document.getElementById("home");
let skillvar=document.getElementById("skill");
let experiencevar=document.getElementById("experience");
let educationvar=document.getElementById("education");
let portfoliovar=document.getElementById("portfolio");
let contactvar=document.getElementById("Contact");
skillvar.style.display="none";
experiencevar.style.display="none";
educationvar.style.display="none";
portfoliovar.style.display="none";
contactvar.style.display="none";


function myfunctionhome() {
	//var x = document.getElementById("myDIV");
	if (homevar.style.display === "none") {
		homevar.style.display = "block";
		skillvar.style.display = "none";
		experiencevar.style.display = "none";
		educationvar.style.display = "none";
		portfoliovar.style.display = "none";
		contactvar.style.display = "none";
	} 
  } 

  function myfunctionskill() {
	//var x = document.getElementById("myDIV");
	if (skillvar.style.display === "none") {
		skillvar.style.display = "block";
		homevar.style.display = "none";
		experiencevar.style.display = "none";
		educationvar.style.display = "none";
		portfoliovar.style.display = "none";
		contactvar.style.display = "none";
	} 
  } 

function myfunctionexperience()
{
	if (experiencevar.style.display === "none") {
		experiencevar.style.display = "block";
		homevar.style.display = "none";
		skillvar.style.display = "none";
		educationvar.style.display = "none";
		portfoliovar.style.display = "none";
		contactvar.style.display = "none";
	} 
}

function myfunctioneducation()
{
	if (educationvar.style.display === "none") {
		educationvar.style.display = "block";
		homevar.style.display = "none";
		skillvar.style.display = "none";
		experiencevar.style.display = "none";
		portfoliovar.style.display = "none";
		contactvar.style.display = "none";
	} 
}


function myfunctionportfolio()
{
	if (portfoliovar.style.display === "none") {
		portfoliovar.style.display = "block";
		homevar.style.display = "none";
		skillvar.style.display = "none";
		experiencevar.style.display = "none";
		educationvar.style.display = "none";
		contactvar.style.display = "none";
	} 
}

function myfunctioncontact()
{
	if (contactvar.style.display === "none") {
		contactvar.style.display = "block";
		homevar.style.display = "none";
		skillvar.style.display = "none";
		experiencevar.style.display = "none";
		educationvar.style.display = "none";
		portfoliovar.style.display = "none";
	} 
}





setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    document.getElementById("clock").innerHTML = time;
}
showTime();
var count=0;
var scrollabout=document.getElementById('about-main-header');

scrollabout.addEventListener('click',function(event){
	event.preventDefault();
	var coordindates=scrollabout.getBoundingClientRect();
	var id=setInterval(function(){
	window.scrollTo(0,50);
	if(coordindates.top<=0){
		clearInterval(id);
		return;
	}
},50)
});

