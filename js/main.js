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