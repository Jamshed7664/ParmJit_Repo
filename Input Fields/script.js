document.getElementById('mySign').classList.add('fa-rupee');
document.getElementById('button').innerHTML = 'Pay'
let moneyValye = 0;
let onInputValue = () => {
    let inputValue = document.getElementById('myInput');
    let value = isNaN(inputValue.value);
    console.log();
    if (!value && !(Number(inputValue.value) > 100000)) {
        document.getElementById('mySign').classList.remove('fa-comment');
        document.getElementById('mySign').classList.add('fa-rupee');
        document.getElementById('button').innerHTML = 'Pay'
        inputValue.style.color = 'green';
        moneyValye = inputValue.value;
        inputValue.style.borderColor = ''


    } else {
        document.getElementById('mySign').classList.add('fa-comment');
        document.getElementById('mySign').classList.remove('fa-rupee');
        document.getElementById('button').innerHTML = 'Send Message';
        inputValue.style.color = 'red'
        moneyValye = inputValue.value;
        inputValue.style.borderColor = ''
    }

}

document.getElementById('button').addEventListener('click', () => {
    let inputValue = document.getElementById('myInput');
    inputValue.style.borderColor = 'red';
})

function playMusic() {
    const music = new Audio('assets/alert.mp4');
    music.play()

}