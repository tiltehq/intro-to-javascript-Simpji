console.log("hey yes js")
document.title("java")
document.getElementById("board")
document.querySelector("#board")
document.getElementsByTagName("h1")
document.querySelectorAll("h1")
document.getElementsByClassName("prayer")
document.querySelectorAll(".player").length
document.getElementById("p1-name").textContent
document.getElementById("p2-name").textContent
document.getElementsByTagName("p").length
document.querySelector("#p1-symbol")
document.querySelector("#p1-symbol").textContent
document.querySelector("h2").textContent
document.querySelector("haeder h2").textContent = "a game you know and like"

// all of these are string
"Hello"
'I like single-quotes'
`I backticks`
'867-5309'
"42"
// typeof tell you the type of value you are using
"42"
"42"
42
42
// typeof to check the value

// All of these are Number
9
525600
_3
1.21e9
intinity

// primitive data types
String
Number
Boolean
undefined
null
// which data type is each of these values
false = Boolean
"true" = "string"
document.title = "string"
"some string ".length = Number
null = Object

// what the first character in the string
"ALOHA"[0]
"A"
"ALOHA"[1]
"L"
"ALOHA"[2]
"O"
"ALOHA"[3]
"H"
"ALOHA"[4]
"A"

// whats the index of a specific character
"ALOHA".indexOf("A")
"0"
"ALOHA".indexOf("L")
"1"
"ALOHA".indexOf("O")
"2"
"ALOHA".indexOf("H")
"3"
"ALOHA".indexOf("A")
"4"

// Does this string contain some other string
"ALOHA".includes("HA")
"true"
"ALOHA".includes("LOL")
"false"

// Dose this string start with other string
"ALOHA".startsWith("AL")
"true"
"ALOHA".startsWith("HA")
"false"

// At what index does this substring begin
"ALOHA".indexOf("HA")
"3"
"ALOHA".indexOf("LOL")
"-1"

// connecting strings together
"ALOHA" + "!"
"ALOHA!"
"ALOHA".toLowerCase()
"aloha"

// we have already seen a couple of operators
"ALOHA" + "!"
"ALOHA!"

// Arithmetic operators
+ add
- subtract
* multiply
/ divide

// oder of operations
// 4 + 1 * 2 * 4 + 2
// (4 + 1) * 2 = 10
1 + 2 
(8 * 7)/ 7
5 > 4 (true)
4 > 5 (false)
4 < 5(true)
5 < 4(false)

// Expressions
"FrontendMaster".includes("Front" + "end")
true
"Front" + "end"
"Frontend"

// Declaring and assigining variable
let remember = "june.21";
underfined
remember = "june. 21"
let good;
// we DonOt have any value on it we got underFined
UnderFined
myDeclaredVariable = "so much value wow";
"so much value wow"

// Const Declared and assigns a "constant" Variable that CanOt be Changed
const UnchangeableVariable = " wow it CanOt be change";
undefined
 UnchangeableVariable
' wow it CanOt be change'
42 - 10
32
let answerToLife = 42;
32
// Variable Exercise
let name = "simple"
undefined
name
'simple'
document.getElementById("board")
let board = document.getElementById("board")
undefined

// Evaluating Code
let answerToLife = ((4 + 1) * 2 * 4) + 2;
undefined
answerToLife
42
let scrub = " you are my guy";
let busta =scrub;
scrub = "you always be my friend";

// Array 
let synonyms = ["good", "life", "mater"];
undefined
synonyms
(3) ['good', 'life', 'mater']
synonyms[1] = "variety";
'variety'
synonyms
(3) ['good', 'variety', 'mater']
let lastItem = synonyms.pop()
undefined
lastItem
'mater'
synonyms
(2) ['good', 'life']
synonyms.push("multitude");
3
synonyms
(3) ['good', 'life', 'multitude']

// useful Array method
["a", "b", "c", "d"].sort()
(4) ['a', 'b', 'c', 'd']
// [3, 4, 1, 2,].sort()
(4) [1, 2, 3, 4]
// [100, 1, 10,].sort()
(3) [1, 10, 100]
["100", "1", "10"].sort()
(3) ['1', '10', '100']
["goat", "lions", "tigers", "bears oh my!"].join(" & ")
'goat & lions & tigers & bears oh my!'
["simple", "williams"]
(2) ['simple', 'williams']
let name = ["simple", "williams"]
undefined
name[0] + " " + name[1]
'simple williams'
name.join(" ")
'simple williams'
name.join()
'simple,williams'

[1, 2, 3].concat([4, 5, 6])
(6) [1, 2, 3, 4, 5, 6]
[1, 2, 3].push(4)
4
let a =[1, 2, 3]
undefined
a
(3) [1, 2, 3]
a.push(4)
4
a
(4) [1, 2, 3, 4]
b.push[5, 6, 7]
undefined
b.push([5, 6, 7])
5
b
(5) [1, 2, 3, 4]

