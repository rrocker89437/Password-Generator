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

// const textToCopy = "This text will be copied!";
// let textEl = document.getElementById("copy1-el");

// function copyTextToClipboard() {
//   var copyText = document.getElementById("copy1-el");

//   copyText.select();
//   //textEl.setSelectionRange(0, 99999);

//   navigator.clipboard.writeText(copyText.value);

//   alert("Copied the text: " + copyText.value);
// }
// copyTextToClipboard(textToCopy);

function copyTextToClipboard() {
  let copyText = document.getElementById("pass1-el");

  // Get the text content, handling different element types
  let textToCopy = copyText;
  let subTextToCopy = copyTextTwo;
  if (copyText) {
    textToCopy = copyText.textContent || copyText.innerText || ""; // Handle different ways text is stored
  } else {
    console.error("Element not found.");
    return; // Exit the function if the element doesn't exist
  }

  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      alert("Copied the text: " + textToCopy);
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
      alert("Failed to copy text. Please try again."); // Provide user feedback on failure
    });

  //   let textToCopyTwo = copyTextTwo;
  //   if (copyTextTwo) {
  //     textToCopyTwo = copyTextTwo.textContent || copyTextTwo.innerText || ""; // Handle different ways text is stored
  //   } else {
  //     console.error("Element not found.");
  //     return; // Exit the function if the element doesn't exist
  //   }

  //   navigator.clipboard
  //     .writeText(textToCopyTwo)
  //     .then(() => {
  //       alert("Copied the text: " + textToCopyTwo);
  //     })
  //     .catch((err) => {
  //       console.error("Failed to copy: ", err);
  //       alert("Failed to copy text. Please try again."); // Provide user feedback on failure
  //     });
}
