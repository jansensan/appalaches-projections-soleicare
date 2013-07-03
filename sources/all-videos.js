//===========/----------------------------------------------
//  [_VAR]  /  Variables
//=========/------------------------------------------------

// see all scenes at https://rawgithub.com/jansensan/appalaches-projections-soleicare/master/readme.html

var allVideoIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

var fadeInIntro = [1, 2, 3];
var titleIntro = [6, 4, 5];
var activeIntro = [4, 5, 8, 22, 21];
var chorus01 = [11, 10, 9, 12, 6];
var verse01 = [7, 8, 5, 16, 19];
var chorus02 = [12, 21, 16, 22, 11, 8, 6];
var verse02 = [19, 8, 9, 17, 13, 14, 15];
var chorus03 = [18, 24, 26, 27, 25];
var break01 = [23];
var break02 = [29];
var finale = [30];

var array = allVideoIds;
var index = -1;

var arguments;


//===========/----------------------------------------------
//  [_MAX]  /  Max-Specific Functions
//=========/------------------------------------------------

// get arguments from inlet
if(jsarguments.length > 1)
{
	arguments = jsarguments[1];
}


function list()
{
	var argumentList = arrayfromargs(arguments);
	var actionId = parseInt(argumentList[0]);

	switch(actionId)
	{
		// get video (next or prev)
		case 0:
			var direction = parseInt(argumentList[1]);
			if(direction < 0)
			{
				index = getPrevIndex();
			}
			else
			{
				index = getNextIndex();
			}
			var output = array[index];
			outlet(0, output);
			break;

		// select array
		case 1:
			var arrayId = parseInt(argumentList[1]);
			selectArray(arrayId);
			break;

		default:
			// 
	}
}


//===========/----------------------------------------------
//  [_FCN]  /  Functions
//=========/------------------------------------------------

function selectArray(id)
{
	switch(id)
	{
		case 1:
			array = fadeInIntro;
			post("selected fade in intro videos\n");
			break;
		
		case 2:
			array = titleIntro;
			post("selected title intro videos\n");
			break;
		
		case 3:
			array = activeIntro;
			post("selected active intro videos\n");
			break;
		
		case 4:
			array = chorus01;
			post("selected chorus 01 videos\n");
			break;
		
		case 5:
			array = verse01;
			post("selected verse 01 videos\n");
			break;
		
		case 6:
			array = chorus02;
			post("selected chorus 02 videos\n");
			break;
		
		case 7:
			array = verse02;
			post("selected verse 02 videos\n");
			break;
		
		case 8:
			array = chorus03;
			post("selected chorus 03 videos\n");
			break;
		
		case 9:
			array = break01;
			post("selected break 01 video\n");
			break;
		
		case 10:
			array = break02;
			post("selected break 02 video\n");
			break;
		
		case 11:
			array = finale;
			post("selected finale video\n");
			break;

		default:
			array = allVideoIds;
			post("selected all videos\n");
	}

	// reset index
	index = -1;
}


function getPrevIndex()
{
	index--;
	if(index < 0)
	{
		index = array.length - 1;
	}
	return index;
}


function getNextIndex()
{
	index++;
	if(index == array.length)
	{
		index = 0;
	}
	return index;
}