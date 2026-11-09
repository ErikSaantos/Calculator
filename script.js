function clean(){
    const screen = document.getElementById('screen');
    if (screen) screen.value = '';
}

function remove(){
    const screen = document.getElementById('screen');
    if (screen) screen.value = screen.value.slice(0, -1); //gpt helped me
}

function takeDigit(num){
    const screen = document.getElementById('screen');
    if (screen) screen.value += num;
}

function calculateValue(expression) {
    if (!expression) return 0;
    return Number(eval(expression));
}

function calculate(){
    const screen = document.getElementById('screen');
    if (screen) {
        screen.value = calculateValue(screen.value);
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { clean, remove, takeDigit, calculateValue, calculate };
}
