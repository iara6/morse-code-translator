const input = document.getElementById("input-string");
const button = document.getElementById("sumbit-btn");
const output = document.getElementById("output");

const morseCodeAlphabet = [
  ["A", ".-"], ["B", "-..."], ["C", "-.-."],
  ["D", "-.."], ["E", "."], ["F", "..-."],
  ["G", "--."], ["H", "...."], ["I", ".."],
  ["J", ".---"], ["K", "-.-."], ["L", ".-.."],
  ["M", "--"], ["N", "-."], ["O", "---"],
  ["P", ".--."], ["Q", "--.-"], ["R", ".-."],
  ["S", "..."], ["T", "-"], ["U", "..-"],
  ["V", "...-"], ["W", ".--"], ["X", "-..-"],
  ["Y", "-.--"], ["Z", "--.."], 
 /*  [1, ".----"], [2, "..---"], [3, "...--"],
  [4, "....-"], [5, "....."], [6, "-...."],
  [7, "--..."], [8, "---.."], [9, "----."],
  [0, "-----"], */
];

/* outerArray = [
  ["apple", "banana", "cherry"], 
  ["dog", "elephant", "fox"],  
  ["grape", "honeydew", "kiwi"]  
];
const thing = outerArray[0][2];
console.log(thing); //cherry

let result = [];
result.push("word", "new");
result.push(outerArray[0][2], thing);
console.log(result); */




button.addEventListener("click", () => {
  let inputTextArray = input.value.toUpperCase().split('');
  let result = []; 

  inputTextArray.forEach(letter => {
    for (let i = 0; i < morseCodeAlphabet.length; i++) {
        if (letter === morseCodeAlphabet[i][0]) {
          result.push(morseCodeAlphabet[i][1]);
        break;
      }
     }
    });

    output.textContent = result.join(" ");
  });
 
