const friends = ["Tyson", "Steven", 23, "Jonas"];

friends.includes("Steven"); // true
friends.includes("Sarah"); // false
friends.includes("23"); //false
friends.includes(23); //true

const search = prompt("Who are you looking for?");

const message = friends.includes(search)
   ? `${search} is here!`
   : `${search} isn't here!`;

alert(message);
