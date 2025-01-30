// Copy Passwords
const button1 = document.getElementById("copy1-el");
const button2 = document.getElementById("copy2-el");
const toCopy1 = document.getElementById("pass1-el");
const toCopy2 = document.getElementById("pass2-el");

const passwordGenerator = document.getElementById("genPass-el");

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
      alert("Password copied!");
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
}

//-------------------------------------------------------

//Password Generator

passwordGenerator.addEventListener("click", () => {
  function genPass(len) {
    var length = len ? len : 15;
    var string = "abcdefghijklmnopqrstuvwxyz"; //to upper
    var numeric = "0123456789";
    var punctuation = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    var password = "";
    var character = "";
    var crunch = true;
    while (password.length < length) {
      entity1 = Math.ceil(string.length * Math.random() * Math.random());
      entity2 = Math.ceil(numeric.length * Math.random() * Math.random());
      entity3 = Math.ceil(punctuation.length * Math.random() * Math.random());
      hold = string.charAt(entity1);
      hold = password.length % 2 == 0 ? hold.toUpperCase() : hold;
      character += hold;
      character += numeric.charAt(entity2);
      character += punctuation.charAt(entity3);
      password = character;
    }
    password = password
      .split("")
      .sort(function () {
        return 0.5 - Math.random();
      })
      .join("");
    return password.substr(0, len);
  }
  toCopy1.textContent = genPass();
  toCopy2.textContent = genPass();
});
