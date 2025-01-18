// // Arithmetic Functions
// function add(number1, number2) {
//   return number1 + number2;
// }

// function subtract(number1, number2) {
//   return number1 - number2;
// }

// function multiply(number1, number2) {
//   return number1 * number2;
// }

// function divide(number1, number2) {
//   if (number2 === 0) {
//     return 'Error: Division by zero';
//   }
//   return number1 / number2;
// }

// // Attach Event Listeners
// document.getElementById('add')!.addEventListener('click', function() {
//   const number1Element = document.getElementById('number1');
//   const number1 = number1Element ? parseFloat((number1Element as HTMLInputElement).value) || 0 : 0;
//   const number2Element = document.getElementById('number2');
//   const number2 = number2Element ? parseFloat((number2Element as HTMLInputElement).value) || 0 : 0;
//   const result = add(number1, number2);
//   const resultElement = document.getElementById('calculation-result');
//   if (resultElement) {
//     resultElement.textContent = result;
//   }
// });

// document.getElementById('subtract')!.addEventListener('click', function() {
//   const number1Element = document.getElementById('number1');
//   const number1 = number1Element ? parseFloat((number1Element as HTMLInputElement).value) || 0 : 0;
//   const number2Element = document.getElementById('number2');
//   const number2 = number2Element ? parseFloat((number2Element as HTMLInputElement).value) || 0 : 0;
//   const result = subtract(number1, number2);
//   const resultElement = document.getElementById('calculation-result');
//   if (resultElement) {
//     resultElement.textContent = result.toString();
//   }
// });

// document.getElementById('multiply')!.addEventListener('click', function() {
//   const number1Element = document.getElementById('number1');
//   const number1 = number1Element ? parseFloat((number1Element as HTMLInputElement).value) || 0 : 0;
//   const number2Element = document.getElementById('number2');
//   const number2 = number2Element ? parseFloat((number2Element as HTMLInputElement).value) || 0 : 0;
//   const result = multiply(number1, number2);
//   const resultElement = document.getElementById('calculation-result');
//   if (resultElement) {
//     resultElement.textContent = result.toString();
//   }
// });

// document.getElementById('divide')!.addEventListener('click', function() {
//   const number1Element = document.getElementById('number1');
//   const number1 = number1Element ? parseFloat((number1Element as HTMLInputElement).value) || 0 : 0;
//   const number2Element = document.getElementById('number2');
//   const number2 = number2Element ? parseFloat((number2Element as HTMLInputElement).value) || 0 : 0;
//   const result = divide(number1, number2);
//   const resultElement = document.getElementById('calculation-result');
//   if (resultElement) {
//     resultElement.textContent = result.toString();
//   }
// });

function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  if (number2 === 0) {
    return "Error: Division by zero";
  }
  return number1 / number2;
}

const addButton = document.getElementById("add");
if (addButton) {
  addButton.addEventListener("click", function () {
    const number1Element = document.getElementById("number1");
    const number2Element = document.getElementById("number2");
    const resultElement = document.getElementById("calculation-result");
    if (number1Element && number2Element && resultElement) {
      const number1 = parseFloat(number1Element.value) || 0;
      const number2 = parseFloat(number2Element.value) || 0;
      const result = add(number1, number2);
      resultElement.textContent = result.toString();
    }
  });
}

const subtractButton = document.getElementById("subtract");
if (subtractButton) {
  subtractButton.addEventListener("click", function () {
    const number1Element = document.getElementById("number1");
    const number2Element = document.getElementById("number2");
    const resultElement = document.getElementById("calculation-result");
    if (number1Element && number2Element && resultElement) {
      const number1 = parseFloat(number1Element.value) || 0;
      const number2 = parseFloat(number2Element.value) || 0;
      const result = subtract(number1, number2);
      resultElement.textContent = result.toString();
    }
  });
}

const multiplyButton = document.getElementById("multiply");
if (multiplyButton) {
  multiplyButton.addEventListener("click", function () {
    const number1Element = document.getElementById("number1");
    const number2Element = document.getElementById("number2");
    const resultElement = document.getElementById("calculation-result");
    if (number1Element && number2Element && resultElement) {
      const number1 = parseFloat(number1Element.value) || 0;
      const number2 = parseFloat(number2Element.value) || 0;
      const result = multiply(number1, number2);
      resultElement.textContent = result.toString();
    }
  });
}

const divideButton = document.getElementById("divide");
if (divideButton) {
  divideButton.addEventListener("click", function () {
    const number1Element = document.getElementById("number1");
    const number2Element = document.getElementById("number2");
    const resultElement = document.getElementById("calculation-result");
    if (number1Element && number2Element && resultElement) {
      const number1 = parseFloat(number1Element.value) || 0;
      const number2 = parseFloat(number2Element.value) || 0;
      const result = divide(number1, number2);
      resultElement.textContent = result.toString();
    }
  });
}
