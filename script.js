//1 Select the section with an id of container without using querySelector.

const a = document.getElementById("container");
console.log(a)
//2 Select the section with an id of container using querySelector.

 const b = document.querySelector("#container")
console.log(b)

//3 Select all of the list items with a class of "second".

const c = document.getElementsByClassName("second")
console.log(c)

//4 Select a list item with a class of third, but only the list item inside of the ol tag.

const d = document.querySelector("ol .third");
console.log(d)

//5. Give the section with an id of container the text "Hello!"
const e = let foundDiv = document.querySelector("#container");
foundDiv.innerText = "Hello";
console.log(e)

//6 Add the class main to the div with a class of footer.


const f =  let footer = document.querySelector(".footer");
footer.classList.add("main");
console.log(f)
    
//7. Remove the class main on the div with a class of footer.

let footer = document.querySelector(".footer");
footer.classList.remove("main");

//8 Create a new li element.

let newLi = document.createElement("li");

//9 Give the li the text "four".
newLi.innerText = "four"


//10 Append the li to the ul element.
let list = document.querySelector("ul");
list.appendChild(newLi);


//11 Loop over all of the lis inside the ol tag and give them a background color of "green".
let liInsideOl = document.querySelectorAll("ol li");
for(let i = 0; i < liInsideOl.length; i++){
    liInsideOl[i].style.backgroundColor = "green";
}

//12. Remove the div with a class of footer.

let footer = document.querySelector(".footer");
footer.remove();
