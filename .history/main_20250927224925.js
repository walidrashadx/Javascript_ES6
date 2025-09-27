

let uname = "John";
let age = 30;
let isStudent = true;
let hobbies = ["reading", "traveling", "swimming"];
let address = { city: "New York", country: "USA" };

let personCard = 
`<div id = "card">

<div id = "name"> Name: ${uname} </div>
<div id = "age"> Age: ${age} </div>
<div id = "isStudent"> Student: ${isStudent} </div>
<div id = "hobbies"> Hobbies: ${hobbies.join(", ")} </div>
<div id = "address"> Address: ${address.city}, ${address.country} </div> </div>`;

// Append the personCard to the body using DOM manipulation
document.body.innerHTML += personCard;
let myFriend = ["Alice","Bob","Charlie","David","Eve"];


console.log(`hello ${myFriend[0]}`)
console.log(myFriend.length);
myfriend[2] = "Chuc
