//need to strike through the first UL item

//find the UL
//having "ul" in the query SelectorAll highlights the ul level.  Having "ul li" gives you the list items to loop through/index
const unorderedListItems = document.querySelectorAll("ul li")
//we want the first item in the array/list
const firstUl = unorderedListItems[0]
//now line through that item
firstUl.style.textDecoration = "line-through"