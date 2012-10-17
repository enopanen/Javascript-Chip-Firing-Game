var cArr = new Array();
cArr[0] = "#0000FF";
cArr[1] = "#3333FF";
cArr[2] = "#3366FF";
cArr[3] = "#3399FF";
cArr[4] = "#6699FF";
cArr[5] = "#66CCFF";
cArr[6] = "#99CCFF";
cArr[7] = "#CCCCFF";
cArr[8] = "#FF99CC";
cArr[9] = "#FF6699";
cArr[10] = "#FF6633";
cArr[11] = "#FF6600";
cArr[12] = "#FF3366";
cArr[13] = "#FF0000";

var tArr = new Array();

for(i = 0; i < 900; i++)
{
	tArr[i] = "#3333FF";
}//end for

var numsVisible = new Boolean();
numsVisible = false;
var clickCount = 0;
var z = 0;
var hlButt = 0;

function createGrid()
{
	document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"styles/p2.css\">");  
	document.write("<script src=\"scriptsP2.js\"></script>");
	document.write("<header><h2 id=\"chipNum\">Chip Fire and Water Grid (0)</h2></header>");

	document.write("<aside id=\"left\"> <h2>The Rules</h2>");
	document.write("<p>1. If a cell has a value < 6, its NE, SE, NW and SW neighbors will try and give it 2 chips each if they are able.</p>");
	document.write("<p>2. If a cell has a value > 5, it will try and give all of it's chips away to it's N, E, S and W neighbor's if possible.</p>");
	document.write("<p>3. A cell with a value > 6 will throw all of its chips away to the cells W and E even if there is nothing there. If a neighbor already has too many it will throw them back.</p>");
	document.write("<p>4. A cell with a value < 5 will try and steal chips from its neighbors to the N and S and also their neighbors as well.</p>");
	document.write("</aside>");

	document.write("<aside id=\"right\"> <h2>Documentation</h2> <a href=\"docp2.html\"><p>Click here to view the analysis.</p></a> <a href=\"scriptsP2.js\"><p>Click here to view the source code.</p></a>");
        document.write("<p>Click one of the numbers below to change a section of the board to change the color/number of the selected button by clicking on the grid after selecting.</p>");
        document.write("<div id=\"rr\">");
	document.write("<input type=\"submit\" id=\"c0\"  value=\"00\" style=\"color:#0000FF\" onmouseDown=\"cMouse(0)\"/>"); 
	document.write("<input type=\"submit\" id=\"c1\"  value=\"01\" style=\"color:#3333FF\" onmouseDown=\"cMouse(1)\"/>");
	document.write("<input type=\"submit\" id=\"c2\"  value=\"02\" style=\"color:#3366FF\" onmouseDown=\"cMouse(2)\"/>");
	document.write("<input type=\"submit\" id=\"c3\"  value=\"03\" style=\"color:#3399FF\" onmouseDown=\"cMouse(3)\"/>");
	document.write("<input type=\"submit\" id=\"c4\"  value=\"04\" style=\"color:#6699FF\" onmouseDown=\"cMouse(4)\"/>");
	document.write("<input type=\"submit\" id=\"c5\"  value=\"05\" style=\"color:#66CCFF\" onmouseDown=\"cMouse(5)\"/>");
	document.write("<input type=\"submit\" id=\"c6\"  value=\"06\" style=\"color:#99CCFF\" onmouseDown=\"cMouse(6)\"/>");
	document.write("<input type=\"submit\" id=\"c7\"  value=\"07\" style=\"color:#CCCCFF\" onmouseDown=\"cMouse(7)\"/>");
	document.write("<input type=\"submit\" id=\"c8\"  value=\"08\" style=\"color:#FF99CC\" onmouseDown=\"cMouse(8)\"/>");
	document.write("<input type=\"submit\" id=\"c9\"  value=\"09\" style=\"color:#FF6699\" onmouseDown=\"cMouse(9)\"/>");
	document.write("<input type=\"submit\" id=\"c10\" value=\"10\" style=\"color:#FF6633\" onmouseDown=\"cMouse(10)\"/>");
	document.write("<input type=\"submit\" id=\"c11\" value=\"11\" style=\"color:#FF6600\" onmouseDown=\"cMouse(11)\"/>");
	document.write("<input type=\"submit\" id=\"c12\" value=\"12\" style=\"color:#FF3366\" onmouseDown=\"cMouse(12)\"/>");
	document.write("<input type=\"submit\" id=\"c13\" value=\"13\" style=\"color:#FF0000\" onmouseDown=\"cMouse(13)\"/>");
	document.write("</div>");   
	document.write("</aside>");

	document.write("<table>");

	var k = 0;

	for(i = 0; i < 30; i++)
	{
		document.write("<tr>");

		for(j = 0; j < 30; j++)
		{
			document.write("<div id=\"cells\"><td id=\"" + k + "\" bgcolor=\"#0000FF\" onmouseDown=\"click1(" + k + ")\"></td></div>");
			k++;
		
		}//end inner for

		document.write("</tr>");

	}//end outer for

	document.write("</table>");

	document.write("<footer>");
	document.write("<div id=\"buttons\">");
	document.write("<input type=\"submit\" value=\"Start\"  onmouseDown=\"start()\" />");
	document.write("<input type=\"submit\" value=\"Rule 1\" onmouseDown=\"rule1()\" />");
	document.write("<input type=\"submit\" value=\"Rule 2\" onmouseDown=\"rule2()\" />");
	document.write("<input type=\"submit\" value=\"Rule 3\" onmouseDown=\"rule3()\" />");
	document.write("<input type=\"submit\" value=\"Rule 4\" onmouseDown=\"rule4()\" />");
	document.write("<input type=\"submit\" value=\"Reset\" onmouseDown=\"window.location.reload()\" />");
	document.write("<input type=\"submit\" id=\"toggle\" value=\"Show #'s\" onmouseDown=\"toggleNums()\" />");
	document.write("</div>");
