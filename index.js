// Part 1

// Data Types
let score = 100;
let temperature = 36.6;
let greeting = "Hello, JavaScript!";
let isLearningFun = true;
console.log(score + " " + temperature + " " + greeting + " " + isLearningFun);

// Objects and Arrays
let student = {
    name: "LeBron James",
    age: 22,
    subjects: ["Quantum Computing", "Chalk Toss", "THATS OUR BALL THATS OUR BALL"]
};
student.isGraduated = false;
let primeNumbers = [2,3,5,7,11];
primeNumbers[1] = 4;
console.log(primeNumbers[1] + ": Mistake detected");
primeNumbers[1] = 3;
console.log(primeNumbers);

// Operators
let x = 29; let y = 15;
let sum = x + y; let product = x * y; let remainder = x % y;
console.log("Sum: " + sum + "\nProduct: " + product + "\nModulus: " + remainder);
let b1 = true; let b2 = false;
let andResult = b1 && b2;
console.log(andResult);

// Conditional & Control Flow
if(score > 50) {
    console.log("Great job!");
}
else {
    console.log("Keep trying!");
}
for(const num of primeNumbers) {
    console.log(num);
}
while(score > 0) {
    score -= 1;
}

// Functions
function eventCountdown(eventDate) {
    const now = new Date();
    const event = new Date(eventDate);
    const timeDiff = event - now;
  
    let seconds = Math.floor(timeDiff / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
  
    hours %= 24;
    minutes %= 60;
    seconds %= 60;
  
    return `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds remaining until the event.`;
}
  
const countdownMessage = eventCountdown('December 31, 2024 23:59:59');
console.log(countdownMessage); // Outputs the time remaining until New Year's Eve 2024

/*  The above functions creates two Date objects, one for the current date and time and one for the date and time of the event.
    It then subtracts the current date and time from the event date and time, returning the time remaining until the event in milliseconds.
    Then it converts that into seconds, minutes, hours and days. Finally, it accounts for more than one of each unit except the days by using
    the modulus operator and taking only the remainders. Finally, it returns a formatted string that states the time remaining until the event. */

function swapThree(a, b, c) {
    let temp = a;
    a = c;
    c = b;
    b = temp;
}

function findLongestWord(sentence) {
    const words = sentence.split(' '); // words is an array of all the words in the sentence
    let maxLen = 0; let longestWord = "";
    for(let i = 0; i < words.length; i++) {
        if(words[i].length > maxLen) {
            maxLen = words[i].length;
            longestWord = words[i];
        }
    }
    return longestWord;
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));