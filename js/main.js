const statement = document.getElementById("statement");
const optionsButton = document.querySelector("#options").children;
const explanation = document.getElementById("explanation");
const fact = {
    statement: "Array are like object",
    Answer: true,
    explanation: "Array are a kind of object with special properties",
};
statement.textContent = fact.statement;

// Function Return value
function sayHello(name) {
    console.log("oh hi, " + name + "!");
}
sayHello("simple")
// oh hi, simple!
function square(x) {
    return x * x;
}
undefined
square
 square(x) 
    return x * x;

const nine = square(3);
undefined
nine
9
function LogAndReturnSquare(x) {
    console.log(x*x);
    return x*x;
}
undefined
const result = LogAndReturnSquare(3)
undefined
result
9

// Creating function Exercise
function multiply(s,m) {
    return s*m;
}
undefined
multiply(4,5)
20
const yell = function(coming) {
    return coming.toupperCase();
}
function LoGerThan(a1, a2) {
    if(a1.length > a2.length) {
        return true;
    }else{
        return false;
    }
}
undefined
LoGerThan([1, 2, 3], [1, 2]);
true
LoGerThan([1, 2],[1,2,3])
false
[1, 2, 3].length > [1, 2].length
true
function LoGerThan2(a1, a2) {
    return a1.length > a2.length;
}
undefined
LoGerThan2([1, 2, 3], [1, 2]);

true
LoGerThan2([2, 3], [1, 2, 3]);
false

// Arrow function
const add = (x, y) => x + y;
undefined
add
// (x, y) => x + y
add(2,3)
5
function add(x, y) {
    return x + y;
}
const AddAndLog = (x, y) => {
    let sum = x + y;
    console.log("the sum is", sum);
    return sum;
}
const divide = (x, y) => x/y;
undefined
divide
// (x, y) => x/y
divide(9, 3)
3
const whisper = (text) => text.toLowerCase()
undefined
whisper("COME");
'come'
let output = whisper("OMG")
undefined
output
'omg'
const whisper2 = (text) => console.log(text.toLowerCase())
undefined
whisper2("OMG")
const whisper2 = (text) => console.log(text.toLowerCase())
undefined
whisper2("OMG")
 omg
undefined
let output = whisper2("OMG")
 omg
undefined
output = whisper2("OMG")
 omg
undefined
const whisper3 = (text) => {
    const kc = text.toLowerCase();
    console.log(kc);
    return kc;
}
undefined
let result = whisper3("OMG")
 omg
undefined
result
'omg'
function shorterthan(b1, c2) {
    if(b1.length < c2.length) {
        return true;
    }else{
        false
    }
} 
shorterTHan([1, 2], [1, 2, 3]);
true
[1, 2,3, 4] > [1, 2, 3]
true
[1, 2] > [1, 2, 3, 4]
false
const ShorterTHan2 = (a1, b2) => a1.length < b2.length;
undefined
shorterTHan2([1,2], [1,2,3])
true

// Boolean Q&A
// isCorrect
//  isCorrect(guess) {
//         return guess === fact.answer;
//     }
isCorrect(true)
true
isCorrect(false)
false
isCorrect("true")
false
"true" === true
false
true.toString()
'true'

// Scope
let globalVariable = "live in global scope"

undefined
let globalVariable = "live in global scope"
function SimpleScope() {
    console.log(globalVariable);
    let localVariable = "i live in the function scope";
}
undefined
SimpleScope();
//  live in global scope
undefined

let planet = "good";
undefined
planet
'good'
function scopeOut() {
    let planet = "time";
    console.log("inner planet:", planet);
}
undefined
scopeOut();
// inner planet: time
undefined
console.log("outer planet:", planet);
// outer planet: good
undefined

// let & scope
let feeling = "fine";

undefined
feeling
'fine'
function trap() {
    feeling = "good";
}

undefined
trap();

undefined
console.log(feeling);
good
undefined

// Var & let
var NewVariable = "Hello"
undefined
NewVariable
'Hello'
NewVariable = "Goodbye"
'Goodbye'
NewVariable
'Goodbye'
function messwith() {
    NewVariable = "messed";
}
undefined
NewVariable
'Goodbye'
messwith()
undefined
NewVariable
'messed'
{
  var NewVariable = "more messed";
}
undefined
NewVariable
'more messed'
let letVariable = "original";
undefined
{
    let letVariable = "new"
}

// Event Listeners
document.addEventListener("click", () =>{
    console.log("clicked")
});

// Event Object
document.addEventListener("click", (event) => {
    console.log(event)
});
document.addEventListener("click", (event) => {
    console.log(event.target);
});