document.write("</footer>");
	
	return;

}//end createGrid()

function color(c)
{
	var rC = "";
	if(isNaN(c))
	{
		if(c == "#0000FF"){rC = 0;}
		else if(c == "#3333FF"){rC = 1;}
		else if(c == "#3366FF"){rC = 2;}
		else if(c == "#3399FF"){rC = 3;}
		else if(c == "#6699FF"){rC = 4;}
		else if(c == "#66CCFF"){rC = 5;}
		else if(c == "#99CCFF"){rC = 6;}
		else if(c == "#CCCCFF"){rC = 7;}
		else if(c == "#FF99CC"){rC = 8;}
		else if(c == "#FF6699"){rC = 9;}
		else if(c == "#FF6633"){rC = 10;}
		else if(c == "#FF6600"){rC = 11;}
		else if(c == "#FF3366"){rC = 12;}
   	   	else if(c == "#FF0000"){rC = 13;}
		else{rC = "#FFCC00";}
	}//end if
	else
	{

		if(c == 0){rC = "#0000FF";}
		else if(c == 1){rC = "#3333FF";}
		else if(c == 2){rC = "#3366FF";}
		else if(c == 3){rC = "#3399FF";}
		else if(c == 4){rC = "#6699FF";}
		else if(c == 5){rC = "#66CCFF";}
		else if(c == 6){rC = "#99CCFF";}
		else if(c == 7){rC = "#CCCCFF";}
		else if(c == 8){rC = "#FF99CC";}
		else if(c == 9){rC = "#FF6699";}
		else if(c == 10){rC = "#FF6633";}
		else if(c == 11){rC = "#FF6600";}
		else if(c == 12){rC = "#FF3366";}
   	   	else if(c == 13){rC = "#FF0000";}
		else{rC = "#FF0000";}

	}//enf if

	return rC;
	
}//end color()


