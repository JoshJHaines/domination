//need to strike through the first UL item

//find the UL
//having "ul" in the query SelectorAll highlights the ul level.  Having "ul li" gives you the list items to loop through/index
const unorderedListItems = document.querySelectorAll("ul li")
//we want the first item in the array/list
const firstUl = unorderedListItems[0]
//now line through that item
firstUl.style.textDecoration = "line-through"

//write a function to change images?
// takes in two strings. the ID of an item and the URL you want placed in the src section
function addURLtoImage(idStr, URLstr){
    //we want to reference a const that can dynamically take in the idStr
    const idItem = document.querySelector(`${idStr}`);
    //now take that const and edit the src with the urlStr
    idItem.src = `${URLstr}`
}

addURLtoImage("#image-1", "testimg.jpeg")
addURLtoImage("#image-2", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.1oIP_8j9_4BHAKFcY86rFgHaHa%26pid%3DApi&f=1")
addURLtoImage("#image-3", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.fyH0MSX841r0jfao1YoYDQHaHa%26pid%3DApi&f=1")