MUTABILITY
let AbcArray= ["a", "b", "c"];
undefined
AbcArray
(3) ['a', 'b', 'c']
AbcArray[1] = "d";
'd'
AbcArray
(3) ['a', 'd', 'c']
let AbcString = "abc";
undefined
AbcString
'abc'
AbcString[1] = "d"
'd'
AbcString
'abc'
// mutable and immutable data Exerise
let number1 = [1, 2, 3];
undefined
number1
(3) [1, 2, 3]
let result1 = number1.push(4)
undefined
result1
4
number1
(4) [1, 2, 3, 4]
let number2 = [1, 2, 3]
undefined
number2
(3) [1, 2, 3]
// Variable themselves can also be (im) mutable
let LetVariable = "original value"
undefined
LetVariable
'original value'
LetVariable = " new value"
' new value'
const ConstVariable = " original value"
undefined
ConstVariable
' original value'
// Immutable variable with mutable value
const operands =[4, 6];
undefined
operands
(2) [4, 6]
const sum = operands[0] + operands[1];
undefined
sum
10
operands[0] =5;
5
const newsum =operands[0] + operands[1];
undefined
newsum
11
// Variable and array
let array1 = [1, 2, 3];
undefined
array1
(3) [1, 2, 3]
let array2 = array1;
undefined
array2 
(3) [1, 2, 3]
array1[1] = 5;
5
array1
(3) [1, 5, 3]
array2
(3) [1, 5, 3]
// Objects and property acces
const js = {
    name: "javaScripts",
    abbreviation: "JS",
    isAwesome: true,
    officialspec: "ECMAScript",
    birthYear: 1995,
    creator: "brendan Eich"
};
undefined
js
// {name: 'javaScripts', abbreviation: 'JS', isAwesome: true, officialspec: 'ECMAScript', birthYear: 1995, …}
js.name
'javaScripts'
js.isAwesome
true
js.name.startsWith("java")
true
js.name
'javaScripts'
let age = 2022 - js.birthYear;
undefined
age
27
// Setting  Property values
const indecisive = {
    lunch: "sandwhich"
};
undefined
indecisive
// {lunch: 'sandwhich'}lunch: "sandwhich"[[Prototype]]: Object
indecisive.lunch
'sandwhich'
indecisive.lunch = "tacos";
'tacos'
indecisive.snack = "ships";
'ships'
indecisive
// {lunch: 'tacos', snack: 'ships'}

// Visaulizing object Access
typeof { snack: "ships"}
'object'
typeof ["ships"]
'object'
["ships"].length
1
["ships", "tacos"][0]
'ships'

//  Object Exercise
const simple = {
    name: "simple",
    home: "20A medical Road ikeja lagos",
    languages: ["English", "igbo", "china"],
    pet: null,
    vehicle: "Toyata",
    hobbies: ["travel", "playing", "music", "money"],
};
// {name: 'simple', home: '20A medical Road ikeja lagos', languages: Array(3), pet: null, vehicle: 'Toyata', …}
hobbies
: 
(4) ['travel', 'playing', 'music', 'money']
home
: 
"20A medical Road ikeja lagos"
languages
: 
(3) ['English', 'igbo', 'china']
name
: 
"simple"
pet
: 
null
vehicle
: 
"Toyata"

// Methods
const dog = {
    name: "kiss",
    breed: "corgi",
    speak: function () {
        console.log("woof woof");
    }
}
undefined
dog
// {name: 'kiss', breed: 'corgi', speak: }
dog.speak()
//  woof woof
undefined

const simple = {name: "simple"}
undefined
simple
{name: 'simple'}
simple.speak = function () {
    console.log('hi my name is', this.name);
}
simple.speak()
//  hi my name is simple
 underfined

//  Object in Array object
const spices = [
    {name: "simple", nickname: "baby"},
    {name: "williams", nickname: "will"},
    {name: "sunday", nickname: "sunn"},
    {name: "henry", nickname: "victor"},
];
const spicesGirls = {
    albums: ["Spices", "Spiceworld", "foever"],
    motor: "Girl power"
};

// Build in object
console.log("hi")
 hi
undefined
console.warn("oh")
 oh 
undefined
console.error("no")
no
undefined

Math
Math.PI
3.141592653589793
Math.random()
0.8428400624667989
Math.random()
0.6361760816907729
let s = "string"
undefined
s.toUpperCase()
'STRING'
s
'string'
let s2 = s.toUpperCase()
undefined
s2
'STRING'
s
'string'

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
const whisper2 = (text) => console.log(text.toLoweCase())
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


        // Quiz
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