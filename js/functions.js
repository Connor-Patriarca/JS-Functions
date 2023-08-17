/* 

1/2. You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the total points for a team and return the value.

Examples:
totalPoints(3, 4) should return 18
totalPoints(2, 3) should return 13
totalPoints(21, 11) should return 75
totalPoints(2, 0) should return 4
totalPoints(0, 5) should return 15

*/

console.clear();

function totalPoints(a, b) {
  let result = a * 2 + b * 3;
  console.log(result);
}

totalPoints(3, 4);
totalPoints(2, 3);
totalPoints(21, 11);
totalPoints(2, 0);
totalPoints(0, 5);

/*

2/2. The makeEl function should take in 2 arguments, the 1st being an HTML element tag string, and the 2nd is text. When invoked/called, this function should insert/add the desired element withing the document body along with the text.

Examples:
makeEl('h3', 'Welcome to JS') -> should add a Heading 2 tag below the instructions text, the text of which is "Welcome to JS"

makeEl('p', 'Here is a paragraph') -> should add a paragraph tag below the instruction text, the text of which should be "Here is a paragraph"
*/

function makeEl(a, b) {
  const tag = document.createElement(a);
  const text = document.createTextNode(b);
  tag.appendChild(text);
  const element = document.querySelector("body");
  element.append(tag);
}

makeEl("h3", "Welcome to JS");
makeEl("p", "Here is a paragraph");
