function calculate(expression) {
  // split the expression
  const splitExpression = expression.split(" ");
  console.log(splitExpression);

  // return invalid input if too many inputs entered
  if (splitExpression.length > 3) {
    return alert("Too many inputs. Please try again...");
  }

  // return invaild input if too few inputs
  if (splitExpression.length < 2) {
    return alert("Too few inputs. Please try again...");
  }

  // proper length
  if (splitExpression.length === 3) {
    // unpack array
    let num1 = Number(splitExpression[0]);
    let operator = splitExpression[1];
    let num2 = Number(splitExpression[2]);

    // check for NaN and send error alert
    if (isNaN(num1) || isNaN(num2)) {
      return alert("Incorrect input format. Please try again...");
    }

    // choose the operation to run
    switch (operator) {
      case "+":
        console.log("run addition");
        return add(num1, num2);
        break;

      case "-":
        console.log("run subtract");
        return subtract(num1, num2);
        break;

      case "*":
        console.log("run multiply");
        return multiply(num1, num2);
        break;

      case "/":
        console.log("run divide");
        return divide(num1, num2);
        break;

      case "^" || "**":
        console.log("run power");
        return power(num1, num2);
        break;

      case "%":
        console.log("run mod");
        return mod(num1, num2);
        break;

      default:
        console.log("invalid operator");
        return "Invalit operator. Please try again...";
        break;
    }

    // check for square root & factorial format
  } else if (splitExpression.length == 2) {
    // unpack array again
    let operator = splitExpression[0];
    let num1 = Number(splitExpression[1]);
    //console.log(operator, num1);

    // check for NaN and send error alert
    if (isNaN(num1)) {
      return alert("Incorrect input format. Please try again...");
    }

    // for factorials, check for negative and decimnal numbers and send error alert
    if ((operator === "!" && num1 < 0) || !Number.isInteger(num1)) {
      return alert(
        "cant run factorial with a negative number. Please try again..."
      );
    }

    // choose between square root or factorial function
    switch (operator) {
      case "sqrt":
        console.log("run square root");
        return sqrt(num1);
        break;

      case "!":
        console.log("run factorial");
        return factorial(num1);
        break;
    }
  }
}

// addition
function add(num1, num2) {
  console.log(num1, num2);
  return num1 + num2;
}

// subtraction
function subtract(num1, num2) {
  return num1 - num2;
}

// multiplication
function multiply(num1, num2) {
  console.log(num1, num2);
  return num1 * num2;
}

// division
function divide(num1, num2) {
  return num1 / num2;
}

// squared
function power(num1, num2) {
  return num1 ** num2;
}

// mod
function mod(num1, num2) {
  return num1 % num2;
}

// square root
function sqrt(num1) {
  return Math.sqrt(num1);
}

// factorial
function factorial(num1) {
  let newNum = num1;
  let reducerNum = num1 - 1;
  console.log(`newNum: ${newNum}`);
  console.log(`reducerNum: ${reducerNum}`);

  while (reducerNum > 0) {
    newNum *= reducerNum;
    reducerNum--;
  }
  console.log(newNum);
  return newNum;
}

/* **************** DO NOT EDIT THE CODE BELOW **************** */
/* ************************************************************ */
/* **************** DO NOT EDIT THE CODE BELOW **************** */

// When the Submit button is clicked, this code calls your `calculate` function
// and then inserts the result on the HTML page.
document.querySelector("#submitButton").addEventListener("click", () => {
  const result = calculate(document.querySelector("#expression").value);
  if (result !== undefined) {
    document.querySelector("#answer").innerText = result;
  }
});
