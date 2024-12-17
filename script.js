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

// telephone validator
const validatorInput = document.getElementById("validator-input");
const validatorCheck = document.getElementById("check-btn");
const validatorClear = document.getElementById("clear-btn");
const validatorResult = document.getElementById("validator-result");

const checkValueV = (input) => {
  validatorResult.textContent = "";

  if (input === "") {
    alert("Please provide a phone number");
    return;
  }

  // regex
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

  console.log(input);
};

// idk what is forcefully clearing the result (it was the form element)
const clearValue = () => {
  validatorResult.classList.add("hidden");
  validatorResult.textContent = "";
};

validatorCheck.addEventListener("click", (e) => {
  e.preventDefault();
  checkValueV(validatorInput.value);
});
validatorClear.addEventListener("click", (e) => {
  e.preventDefault();
  clearValue();
});

// roman number conversion
const conversionResult = document.getElementById("converter-result");
const conversionForm = document.getElementById("form");

const numToRoman = (num) => {
  const romaNum = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];
  const results = [];

  romaNum.forEach((arr) => {
    while (num >= arr[1]) {
      results.push(arr[0]);
      num -= arr[1];
    }
  });
  return results.join("");
};

const converToInt = () => {
  const numStr = document.getElementById("conversion-number").value;
  const int = parseInt(numStr);
  return int;
};

const checker = (ui, i) => {
  if (i.value === "") {
    conversionResult.innerHTML = `<p>Please enter a valid number</p>`;
  } else if (ui < 1) {
    conversionResult.innerHTML = `<p>Please enter a number greater than or equal to 1<p>`;
  } else if (ui > 3999) {
    conversionResult.innerHTML = `<p>Please enter a number less than or equal to 3999</p>`;
  } else {
    return true;
  }
};

const conversionRender = () => {
  const input = document.getElementById("conversion-number");
  const userInput = converToInt();

  conversionResult.classList.remove("hidden");

  if (checker(userInput, input)) {
    conversionResult.innerText = numToRoman(userInput);
  }
  input.value = "";
};

conversionForm.addEventListener("submit", (e) => {
  e.preventDefault();
  conversionResult.classList.remove("hidden");
  conversionRender();
});
