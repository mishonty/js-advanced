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
    
    // 3
    function toggle() {
    
    const hiddenText = document.getElementById("extra");
    const button = document.getElementsByClassName("button")[0];

    if (button.textContent === 'More') {
        hiddenText.style.display = 'block';
        button.textContent = 'Less';
    } else {
        hiddenText.style.display = 'none';
        button.textContent = 'More';
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

// 4
function search() {

   const towns = document.querySelectorAll('ul#towns>li');
   const search = document.getElementById('searchText').value;
   const resultElement = document.getElementById('result');

   let result = 0;

   for (let town of towns) {

      let match = town.textContent.toLowerCase();
      if (match.includes(search.toLowerCase())) {
         town.style.textDecoration = 'underline';
         town.style.fontWeight = 'bold';
         result++;
      }

      if (!match.includes(search.toLowerCase())) {
         town.style.textDecoration = 'none';
         town.style.fontWeight = 'normal';
      }
   }

   resultElement.innerHTML = `${result} matches found`;
}

// 5
function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {

      const dataElement = document.querySelectorAll('tbody tr');
      const searchQuery = document.getElementById('searchField').value.toLowerCase();
      const dataArray = Array.from(dataElement);

      for (let el of dataArray) {
         const text = el.textContent.toLowerCase();

         if (text.includes(searchQuery)) {
            el.classList.add('select');
         } else {
            el.classList.remove('select');
         }
      }
   }
}

// 6
function solve() {

  const textInput = document.getElementById('input').value;
  const divOutput = document.getElementById('output');
  const sentences = textInput.split('.').filter(el => el.length > 0);
  let count = 0;
  let output = ``;

  for (let sentence of sentences) {
    output += `${sentence}.`;
    count++;

    if (count >= 3) {
      divOutput.innerHTML += `<p>${output}</p>`;
      output = ``;
      count = 0;
    }
  }

  if (output !== ``) {
    divOutput.innerHTML += `<p>${output}</p>`;
  }
}