function cMouse(cNum)
{

	                        
	document.getElementById("c" + hlButt).style.fontSize="14px";
	hlButt = cNum;
	document.getElementById("c" + cNum).style.fontSize="20px";
	clickCount = cNum;
                                
}//end cMouse                   
                               
function rule1()               
{

	var rArr = new Array();

	rArr = tArr.slice();

	for(i = 0; i < 900; i++)
	{
			
		var c = color(document.getElementById(i).getAttribute("bgcolor"));
		

		if(c < 6)
		{
			if(i - 30 >= 0)
			{
				if(tArr[i-30] > 0)
				{
					rArr[i-30] = rArr[i-30] - 1;
					rArr[i] = rArr[i] + 1;
				}//end if	
			}//end if 

			if(i - 1 >= 0)
			{
				if(tArr[i-1] > 0)
				{
					rArr[i-1] = rArr[i-1] - 1;
					rArr[i] = rArr[i] + 1;
				}//end if	
			}//end if 

			if(i + 30 < 900)
			{
				if(tArr[i+30] > 0)
				{
					rArr[i+30] = rArr[i+30] - 1;
					rArr[i] = rArr[i] + 1;
				}//end if	
			}//end if 

			if(i + 31 < 900)
			{
				if(tArr[i+1] > 0)
				{
					rArr[i+1] = rArr[i+1] - 1;
					rArr[i] = rArr[i] + 1;
				}//end if	
			}//end if 


			if(i - 30 >= 0)
			{
				if(tArr[i-30] > 0)
				{
					rArr[i-30] = rArr[i-30] - 1;
					rArr[i] = rArr[i] + 1;
				}//end if	
			}//end if 

			if(i - 1 >= 0)
			{
				if(tArr[i-1] > 0)
				{
					rArr[i-1] = rArr[i-1] - 1;
					rArr[i] = rArr[i] + 1;
				}//end if	
			}//end if 

			if(i + 30 < 900)
			{
				if(tArr[i+30] > 0)
				{
					rArr[i+30] = rArr[i+30] - 1;
					rArr[i] = rArr[i] + 1;
				}//end if	
			}//end if 

			if(i + 31 < 900)
			{
				if(tArr[i+1] > 0)
				{
					rArr[i+1] = rArr[i+1] - 1;
					rArr[i] = rArr[i] + 1;
				}//end if	
			}//end if 

		}//end if




	}//end for
	
	
	tArr = rArr.slice();

	z = 0;

	for(i = 0; i < 900; i++)
	{
		document.getElementById(i).setAttribute("bgcolor", color(tArr[i]));
		z = z + tArr[i];

		if(numsVisible)
		{
			document.getElementById(i).innerHTML = tArr[i];
		}//end if

	}//end for


	document.getElementById("chipNum").innerHTML = "Chip Fire and Water Grid (" + z + ")";
	

}//end rule1()


