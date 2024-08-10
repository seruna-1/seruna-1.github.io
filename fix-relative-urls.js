const url = window.location.href;

const filename = url.substring(url.lastIndexOf('/') + 1);
const dirPath = url.substring(0, url.lastIndexOf('/'));

const elem = document.querySelector("header");

const elements = document.querySelectorAll("img");
elem.innerHTML = elements.length;

if (elements.length > 0) {
	for (let i=0; i < elements.length; i++) {
		elements[i].setAttribute("src", dirPath + elements[i].getAttribute("src"));
	}
}
