/* List of avaiable colors */
const colors = ["Red", "Green", "Black", "Gray", "Chocolate", "DarkGreen", "Olive", "#320552", "Tomato", "Orange"]

const configSection = document.getElementById("configSection");

const colouredName = document.getElementById("colouredName");

const buttonSetName = document.getElementById("setName");

buttonSetName.addEventListener("click", consumeName);

const buttonToggleConfigDisplay = document.getElementById("buttonToggleConfigDisplay");

buttonToggleConfigDisplay.addEventListener("click", toggleConfigDisplay);

const nameInput = document.getElementById("nameInputText");

let name = "Thaissa";

let nameLength = 7;

let displayLoop = setInterval(display, 1000);


function isElementHidden (element) {
	return window.getComputedStyle(element, null).getPropertyValue('display') === 'none';
}

		
/*
Consumes name from name input field.
This function is bonded to [Set name] button.
*/
function consumeName() {
	name = nameInput.value;
	nameLength = name.length;
	return;
}

function toggleConfigDisplay() {
	if ( isElementHidden(configSection) ) {
		configSection.style.display = "block";
	}
	else { configSection.style.display = "none"; }
	return;
}




/* Loop in which characters are displayed with random colors */
function display() {
	
	/* Clears div [colouredName] */
	colouredName.replaceChildren();
	
	for (let position = 0; position < nameLength; position++) {

	/* Creates character box div */
				
		let characterDiv = document.createElement("div");
				
		var colorNumber = Math.floor(Math.random() * 10);
		characterDiv.style.backgroundColor = colors[colorNumber];

		characterDiv.setAttribute("class", "characterDiv");

		characterDiv.append( name.charAt(position) );

		colouredName.append(characterDiv);
					
	}

		return;
}

