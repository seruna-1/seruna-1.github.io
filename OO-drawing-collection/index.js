let name;
const select = document.querySelector("select");

for (let number = 1; number <= 7; number++)
{
	name = "OO" + number.toString() + ".avif";
	
	const newOption = document.createElement("option");
	
	const optionText = document.createTextNode(name);

	const src

	newOption.appendChild(optionText);
	select.appendChild(newOption);
	
}


