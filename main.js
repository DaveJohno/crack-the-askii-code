// Askii Decode Function
const decode = (str) => {
  console.log(str, typeof str);

  console.log(str.split(" "));
  return str
    .split(" ")
    .map((askiiCode) => String.fromCharCode(askiiCode))
    .join("");
};

// Askii Encode Function
const encode = (str) => {
  console.log(str);
  return str
    .split("")
    .map((askiiChar) => {
      let askiiCode = askiiChar.charCodeAt();

      return askiiCode > 99 ? `${askiiCode}` : `0${askiiCode}`;
    })
    .join(" ");
};

// getting the input text area's
const inputCodebox = document.querySelector("#inputCode");
const inputTextbox = document.querySelector("#inputText");

console.log(inputCodebox.innerHTML, inputTextbox.innerHTML);

// getting the text boxes for the output.
const decodedTextBox = document.querySelector("#decodedText");
const encodedTextBox = document.querySelector("#encodedText");

// getting the values of the input boxes and displaying the code/text
// decoder
document.querySelector("#decodeBtn").addEventListener("click", (event) => {
  event.preventDefault();

  let code = inputCodebox.value;

  decodedTextBox.innerHTML = `${decode(code)}`;

  inputCodebox.value = "";
});

// encoder
document.querySelector("#encodeBtn").addEventListener("click", (event) => {
  event.preventDefault();

  let text = inputTextbox.value;

  encodedTextBox.innerHTML = `${encode(text)}`;

  inputTextbox.value = "";
});
