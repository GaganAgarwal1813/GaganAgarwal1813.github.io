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

