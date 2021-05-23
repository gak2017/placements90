 var i=0,j=0,co=0,w=0;
var a=new Array(20);
var b=[ 36,49950,204,5777.7,45,"wed",2,22,157.80,112,15,22,10,'1/8',20,"book","imp","beak","hate","biased" ];
function fun1(clicked)
{
	a[0]=document.getElementById(clicked).value;
	
	
}
function fun2(clicked)
{
	a[1]=document.getElementById(clicked).value;
	
	}

function fun3(clicked)
{
	a[2]=document.getElementById(clicked).value;
	
	
}

function fun4(clicked)
{
	a[3]=document.getElementById(clicked).value;
	
	
}

function fun5(clicked)
{
	a[4]=document.getElementById(clicked).value;
	
	}

function fun6(clicked)
{
	a[5]=document.getElementById(clicked).value;
	
	
}

function fun7(clicked)
{
	a[6]=document.getElementById(clicked).value;
	
	
}

function fun8(clicked)
{
	a[7]=document.getElementById(clicked).value;
	
	
}

function fun9(clicked)
{
	a[8]=document.getElementById(clicked).value;
	
	
}
function fun10(clicked)
{
	a[9]=document.getElementById(clicked).value;
	
}
function fun11(clicked)
{
a[10]=document.getElementById(clicked).value;
}
function fun12(clicked)
{
a[11]=document.getElementById(clicked).value;
}
function fun13(clicked)
{
a[12]=document.getElementById(clicked).value;
}
function fun14(clicked)
{
a[13]=document.getElementById(clicked).value;
}
function fun15(clicked)
{
a[14]=document.getElementById(clicked).value;
}
function fun16(clicked)
{
a[15]=document.getElementById(clicked).value;
}
function fun17(clicked)
{
a[16]=document.getElementById(clicked).value;
}
function fun18(clicked)
{
a[17]=document.getElementById(clicked).value;
}
function fun19(clicked)
{
a[18]=document.getElementById(clicked).value;
}
function fun20(clicked)
{
a[19]=document.getElementById(clicked).value;
}







function total()
{
	for(var k=0;k<20;k++)
	{
		if(a[k]==b[k])
		{
		co=co+1;
		}
		else
		{
		w=w+1;
		}
	}
}
	
	//document.getElementById("correct").innerHTML="correct answers: "+co;
	//document.getElementById("wrong").innerHTML="wrong answer: "+w;
   
   function to()
   {
        localStorage.setItem("opC",co);
    localStorage.setItem("opW",w);
	if((co+w)==20)
	{
	co=0;
	w=0;
	}
}	