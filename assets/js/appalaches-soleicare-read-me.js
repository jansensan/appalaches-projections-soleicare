//===========/----------------------------------------------
//  [_CON]  /  Constants
//=========/------------------------------------------------

var SHORT = "Short";
var MEDIUM = "Medium";
var LONG = "Long";

var SCENES_VOS =	[
						{
							id: 1,
							url: "assets/images/main-videos-001.png",
							description: "Iceberg from boat",
							duration: SHORT,
							notes: ""
						},
						{
							id: 2,
							url: "assets/images/main-videos-002.png",
							description: "Ice blocks at sea from air",
							duration: MEDIUM,
							notes: "Grandiose, for intro"
						},
						{
							id: 3,
							url: "assets/images/main-videos-003.png",
							description: "Panning left through cracked ice from air",
							duration: MEDIUM,
							notes: "Grandiose, for intro"
						},
						{
							id: 4,
							url: "assets/images/main-videos-004.png",
							description: "Panning right, going into land, from air",
							duration: LONG,
							notes: "Grandiose, for intro"
						},
						{
							id: 5,
							url: "assets/images/main-videos-005.png",
							description: "Panning left through ice at sea",
							duration: LONG,
							notes: ""
						},
						{
							id: 6,
							url: "assets/images/main-videos-006.png",
							description: "Shakey cam with dirt on film",
							duration: SHORT,
							notes: "Old looking, for title"
						},
						{
							id: 7,
							url: "assets/images/main-videos-007.png",
							description: "Slowly panning left through snowy mountains from air",
							duration: LONG,
							notes: "Grandiose, for intro"
						},
						{
							id: 8,
							url: "assets/images/main-videos-008.png",
							description: "Ease out panning left with lens flare",
							duration: MEDIUM,
							notes: ""
						},
						{
							id: 9,
							url: "assets/images/main-videos-009.png",
							description: "Ease out panning left through melting ice",
							duration: MEDIUM,
							notes: ""
						},
						{
							id: 10,
							url: "assets/images/main-videos-010.png",
							description: "Ease out panning right through melting ice",
							duration: MEDIUM,
							notes: ""
						},
						{
							id: 11,
							url: "assets/images/main-videos-011.png",
							description: "Shakey cam moving forward through dunes",
							duration: MEDIUM,
							notes: ""
						},
						{
							id: 12,
							url: "assets/images/main-videos-012.png",
							description: "Panning up on plains",
							duration: MEDIUM,
							notes: ""
						},
						{
							id: 13,
							url: "assets/images/main-videos-013.png",
							description: "Still with mirage fading in",
							duration: MEDIUM,
							notes: ""
						},
						{
							id: 14,
							url: "assets/images/main-videos-014.png",
							description: "Still with wavey mirage",
							duration: SHORT,
							notes: ""
						},
						{
							id: 15,
							url: "assets/images/main-videos-015.png",
							description: "Still with mirage fading out",
							duration: MEDIUM,
							notes: ""
						},
						{
							id: 16,
							url: "assets/images/main-videos-016.png",
							description: "Panning right through ice field",
							duration: SHORT,
							notes: ""
						},
						{
							id: 17,
							url: "assets/images/main-videos-017.png",
							description: "Still with sun through clouds",
							duration: MEDIUM,
							notes: ""
						},
						{
							id: 18,
							url: "assets/images/main-videos-018.png",
							description: "Still with wind through plains",
							duration: MEDIUM,
							notes: ""
						},
						{
							id: 19,
							url: "assets/images/main-videos-019.png",
							description: "Still with sun and mountain",
							duration: SHORT,
							notes: ""
						},
						{
							id: 20,
							url: "assets/images/main-videos-020.png",
							description: "Still with snow field and mountains",
							duration: MEDIUM,
							notes: ""
						},
						{
							id: 21,
							url: "assets/images/main-videos-021.png",
							description: "Zooming on mountains behind snow field",
							duration: MEDIUM,
							notes: ""
						},
						{
							id: 22,
							url: "assets/images/main-videos-022.png",
							description: "Panning left through ice cliff",
							duration: MEDIUM,
							notes: ""
						},
						{
							id: 23,
							url: "assets/images/main-videos-023.png",
							description: "Still with sun moving from right to left",
							duration: LONG,
							notes: ""
						},
						{
							id: 24,
							url: "assets/images/main-videos-024.png",
							description: "Panning up to sun",
							duration: MEDIUM,
							notes: ""
						},
						{
							id: 25,
							url: "assets/images/main-videos-025.png",
							description: "Still with blue field and red sun",
							duration: MEDIUM,
							notes: ""
						},
						{
							id: 26,
							url: "assets/images/main-videos-026.png",
							description: "Zooming quickly to sun",
							duration: LONG,
							notes: ""
						},
						{
							id: 27,
							url: "assets/images/main-videos-027.png",
							description: "Zooming to sun",
							duration: SHORT,
							notes: ""
						},
						{
							id: 28,
							url: "assets/images/main-videos-028.png",
							description: "Sun with windy snowy plains, fading to black",
							duration: MEDIUM,
							notes: ""
						},
						{
							id: 29,
							url: "assets/images/main-videos-029.png",
							description: "Sun setting",
							duration: MEDIUM,
							notes: "IMPORTANT: auto back and forth loop"
						},
						{
							id: 30,
							url: "assets/images/main-videos-030.png",
							description: "Sun set",
							duration: SHORT,
							notes: ""
						},
						{
							id: 31,
							url: "assets/images/main-videos-031.png",
							description: "Moon",
							duration: SHORT,
							notes: ""
						}
					];
var NUM_SCENES = SCENES_VOS.length;


//===========/----------------------------------------------
//  [_VAR]  /  Variables
//=========/------------------------------------------------

var scenes;


//===========/----------------------------------------------
//  [_JQR]  /  jQuery Ready Handler
//=========/------------------------------------------------

jQuery(document).ready(initReadMe);


//===========/----------------------------------------------
//  [_MTD]  /  Methods
//=========/------------------------------------------------

function initReadMe()
{
	getDOMElements();
	createSceneDetails();
}


function getDOMElements()
{
	scenes = jQuery("#scenes");
}


function createSceneDetails()
{
	var i = 0;
	for(i; i < NUM_SCENES; i++)
	{
		imageURL = SCENES_VOS[i].url;
		description = SCENES_VOS[i].description;

		var sceneDetail = '<div class="sceneDetail">';
			sceneDetail += '<img src="' + SCENES_VOS[i].url + '" class="thumb">';
			sceneDetail += '<div class="description">'
				sceneDetail += '<p><strong>ID:</strong> ' + SCENES_VOS[i].id + '</p>';
				sceneDetail += '<p><strong>Description:</strong><br>' + SCENES_VOS[i].description + '</p>';
				sceneDetail += '<p><strong>Duration:</strong><br>' + SCENES_VOS[i].duration + '</p>';
				sceneDetail += '<p><strong>Notes:</strong><br>' + SCENES_VOS[i].notes + '</p>';
			sceneDetail += '</div>';
		sceneDetail += '</div>';

		scenes.append(sceneDetail);
	}
}