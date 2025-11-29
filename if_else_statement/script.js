const myInput = document.getElementById("myInput");
const myButton = document.getElementById("myButton");
const Result = document.getElementById("Result");

let age;



myButton.onclick = function(){
    age = myInput.value;
    age = Number(age);

    if(age == 0){
        Result.textContent = `Yooo nigga your age is 0 u cant enter here my maannnn!!!`;
    }
    else if(age < 18){
        Result.textContent = `hehehe nice tryy u kidd`;
    }
    else {
        Result.textContent = `Welcome sirr here is your entry to HEVEN`;
    }

}
