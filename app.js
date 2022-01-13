function display(val) {
    document.getElementById('result').value += val;
}

function solve() {
    let a = document.getElementById('result').value
    let b = eval(a);
    document.getElementById('result').value = b
}

function clearScreen() {
    document.getElementById('result').value = ''
}