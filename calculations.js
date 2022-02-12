// Global variable
let valueKeeper;
let operation;
let newV;

// Screen Clear event handle
function screenClear() {
    const screen = document.getElementById('screen');
    screen.innerText = '0';
}

function getScreenNumber() {
    const screen = document.getElementById('screen');
    const screenText = screen.innerText;
    const screenNumber = parseFloat(screenText);
    return screenNumber;
}
// AC button event handle
document.getElementById('AC').addEventListener('click', function () {
    screenClear();
});

// Normal button event handle
const buttons = document.getElementsByClassName('button');
for (const button of buttons) {
    button.addEventListener('click', function (event) {
        const screen = document.getElementById('screen');
        const screenText = screen.innerText;
        if (screenText.length < 16) {
            if (screenText == '0' || newV == '') {
                screen.innerText = event.target.innerText;
                newV = ' ';
            }
            else {
                screen.innerText = screenText + event.target.innerText;
            }
        }
        else {
            alert('Reached Limit');
        }
    });
}

// Operations events

// Addition event
document.getElementById('addition').addEventListener('click', function () {
    valueKeeper = getScreenNumber();
    operation = 'addition';
    screenClear();
});
// Multiplication event
document.getElementById('multiplication').addEventListener('click', function () {
    valueKeeper = getScreenNumber();
    operation = 'multiplication';
    screenClear();
});
// Division event
document.getElementById('division').addEventListener('click', function () {
    valueKeeper = getScreenNumber();
    operation = 'division';
    screenClear();
});
// subtraction event
document.getElementById('subtraction').addEventListener('click', function () {
    valueKeeper = getScreenNumber();
    operation = 'subtraction';
    screenClear();
});
// Root event
document.getElementById('root').addEventListener('click', function () {
    valueKeeper = getScreenNumber();
    const screen = document.getElementById('screen');
    screen.innerText = Math.sqrt(valueKeeper);
    newV = '';
});

// Result section
document.getElementById('result').addEventListener('click', function () {
    const newValue = getScreenNumber();
    const screen = document.getElementById('screen');
    if (operation == 'addition') {
        screen.innerText = newValue + valueKeeper;
    }
    if (operation == 'multiplication') {
        screen.innerText = newValue * valueKeeper;
    }
    if (operation == 'division') {
        screen.innerText = valueKeeper / newValue;
    }
    if (operation == 'multiplication') {
        screen.innerText = newValue * valueKeeper;
    }
    if (operation == 'subtraction') {
        screen.innerText = valueKeeper - newValue;
    }
    operation = '';
    newV = '';
});