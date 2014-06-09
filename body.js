list1=document.querySelectorAll('.class1');
var score=100;
var ans='pirates of the carebian';
var cans='';
	
function hideit()
{
		$(this).css("transform-style",'preserve-3d');
		$(this).css("transform-origin",'top');
		$(this).css('transform','scaleY(0)');
		score-=10;
		updtscr();
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
function updtscr()
{	$('#score').html('Score is'+score);}
function checkans ()
{	var sans= document.getElementById('answer').value;
	cans=sans.toLowerCase();
	if (cans==ans) {alert('super your score is '+score); reload() ;}
	else alert('nope');	
}
function dofirst()
{
	for (var i=0;i<list1.length;i++)
	{ 
		list1.item(i).onclick=hideit;
		list1.item(i).onmouseover=ask;
	}
	updtscr();
	document.getElementById('chec').onclick=checkans;
}


window.onload=dofirst;
