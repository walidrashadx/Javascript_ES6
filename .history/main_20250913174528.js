window.onload = function() { 

    document.querySelector("h1").style.color = "red";

}

window.alert("Hello, World!");
document.write("<h1>Hello, World!</h1>");

console.log("Hello, World!");
console.error("This is an error message");
var name = "Alice";
console.log(`Hello, World! ${name}`);
hello.innerHTML = "open";
///////////////////////////////
let name = "John";
let age = 30;
let isStudent = true;
let hobbies = ["reading", "traveling", "swimming"];
let address = { city: "New York", country: "USA" };

let personCard = 
<div id = "card> ">

<div id = "name"> Name: ${name} </div>
<div id = "age"> Age: ${age} </div>
<div id = "isStudent"> Student: ${isStudent} </div>
<div id = "hobbies"> Hobbies: ${hobbies.join(", ")} </div>
<div id = "address"> Address: ${address.city}, ${address.country} </div>