// Event Exercise
optionsButton
// HTMLCollection(2) [button, button, true: button, false: button]
optionsButton[0]
{/* <button name=​"true" value=​"true">​true​</button>​
trueButton = optionsButton[0]
<button name=​"true" value=​"true">​true​</button>​
let trueButton = optionsButton[0]
undefined */}
// trueButton.addEventListener("click", (event) =>{
//     trueButton.textContent =
//     trueButton.textContent.toUpperCase();
// });
undefined
let h1 = document.getElementsByTagName("h1")
undefined
h1
// h1 = h1[0]
// <h1>​​</h1>​
h1

// loop
for (let rep = 0; rep < 10; rep +=1) {
    console.log("now am doing rep", rep);
}
console.log("do even lift bro");

for (let count = 0; count <= 100; count += 10) {
    console.log(count);
}

const numbers = [1, 2, 3];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

for (let n of numbers) {
    console.log(n);
}
for (let will of "SIMPLE") {
    console.log(will);
}
for (let item of ["pop", 6, "squish"]) {
    console.log(typeof item);
}

trueButton.addEventListener("click", (event) =>{
    trueButton.textContent =
    trueButton.textContent.toUpperCase();
});
h1.addEventListener("mouseover", () => {
    h1.textContent = "hearing";
});
h1.addEventListener("mouseout", (event) =>{
    h1.textContent = "Quiz";
});
//  isCorrect Project Exercise
if (isCorrect(button.value)) {
    button.classlist.add("isCorrect");
}else{
    button.classlist.add("incorrect");
}

// map & filter
const spices = [
    {name: "simple", nickname: "simp"},
    {name: "emma", nickname: "baby"},
    {name: "good", nickname: "bell"},
    {name: "sunny", nickname: "sons"},
    {name: "key", nickname: "will"},
];
const nicknames = spices.map(s => s.nickname + "spice");
let spices2 = spices.map(s => `${s.nickname} Spice`);
const mels = spices.filter(s => s.name.includes("mels"));
const names = spices.map(spice => spice.name);
const names = spices.map(spice => spice.name);
undefined
names
let endInY = spices.filter(s => s.name.endsWith("y"))
undefined
endInY
endInY = spices.filter(s => s.nickname.endsWith("y"))
endInY = spices.filter(s => s.nicknames.endsWith("y"))

endInY
"stringy"[0]
's'
"stringy"[1]
't'

// spread
const oldBurns = ["square", "wack",];
const newBurns = ["basic", "dusty", "sus"];
const burnBook = [...newBurns, ...oldBurns];
undefined
burnBook
(5) ['basic', 'dusty', 'sus', 'square', 'wack']

const skills = ["Html", "css", "js"];
const newSkills = ["React", "TypeScrip", "Node"];

// While Loop
let fiveRandomNumbers = [];
while (fiveRandomNumbers.length < 5) {
    fiveRandomNumbers.push(Math.random());
}

let sevenRandomNumbers = [];
while (sevenRandomNumbers.length < 7) {
    sevenRandomNumbers.push(Math.random());
}
 while (true) {
     console.log("1 am wasting resources infinitely");
 }

//  Doggo Quiz while Review

 function getMultipleChoices(n, correctAnswer, array) {
            // Use a while loop and the getRandomElement() function
            // Make sure there are no duplicates in the array
            const choices = [correctAnswer];
            while (choices.length < n) {
                let candidate = getRandomElement(array);
                if (choices.indexOf(candidate) < 0) { // check if this is already in the array
                    choices.push(candidate); // if not, add it
                }
            }
            return shuffleArray(choices);
        }
undefined
getMultipleChoices(3, "boolean", ["boolean", "string", "object", "number", "underfined"])
(3) ['underfined', 'number', 'boolean']
getMultipleChoices(3, "boolean", ["boolean", "string", "object", "number", "underfined"])
getMultipleChoices(3, "boolean", ["boolean", "string", "object", "number", "underfined"])
(3) ['boolean', 'number', 'string']
getMultipleChoices(3, "boolean", ["boolean", "string", "object", "number", "underfined"])
(3) ['underfined', 'boolean', 'string']
getMultipleChoices(3, "boolean", ["boolean", "string", "object", "number", "underfined"])
(3) ['number', 'underfined', 'boolean']
getMultipleChoices(3, "boolean", ["boolean", "string", "object", "number", "underfined"])
(3) ['string', 'boolean', 'number']
getMultipleChoices(3, "boolean", ["boolean", "string", "object", "number", "underfined"])
(3) ['number', 'boolean', 'underfined']
getMultipleChoices(4, "boolean", ["boolean", "string", "object", "number", "underfined"])
(4) ['underfined', 'boolean', 'string', 'number']
getMultipleChoices(3, "string", ["boolean", "string", "object", "number", "underfined"])
(3) ['string', 'object', 'underfined']
getMultipleChoices(4, "string", ["boolean", "string", "object", "number", "underfined"])
(4) ['boolean', 'number', 'object', 'string']

  
console.log("this will print in a new York minute");
console.log("this will print one new York minute later"); 
// this will print in a new York minute
// this will print one new York minute later
undefined

