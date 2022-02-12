// Screen Clear event handle
document.getElementById('AC').addEventListener('click', function () {
    const screen = document.getElementById('screen');
    screen.innerText = '0';
});
// Normal button event handle
const buttons = document.getElementsByClassName('button');
for (const button of buttons) {
    button.addEventListener('click', function (event) {
        const screen = document.getElementById('screen');
        const screenText = screen.innerText;
        if (screenText.length < 16) {
            if (screenText == '0') {
                screen.innerText = event.target.innerText;
            }
            else {
                screen.innerText = screenText + event.target.innerText;
            }
        }
        else {
            alert('Reached Limit');
        }

    })
}