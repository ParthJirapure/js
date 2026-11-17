
// Function Declaration
function cleanText(str) {
    return str.toLowerCase().replace(/[^a-z0-9]/g, "");
}

// Function Expression
const reverseText = function(str) {
    return str.split("").reverse().join("");
};

// Arrow Function
const isPalindrome = text =>
    cleanText(text) === reverseText(cleanText(text));

// Anonymous Function
const welcome = function() {
    console.log("Welcome User");
};
welcome();

// Callback Function
function displayMessage(msg, callback) {
    document.getElementById("result").innerText = msg;
    callback();
}

// Closure
function createCounter() {
    let count = 0;
    return function() { return ++count; };
}
const counter = createCounter();

// Lexical Scope
function outer() {
    let msg = "Lexical Scope";
    function inner() { console.log(msg); }
    inner();
}
outer();

// Main Function
function checkPalindrome() {
    try {
        let input = document.getElementById("text").value;
        if (!input.trim()) throw "Please enter text.";

        let result = isPalindrome(input) ?
            "It is a Palindrome ✔" : "Not a Palindrome ✖";

        displayMessage(result, function() {
            document.getElementById("count").innerText =
                "Total Checks: " + counter();
        });
    } catch(e) {
        document.getElementById("result").innerText = e;
    } finally {
        console.log("Check completed");
    }
}