setTimeout
console.log("This will print first");
setTimeout(() => console.log("will print third"), 1000);
console.log("This will print second");
// This will print first
// This will print second
undefined
// will print third

APIS & fetch
// APIS provide ERLS that point at data we care about
// https://dog.ceo/api/breed/hound/list

// Working with Promise
fetch ("https://dog.ceo/api/breed/hound/list")
 
// Using await with Promise
let response = await fetch ("https://dog.ceo/api/breed/hound/list")
console.log(response);
let response = await fetch ("https://dog.ceo/api/breed/hound/list")
let body = await response.json();

// Destructuring Object & Arrays
// Destructuring is a fancy way of declaring multiple variable at once
const spices = [
    {name: "simple", nickname: "will"},
]
let {name, nickname} = spices[0];
let {nickname} = spices[0];
undefined
nickname
'will'
name
'simple'
let [one, two, three] = [1, 2, 3]
undefined
one
1
three
3

// Destructuring Exercise
"simple sunday williams".split(" ");
(3) ['simple', 'sunday', 'williams']

let [first, middle, last] = " simple sunday williams".spLit(" ");

// Destructuring Solution: Return Breed
"https://images.dog.ceo/breeds/poodle-standard/n02113799_2280.jpg"
'https://images.dog.ceo/breeds/poodle-standard/n02113799_2280.jpg'
"https://images.dog.ceo/breeds/poodle-standard/n02113799_2280.jpg".split("/")[4]
'poodle-standard'
"https://images.dog.ceo/breeds/poodle-standard/n02113799_2280.jpg".split("breed/")
['https://images.dog.ceo/breeds/poodle-standard/n02113799_2280.jpg']
"https://images.dog.ceo/breeds/poodle-standard/n02113799_2280.jpg".split("/")[4]
'poodle-standard'
'poodle-standard'.split("_")
"poodle-standard".split("_")
['poodle-standard']
"beagle".split("_")
['beagle']
"poodle-standard".split("_").join(" ")
'poodle-standard'
"https://images.dog.ceo/breeds/poodle-standard/n02113799_2280.jpg".split("/")[4]
'poodle-standard'
let [a,b] = "poodle-standard".split("_")
undefined
a
'poodle-standard'
b
undefined
[a, b]
(2) ['poodle-standard', undefined]
let [breed, varienty] = "poodle-standard".split("_")
undefined
[varienty, breed]
(2) [undefined, 'poodle-standard']
[varienty, breed].join(" ")
' poodle-standard'
let splitArray = "poodle-standard".split("_")
undefined
splitArray
['poodle-standard']
splitArray.reverse()
['poodle-standard']

// Aync Functions
let response = await fetch ("https://dog.ceo/api/breed/hound/list")
undefined
response
// Response {type: 'cors', url: 'https://dog.ceo/api/breed/hound/list', redirected: false, status: 200, ok: true, …}
let body = await response.json();
undefined
body
// {message: Array(7), status: 'success'}message: (7) ['afghan', 'basset', 'blood', 'english', 'ibizan', 'plott', 'walker']status: "success"[[Prototype]]: Object
let { message } = body;
undefined
message
(7) ['afghan', 'basset', 'blood', 'english', 'ibizan', 'plott', 'walker']
function fetchResponse(url) {
    const response = await fetch(url);
    return response;
}

async function fetchResponse(url) {
    const response = await fetch(url);
    return response;
}

// Async Function Exercise
async function fetchMessage(url) {
    const response = await fetch(url);
    const body = await response.json();
    const {message} = body;
    return message;
}
undefined
await fetchMessage("https://dog.ceo/api/breed/hound/list")
(7) ['afghan', 'basset', 'blood', 'english', 'ibizan', 'plott', 'walker']

// Adding Choices Button Solution
for (let choice of choicesArray) {
    const button = document.createElement("button");
    button.textContent = choice;
    button.value = choice;
    button.name = choice;
    button.addEventListener("click", buttonHandler);
    options.appendChild(button);
}

// Render Quiz Exercise
const [imageUrl, correctAnswer, choices] = await loadQuizData();
        renderQuiz(imageUrl, correctAnswer, choices);

// Debugger
function whyIsntThisWorking(input) {
    debugger;
    return thingThatDoesntWork(input);
}
try {
    thisMightThrowAnError();
}catch(error) {
    console.log("as if! error", error);
    console.log("Whatever, let's press on anyway");
}
console.log("still rollin' with the homies");