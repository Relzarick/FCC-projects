const palindromeInput = document.getElementById("palindrome-input");
const palindromeBtn = document.getElementById("palindrome-btn");
const palindromeResult = document.getElementById("palindrome-result");

const checkValueP = () => {
  const userInput = palindromeInput.value;
  const input = userInput.toLowerCase().split(" ").join("");
  const reversedInput = input.toLowerCase().split("").reverse().join("");

  if (userInput === "") {
    alert("Please input a value");
  } else if (input === reversedInput) {
    palindromeResult.innerHTML = `${userInput} is a palindrome`;
    palindromeInput.value = "";
  } else {
    palindromeResult.innerHTML = `${userInput} is not a palindrome`;
    palindromeInput.value = "";
  }
};

palindromeBtn.addEventListener("click", checkValueP);

const validatorInput = document.getElementById("validator-input");
const validatorCheck = document.getElementById("check-btn");
const validatorClear = document.getElementById("clear-btn");
const validatorResult = document.getElementById("validator-result");

const checkValueV = (input) => {
  if (input === "") {
    alert("Please provide a phone number");
    return;
  }

  console.log(input);
};

const clearValue = () => {
  validatorResult.textContent = "";
};

validatorCheck.addEventListener("click", () => {
  checkValueV(validatorInput.value);
  validatorInput.value = "";
});
validatorClear.addEventListener("click", clearValue);
