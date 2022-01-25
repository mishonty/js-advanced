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
