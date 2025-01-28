const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

// Copy Passwords
const button1 = document.getElementById("copy1-el");
const button2 = document.getElementById("copy2-el");

const toCopy1 = document.getElementById("pass1-el");
const toCopy2 = document.getElementById("pass2-el");

let button1Clicked = false;
let button2Clicked = false;

button1.addEventListener("click", () => {
  button1Clicked = true;
  if (button1Clicked) {
    copyToClipboard(toCopy1.textContent);
    button1Clicked = false; // Reset flag
  }
});

button2.addEventListener("click", () => {
  button2Clicked = true;
  if (button2Clicked) {
    copyToClipboard(toCopy2.textContent);
    button2Clicked = false;
  }
});

function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert("Text copied!");
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
}
