list1=document.querySelectorAll('.class1');
	
function hideit()
{
		$(this).css('opacity','0');
}
function ask ()
{
	this.style.background='rgba(212,212,212,1.00)';
	this.innerHTML='Unhide?';
	this.onmouseout=normal;
}
function normal ()
{
	this.style.background='white';
	this.innerHTML='';	
}
function dofirst()
{
	for (var i=0;i<list1.length;i++)
	{ 
		list1.item(i).onclick=hideit;
		list1.item(i).onmouseover=ask;
	}
	var b= $('#wrap').position();
	alert(b.left);
}

window.onload=dofirst;