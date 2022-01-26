// 1
function subtract() {

    let firstNumElement = document.getElementById('firstNumber').value;
    let secondNumElement = document.getElementById('secondNumber').value;

    let resultElement = document.getElementById('result');
    resultElement.textContent = Number(firstNumElement) - Number(secondNumElement);
}

// 2
function solve() {

  let input = document.getElementById('text').value;
  let string = input.toLowerCase();
  let strArr = string.split(" ");

  let targetCase = document.getElementById('naming-convention').value;

  // Target case to array
  targetCase = targetCase.toLowerCase();
  targetCase = targetCase.split(' ');
  let sample = ``;

  for (let word of strArr) {

    let i = 0;
    for (let ch of word) {
      if (i === 0) {
        ch = ch.toUpperCase();
      }
      i++;
      sample += `${ch}`;
    }
  }

  let target = targetCase[0];
  let result = ``;
  let resultContainer = document.getElementById('result');

  let firstChar = sample[0].toLowerCase();
  let otherChars = ``;

  for (let char = 0; char < sample.length; char++) {
    if (char !== 0) {
      otherChars += `${sample[char]}`;
    }
  }

  switch (target) {
    case "pascal":
      result = sample;
      break;
    case "camel":
      result = firstChar + otherChars;
      break;
    default:
      result = 'Error!';
      break;
  }

  result = result.trim();
  resultContainer.textContent = result;
}
