/* Current image number and name */
let name;
let number;

/* Objects of elements */
const select = document.querySelector("select");
const image = document.querySelector("img");

/* Creates content of dropdown selector */
for (let number = 1; number <= 7; number++)
{
	name = "OO" + number.toString() + ".avif";
	
	const newOption = document.createElement("option");
	
	const optionText = document.createTextNode(name);

	/* Sets option attributes */
	newOption.textContent = name;
	newOption.setAttribute("src", name);
	newOption.setAttribute("alt", name);

	/* Appends option to dropdown selector */
	select.appendChild(newOption);
}


function changeImage ( event ) {
	image.setAttribute("src", event.target.value);
	return;
}


/* Function [changeImage] runs after selected option changes */
document.querySelector("select").onchange = changeImage;
