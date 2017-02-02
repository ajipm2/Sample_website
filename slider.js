var imageCount = 1;
var total = 6;

function photo(x) {
	var image = document.getElementById('image');
	imageCount = imageCount + x;
	if(imageCount > total)
	{imageCount = 1;}
	if(imageCount < 1)
	{imageCount = total;}	
	image.src = "../images/m"+ imageCount +".jpg";
	}
	
window.setInterval(function photoA() {
	var image = document.getElementById('image');
	imageCount = imageCount + 1;
	if(imageCount > total)
	{imageCount = 1;}
	if(imageCount < 1)
	{imageCount = total;}	
	image.src = "../images/m"+ imageCount +".jpg";
	},4500);