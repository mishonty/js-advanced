// 1
function editElement(ref, match, replacer) {
    
    const content = ref.textContent;
    const matcher = new RegExp(match, 'g');
    const edited = content.replace(matcher, replacer);
    ref.textContent = edited;
  }

// 2
function extractText() {
    
    const textLiElement = document.querySelectorAll('ul#items li')
    const textArea = document.querySelector('#result');

    for (const el of textLiElement) {
        textArea.value += el.textContent + '\n';
    }
}

// 3
function calc() {

    const firstElement = document.getElementById('num1').value;
    const secondElement = document.getElementById('num2').value;

    let sumElement = Number(firstElement) + Number(secondElement);

    document.getElementById('sum').value = sumElement;
}

// 4
function showText() {
    
    let elementToShow = document.getElementById('text');
    let elementToHide = document.getElementById('more');

    elementToShow.style.display = 'inline';
    elementToHide.style.display = 'none';
}

// 5
function colorize() {

    const row = document.querySelectorAll('table tr');

    let index = 0
    for (let el of row) {

        index++;
        if (index % 2 === 0) {
            el.style.background = 'teal';
        }
    }
}
