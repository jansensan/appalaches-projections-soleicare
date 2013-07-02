//===========/----------------------------------------------
//  [_VAR]  /  Variables
//=========/------------------------------------------------

var allVideoIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

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