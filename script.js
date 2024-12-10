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
  const userInput = input;

  if (userInput === "") {
    alert("Please provide a phone number");
    return;
  }
  const countryCode = "^(1\\s?)?";
  const areaCode = "(\\([0-9]{3}\\)|[0-9]{3})";
  const spacesDashes = "[\\s\\-]?";
  const phoneNumber = "[0-9]{3}[\\s\\-]?[0-9]{4}$";
  const phoneRegex = new RegExp(
    `${countryCode}${areaCode}${spacesDashes}${phoneNumber}`
  );

  validatorResult.classList.remove("hidden");

  validatorResult.innerHTML += `${
    phoneRegex.test(input) ? "Valid" : "Invalid"
  } US number: ${input}`;
  validatorInput.value = "";

  console.log(userInput);
};
// idk what is forcefully clearing the result
const clearValue = () => {
  validatorResult.classList.add("hidden");
};

validatorCheck.addEventListener("click", () => {
  checkValueV(validatorInput.value);
});
validatorClear.addEventListener("click", clearValue);
