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
trueButton.addEventListener("click", (event) =>{
    trueButton.textContent =
    trueButton.textContent.toUpperCase();
});
h1.addEventListener("mouseover", () => {
    h1.textContent = "hearing";
});