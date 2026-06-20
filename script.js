
// ====================

// Select Elements

// ====================


// getElementById

const title=document.getElementById("title");

console.log(title);


// querySelector

const firstPara=document.querySelector(".box");

console.log(firstPara);


// querySelectorAll

const allPara=document.querySelectorAll(".box");

console.log(allPara);




// ====================

// Change Text

// ====================

document

.getElementById("changeTextBtn")

.addEventListener("click",()=>{


title.textContent=

"Text Content Changed!";


});




// ====================

// Change HTML

// ====================

document

.getElementById("changeHTMLBtn")

.addEventListener("click",()=>{


title.innerHTML=

"<span style='color:#e11d48'>HTML Content Changed!</span>";


});




// ====================

// Change CSS Style

// ====================

document

.getElementById("changeStyleBtn")

.addEventListener("click",()=>{


title.style.color="#4f46e5";

title.style.fontSize="45px";

title.style.textShadow=

"2px 2px 10px rgba(0,0,0,0.2)";


});




// ====================

// Create New Element

// ====================

document

.getElementById("addBtn")

.addEventListener("click",()=>{


const newDiv=

document.createElement("div");


newDiv.textContent=

"New Element Added Successfully";


newDiv.classList.add("newElement");


document

.getElementById("newContainer")

.appendChild(newDiv);


});




// ====================

// Remove Element

// ====================

document

.getElementById("removeBtn")

.addEventListener("click",()=>{


const item=

document.getElementById("removeMe");


item.remove();


});




// ====================

// Click Event

// ====================

document

.getElementById("clickBtn")

.addEventListener("click",()=>{


alert("Button Clicked!");


});




// ====================

// Input Event

// ====================

document

.getElementById("inputBox")

.addEventListener("input",(event)=>{


document

.getElementById("display")

.textContent=


"You typed: "

+event.target.value;


});




// ====================

// Submit Event

// ====================

document

.getElementById("myForm")

.addEventListener("submit",(event)=>{


event.preventDefault();


alert("Form Submitted Successfully!");


});