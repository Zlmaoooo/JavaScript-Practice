const myButton = document.getElementById("myButton");
const myLabel = document.getElementById("myLabel");

const min = 1;
const max = 6;

let Randomnum;

myButton.onclick = function(){
    Randomnum = Math.floor(Math.random() * max)+min;
    myLabel.textContent = Randomnum;
    // document.getElementById("myButton")
}

