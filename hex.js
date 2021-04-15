const hex = [0,1,2,3,4,5,6,7,8,9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    let randomNumTwo = rendomColor();
    color.style.color = randomNumTwo;
    color.textContent = randomNumTwo;
    document.body.style.backgroundColor = randomNumTwo;
})

const rendomColor = () => {
    let hexColor = '#';

    for(let i = 0; i<6; i++) {
        hexColor += hex[Math.floor(Math.random()*hex.length)]
    }
    return hexColor;
}