var n=1;

function changetitle()
{
	if (n==1) 
	{document.getElementById("title").innerHTML='The Game';n=0;}
	else 
	{document.getElementById("title").innerHTML='Ktj submission 3';n=1;}
}
function dofirst(){
	setInterval(changetitle,1000);
}
window.onload=dofirst();
