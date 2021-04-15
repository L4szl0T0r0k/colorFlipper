console.log("hello")

const colors = ["blue", "red", "rgb(100,133,200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    let randomNum = randomColor();
   color.style.color = randomNum;
   color.textContent = randomNum;
   document.body.style.backgroundColor = randomNum;
})

const getRandomNumber = () =>  Math.floor(Math.random()*colors.length)

const randomColor = () => {
    let red = Math.floor(Math.random()*256)
    let green = Math.floor(Math.random()*256)
    let blue = Math.floor(Math.random()*256)
    let color = "rgb(" + red + "," + green + "," + blue +")";
    return color;
}

console.log(color)