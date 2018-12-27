var square=document.querySelectorAll(".square");
var n=6;
refresh();
document.querySelector("#new_button").addEventListener("click",refresh);
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");
easy.addEventListener("click",function () {
	if(n!=3)
	{
		allsquareSame("#232323");
		n=3;
		refresh();
		this.classList.add("selected");
		hard.classList.remove("selected");
	}
});
hard.addEventListener("click",function () {
	if(n!=6)
	{
		n=6;
		refresh();
		this.classList.add("selected");
		easy.classList.remove("selected");
	}
});
for(var i=0;i<square.length;i++)
{
	square[i].addEventListener("click",function() {
		var clickedColor=this.style.backgroundColor;
			//console.log(clickedColor, pickedColor)
		if (pickedColor===clickedColor) {
			allsquareSame(pickedColor);
			document.querySelector(".jumbotron").style.backgroundColor=pickedColor;
			document.querySelector("#new_button").innerHTML= "<b>PLAY AGAIN?</b>";
			document.querySelector("#centre").textContent="Sahi aa veere!!!";
		}
		else
		{
			this.style.backgroundColor="#232323";
			document.querySelector("#centre").textContent="try again!!!";	
		}
		
	});
}

function randomColor(n) {
	color=[];
	for (var i = 0; i < n; i++) {
		var r=Math.floor(Math.random()*256);
		var g=Math.floor(Math.random()*256);
		var b=Math.floor(Math.random()*256);
		color.push("rgb("+r+", "+g+", "+b+")");
		}
	return color;
}
function allsquareSame(Color) {
	for (var i = 0; i < color.length; i++) {
		square[i].style.backgroundColor=Color;
	}
}
function equates() {
	for (var i = 0; i < color.length; i++) {
	square[i].style.backgroundColor=color[i];
}
}
function refresh () {
	document.querySelector(".jumbotron").style.backgroundColor= "RGBA(150, 131, 150, 1)";
	document.querySelector("#centre").textContent="";
	color=randomColor(n); 
	pickedColor=color[Math.floor(Math.random()*n)];
	equates();
	document.querySelector("h1").textContent="RGB"+pickedColor.slice(3);
	document.querySelector("#new_button").innerHTML= "<b>NEW COLORS</b>";
}