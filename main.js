//need to strike through the first UL item

//find the UL
//having "ul" in the query SelectorAll highlights the ul level.  Having "ul li" gives you the list items to loop through/index
const unorderedListItems = document.querySelectorAll("ul li");
//we want the first item in the array/list
const firstUl = unorderedListItems[0];
//now line through that item
firstUl.style.textDecoration = "line-through";

//write a function to change images?
// takes in two strings. the ID of an item and the URL you want placed in the src section
function addURLtoImage(idStr, URLstr) {
	//we want to reference a const that can dynamically take in the idStr
	const idItem = document.querySelector(`#${idStr}`);
	//now take that const and edit the src with the urlStr
	idItem.src = `${URLstr}`;
}

addURLtoImage("image-1", "testimg.jpeg");
addURLtoImage(
	"image-2",
	"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.1oIP_8j9_4BHAKFcY86rFgHaHa%26pid%3DApi&f=1"
);
addURLtoImage(
	"image-3",
	"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.fyH0MSX841r0jfao1YoYDQHaHa%26pid%3DApi&f=1"
);

function removeLastUL() {
	const unorderedListItems = document.getElementById("arguments");
	//const lastUlItem = unorderedListItems[unorderedListItems.length-1]
	unorderedListItems.removeChild(unorderedListItems.lastElementChild);
}
removeLastUL();
removeLastUL();

function editFontSize(fontSize, id) {
	const idItem = document.querySelector(`${id}`);
	idItem.style.fontSize = `${fontSize}px`;
}
editFontSize(6, "h1");

//======== Part 2 ============

function argumentAppender(domElement) {
	const argsUL = document.querySelector("#arguments");
	argsUL.appendChild(domElement);
}
const newElement = document.createElement("li");
newElement.innerText = "I'm a new item";
argumentAppender(newElement);

const newIMG = document.createElement("img");
newIMG.src =
	"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.4EKNPedTMBkQIME3HTwCXAHaEK%26pid%3DApi&f=1";
argumentAppender(newIMG);

function imageSize(imgHeight, imgID) {
	const img = document.getElementById(imgID);
	img.style.height = imgHeight;
}
const imgHeight = "30px";
imageSize(imgHeight, "image-1");

function argumentInvisible(input) {
	document.getElementById(input).className = "invisible";
	
}
argumentInvisible('thing-1');


//======== Part 3 ============

function addLi(str){
    const newElement = document.createElement("li");
    newElement.innerText = `${str}`;
    argumentAppender(newElement)
}

addLi("Some Text to Test")
addLi("More Tests before I show Lee")


function createHeader(hSize, headerStr){
    const newHeader = document.createElement(`${hSize}`);
    newHeader.innerText = `${headerStr}`
    argumentAppender(newHeader)
}

createHeader('h3', "Here is my new header")