function rule2()
{

	var rArr = new Array();

	rArr = tArr.slice();

	for(i = 0; i < 900; i++)
	{
			
		var c = color(document.getElementById(i).getAttribute("bgcolor"));
		

		if(c > 5)
		{
			
			if(i - 29 >= 0)
			{
				if(tArr[i-29] < 13)
				{
					rArr[i-29] = rArr[i-29] + 1;
					rArr[i] = rArr[i] - 1;
				}//end if	
			}//end if 

			if(i - 31 >= 0)
			{
				if(tArr[i-31] < 13)
				{
					rArr[i-31] = rArr[i-31] + 1;
					rArr[i] = rArr[i] - 1;
				}//end if	
			}//end if 

			if(i + 29 < 900)
			{
				if(tArr[i+29] < 13)
				{
					rArr[i+29] = rArr[i+29] + 1;
					rArr[i] = rArr[i] - 1;
				}//end if	
			}//end if 

			if(i + 31 < 900)
			{
				if(tArr[i+31] < 13)
				{
					rArr[i+31] = rArr[i+31] + 1;
					rArr[i] = rArr[i] - 1;
				}//end if	
			}//end if 

			if(i - 29 >= 0)
			{
				if(tArr[i-29] < 13)
				{
					rArr[i-29] = rArr[i-29] + 1;
					rArr[i] = rArr[i] - 1;
				}//end if	
			}//end if 

			if(i - 31 >= 0)
			{
				if(tArr[i-31] < 13)
				{
					rArr[i-31] = rArr[i-31] + 1;
					rArr[i] = rArr[i] - 1;
				}//end if	
			}//end if 

			if(i + 29 < 900)
			{
				if(tArr[i+29] < 13)
				{
					rArr[i+29] = rArr[i+29] + 1;
					rArr[i] = rArr[i] - 1;
				}//end if	
			}//end if 

			if(i + 31 < 900)
			{
				if(tArr[i+31] < 13)
				{
					rArr[i+31] = rArr[i+31] + 1;
					rArr[i] = rArr[i] - 1;
				}//end if	
			}//end if 

		}//end if


	}//end for
	
	
	tArr = rArr.slice();

	z = 0;

	for(i = 0; i < 900; i++)
	{
		document.getElementById(i).setAttribute("bgcolor", color(tArr[i]));
		z = z + tArr[i];

		if(numsVisible)
		{
			document.getElementById(i).innerHTML = tArr[i];
		}//end if

	}//end for

	document.getElementById("chipNum").innerHTML = "Chip Fire and Water Grid (" + z + ")";


}//end rule2()

function rule3()
{
	var rArr = new Array();

	rArr = tArr.slice();

	for(i = 0; i < 900; i++)
	{
			
		var c = color(document.getElementById(i).getAttribute("bgcolor"));
		

		if(c > 6) 
		{
			if(tArr[i+1] < 12)
			{
				rArr[i +1] = rArr[i+1] + 2;
				c = c -2;

			}//end if
			if(tArr[i-1] < 12)
			{
				if(c > 2)
				{
					rArr[i -1] = rArr[i-1] + 2;
					c = c - 2;
				}//end if
			}//end if
			if(tArr[i+1+1] < 11)
			{
				if(c > 1)
				{
					rArr[i +1+1] = rArr[i+1+1] + 3;
					c = c -3;
				}//end if
			}//end if
			if(tArr[i-1-1] < 11)
			{
				if(c > 1)
				{
					rArr[i -1-1] = rArr[i-1-1] + 3;
					c = c -3;
				}//end if
			}//end if
				
			rArr[i] = c;

		}//end if

	}//end for
	
	
	tArr = rArr.slice();

	z = 0;

	for(i = 0; i < 900; i++)
	{
		document.getElementById(i).setAttribute("bgcolor", color(tArr[i]));
		z = z + tArr[i];

		if(numsVisible)
		{
			document.getElementById(i).innerHTML = tArr[i];
		}//end if

	}//end for

	document.getElementById("chipNum").innerHTML = "Chip Fire and Water Grid (" + z + ")";



}//end rule3()


function rule4()
{
	var rArr = new Array();

	rArr = tArr.slice();

	for(i = 0; i < 900; i++)
	{
			
		var c = color(document.getElementById(i).getAttribute("bgcolor"));
		

		if(c < 5) 
		{
			if(tArr[i+30] > 0)
			{
				rArr[i +30] = rArr[i+30] - 2;
				c = c +2;

			}//end if
			if(tArr[i-30] > 0)
			{
				rArr[i -30] = rArr[i-30] - 2;
				c = c + 2;
			}//end if
			if(tArr[i+30+30] > 0)
			{
				rArr[i +30+30] = rArr[i+30+30] - 2;
				c = c +2;
			}//end if
			if(tArr[i-30-30] > 0)
			{
				rArr[i -30-30] = rArr[i-30-30] - 2;
				c = c +2;
			}//end if
				
			rArr[i] = c;

		}//end if

	}//end for
	
	
	tArr = rArr.slice();

	z = 0;

	for(i = 0; i < 900; i++)
	{
		document.getElementById(i).setAttribute("bgcolor", color(tArr[i]));
		z = z + tArr[i];

		if(numsVisible)
		{
			document.getElementById(i).innerHTML = tArr[i];
		}//end if

	}//end for

	document.getElementById("chipNum").innerHTML = "Chip Fire and Water Grid (" + z + ")";



}//end rule4()






