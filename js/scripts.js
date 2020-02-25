//var button01 = document.forms["splitNameForm"]["btnSplitName"];
var star01 = document.getElementById("starItem01");
var star02 = document.getElementById("starItem02");
var star03 = document.getElementById("starItem03");
var star04 = document.getElementById("starItem04");
var star05 = document.getElementById("starItem05");

var stars = document.getElementById("iconsGrid-5");

star01.addEventListener("onmouseover", activateStar01, true);
star02.addEventListener("onmouseover", activateStar02, true);
star03.addEventListener("onmouseover", activateStar03, true);
star04.addEventListener("onmouseover", activateStar04, true);
star05.addEventListener("onmouseover", activateStar05, true);






/*
var activateStar01 = () => {
    star01.removeAttribute("class", "hotpink");
    star01.setAttribute("class", "brownie");
}

function activateStar01() {
    star01.removeAttribute("class", "hotpink");
    star01.setAttribute("class", "brownie");
}


var activateStar02 = (star02) => {
    star02.removeAttribute("class", "hotpink");
    star02.setAttribute("class", "brownie");
    return star02;
}
*/




var mapName = (item1, item2) => {



    let name = document.getElementById("txtName03").value;
    let arrName = new Array();
    arrName = name.split("");
    let character;

    let isNumber = /\d/g;
    let isLetter = /[a-z]/gi;




    return `Letters ${item1}, Times ${item2}!`;
}

if (arrName[character].match(isLetter)) {

}



/*
var hello3 = (item1, item2) => {
    return `Hello ${item1}, good bye ${item2}!`;
}
console.log(hello3("World", "Moon"));
*/



/*
var hello1 = function () {
    return "Hello World!";
}

console.log(hello1());


//===================(Arrow Function notation)

//multiple line block
var hello2 = () => {
    return "Hello World!";
}

console.log(hello2());


//Esto se puede hacer en una sola linea de código (Sign line Block)
var hello3 = () => "Hello World!";
console.log(hello3());

//===================

/*

${} sustituye a + ítem +
function makeShoppingList(item1='milk', item2='bread', item3='eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}
makeShoppingList('orange','hello');


var hello3 = (item1, item2) => {
    return `Hello ${item1}, good bye ${item2}!`;
}
console.log(hello3("World", "Moon"));
*/