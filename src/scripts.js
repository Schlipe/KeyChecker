
const keys = document.querySelectorAll('.key');
const textArea = document.getElementById('testArea');
const counterDisplay = document.getElementById('counter');
let testedKeysCount = 0;

// array para as keys que podem afetar o teste
const preventDefaultKeys = [
    'alt', 'control', 'meta', 'shift', 'tab', 'escape',
    'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'f10', 'f11', 'f12',
    'numlock', 'capslock'
];

textArea.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    const code = event.code.toLowerCase();//numpad

    // previne
    if (preventDefaultKeys.includes(key)) {
        event.preventDefault();
    }

    
    if (code.startsWith('numpad')) {
        markKeyAsPressed(code);
    } else {
        markKeyAsPressed(key);
    }
});

function markKeyAsPressed(key) {
    const keyElement = document.querySelector(`.key[data-key="${key}"]`);
    if (keyElement && !keyElement.classList.contains('active')) {
        keyElement.classList.add('active');
        testedKeysCount++;
        counterDisplay.textContent = testedKeysCount;
    }
}

function resetTest() {
    textArea.value = '';
    testedKeysCount = 0;
    counterDisplay.textContent = testedKeysCount;
    keys.forEach(key => {
        key.classList.remove('active');
    });
}