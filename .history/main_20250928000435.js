let uname = "John";
let age = 30;
let isStudent = true;
let hobbies = ["reading", "traveling", "swimming"];
let address = { city: "New York", country: "USA" };

let personCard = `<div id = "card">

<div id = "name"> Name: ${uname} </div>
<div id = "age"> Age: ${age} </div>
<div id = "isStudent"> Student: ${isStudent} </div>
<div id = "hobbies"> Hobbies: ${hobbies.join(", ")} </div>
<div id = "address"> Address: ${address.city}, ${
  address.country
} </div> </div>`;

// Append the personCard to the body using DOM manipulation
document.body.innerHTML += personCard;
let myFriend = ["Alice", "Bob", "Charlie", "David", "Eve"];

console.log(`hello ${myFriend[0]}`);
console.log(myFriend.length);
myFriend[2] = "Zara";

window.onload = function () {
  document.getElementById("card").style.border = "2px solid black";
  document.getElementById("card").style.padding = "10px";
  document.getElementById("card").style.margin = "10px";
  document.getElementById("card").style.backgroundColor = "lightblue";
  document.querySelector("h1").style.color = "blue";
};

console.log(myFriend); // Output the updated array
console.log(myFriend.slice(1, 4)); // Output the length of the array  GENERATE ANOTHER ARRAY WITH 3 ELEMENTS
console.log(myFriend.indexOf("David")); // Output the index of "David" RETURN 3 IF FOUND
console.log(myFriend.includes("Eve",2)); // Check if "Eve" is in the array RETURN TRUE OR FALSE
myFriend.splice(2, 0, "Frank", "Grace"); // Add "Frank" and "Grace" at index 2 change the original array 