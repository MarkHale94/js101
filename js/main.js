console.log("Hello main.js");

console.log("add this", "2+2", "and another", 3+4);

let lostColors = {
    yellow: ["dandelion", "mac and cheese"],
    blue: "blues",
    add: function(a,b){
        return a + b;
    }
};

console.log(lostColors.yellow.length);
console.log("add colors ", lostColors.add(3,12));

let crayonBox = ["yellow", "blue", "lemon", lostColors];
console.log("crayonBox", crayonBox);

let junkDrawer = ["tape", "sticky", 2, "fishing wire", "phillips head screwdriver", crayonBox];
console.log("junkDrawer", junkDrawer);

let name = "Mark";

console.log("what kind of data is name", typeof(name));

let myCost = 3/1.5;
console.log("myCost is", myCost);

let snow = true;
let ice =true;

if (snow !== true && ice === true){
    console.log("School is cancelled");
}else{
    console.log("learn more cool stuff");
}

let phrase = "The quick brown fox jumps over the lazy dog";
console.log(phrase.length);
console.log("where is the x", phrase.indexOf("fox"));

 let newStuff = `<h2>My Favorite Poems of Ice Cream</h2> <p> ${phrase} </p> <h3>By Mark Hale</h3>`;
console.log("newStuff", newStuff);

// let addToDom = document.getElementById("demo");
// addToDom.innerHTML = newStuff;

let addToDom = document.querySelector(".demo");
addToDom.innerHTML = newStuff;

// let domItems = document.querySelectorAll(".super");
// console.log("what is domItems", domItems);
// for (let i = 0; i < domItems.length; i++){
//    domItems[i].style.backgroundColor = "red";
// }

let domItems = document.getElementsByClassName("super");
console.log("domItems:", domItems);

for (let i = 0; i < domItems.length; i++){
    domItems[i].style.backgroundColor = "red";
}