function start()
{
	z = 0;

	for(i = 0; i < 900; i++)
	{
		var randC = Math.floor(Math.random() * 14);
		document.getElementById(i).setAttribute("bgcolor", cArr[randC]);
		tArr[i] = randC;
		z = z + tArr[i];
	}//end for

	document.getElementById("chipNum").innerHTML = "Chip Fire and Water Grid (" + z + ")";

	if(numsVisible)
	{
		showNums();
	}//end if

	return;

}//end start()


function click1(k)
{

	
	document.getElementById(k+31).setAttribute("bgcolor", cArr[clickCount]);
	document.getElementById(k+29).setAttribute("bgcolor", cArr[clickCount]);
	document.getElementById(k-31).setAttribute("bgcolor", cArr[clickCount]);
	document.getElementById(k-29).setAttribute("bgcolor", cArr[clickCount]);
	document.getElementById(k+30+30).setAttribute("bgcolor", cArr[clickCount]);
	document.getElementById(k+1+1).setAttribute("bgcolor", cArr[clickCount]);
	document.getElementById(k-1-1).setAttribute("bgcolor", cArr[clickCount]);
	document.getElementById(k-30-30).setAttribute("bgcolor", cArr[clickCount]);
	document.getElementById(k+30+30+30).setAttribute("bgcolor", cArr[clickCount]);
	document.getElementById(k+1+1+1).setAttribute("bgcolor", cArr[clickCount]);
	document.getElementById(k-1-1-1).setAttribute("bgcolor", cArr[clickCount]);
	document.getElementById(k-30-30-30).setAttribute("bgcolor", cArr[clickCount]);
	document.getElementById(k-26).setAttribute("bgcolor", cArr[clickCount]);
	document.getElementById(k+34).setAttribute("bgcolor", cArr[clickCount]);
	document.getElementById(k-34).setAttribute("bgcolor", cArr[clickCount]);
	document.getElementById(k+26).setAttribute("bgcolor", cArr[clickCount]);


	z = 0;
		
	for(i = 0; i < 900; i++)
	{
		var c = document.getElementById(i).getAttribute("bgcolor");
		c = color(c);
		tArr[i] = c;

		if(numsVisible)
		{
			document.getElementById(i).innerHTML = c;
		}//end if

		z += c;
	}//end for

	document.getElementById("chipNum").innerHTML = "Chip Fire and Water Grid (" + z + ")";

	return;

}//end click1()


function writeGrid()
{
	for(i = 0; i < 900; i++)
	{
			
			document.getElementById(i).setAttribute("bgcolor", color(tArr[i]));
	}//end for

}//end writeGrid()


function showNums()
{

	for(i = 0; i < 900; i++)
	{
			var c = document.getElementById(i).getAttribute("bgcolor");
			document.getElementById(i).innerHTML = color(c);
	}//end for

	return;

}//end showNums()


function clearNums()
{

	for(i = 0; i < 900; i++)
	{
		document.getElementById(i).innerHTML = "";
	}//end for


}//end clearNums()


function toggleNums()
{

	if(!numsVisible)
	{
		showNums();
		numsVisible = true;
		document.getElementById("toggle").setAttribute("value", "Hide #'s");
	}//end if
	else
	{
		clearNums();
		numsVisible = false;
		document.getElementById("toggle").setAttribute("value", "Show #'s");
	}//end else

}//end toggleNums()




