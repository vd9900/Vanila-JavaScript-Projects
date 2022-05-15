/*
    BAckGroundColor changing Code
*/
let hex = ['A','B','C','D','E','F','1','2','3','4','5','6','8','9','0']
const HexCode = document.querySelector(".hex");



const first_button = document.querySelector("#btn1")
first_button.addEventListener("click", function(){
    let hexnum= '#';
    for(i=0;i<6;i++){
        hexnum+=hex[RandomNumber()];
    }
    document.body.style.backgroundColor = hexnum;
    HexCode.textContent = hexnum;
})
function RandomNumber(){
    let RandomNumber = Math.floor(Math.random()* hex.length)
    return RandomNumber;
}

// END 

/*
    Feets to Cm Converting code
*/
const Input_Feet = document.getElementById("feet");
const anwser_cm = document.querySelector(".cm")
const Button = document.getElementById("btn2")
Button.addEventListener("click",function(){
    feet= (Input_Feet.value)
    if(Input_Feet.value==""){
        anwser_cm.innerHTML =  ``;
        alert("enter the number")
        Input_Feet.value = "";
    }
    else if(isNaN(feet)){
        anwser_cm.innerHTML =  ``;
        alert("not a number")
        Input_Feet.value = "";
    }
    else if(Input_Feet.value<0){
        anwser_cm.innerHTML =  ``;
        alert("enter the number more then 0")
        Input_Feet.value = "";
    }
    else{
        let anwser = feet*30.48;
        anwser_cm.innerHTML =  `${anwser}cm`;
    }
        
})

//END

/*
    Leap year checker
*/

const check_year = document.getElementById("UserInput")
const btn3 = document.getElementById("btn3")
const anwser_year = document.querySelector("#leap")
btn3.addEventListener("click",function(){
    if(check_year.value==""){
        check_year.value = "";
        alert("enter the year")
        document.querySelector('.light-2').style.backgroundColor =  "transparent";
        document.querySelector('.light-1').style.backgroundColor =  "transparent";

    }
    else if(isNaN(check_year.value)){
        check_year.value = "";
        alert("not a number")
        document.querySelector('.light-2').style.backgroundColor =  "transparent";
        document.querySelector('.light-1').style.backgroundColor =  "transparent";
    }
    else if(check_year.value<=999 || check_year.value>=9999){
        check_year.value = "";
        alert("enter vaild year!!!")
        document.querySelector('.light-2').style.backgroundColor =  "transparent";
        document.querySelector('.light-1').style.backgroundColor =  "transparent";
    }
    else{
        const year = check_year.value;
        if(year%4==0){
            if(year%100==0){
                if(year%400==0){
                    anwser_year.innerHTML = `${year} is a leap year`;
                    document.querySelector('.light-1').style.backgroundColor =  "green";
                    document.querySelector('.light-2').style.backgroundColor =  "transparent";
                }else{
                    anwser_year.innerHTML = `${year} is not a  leap year`;
                    document.querySelector('.light-2').style.backgroundColor =  "red";
                    document.querySelector('.light-1').style.backgroundColor =  "transparent";
                }
            }
            else{
                anwser_year.innerHTML = `${year} is a leap year`;
                document.querySelector('.light-1').style.backgroundColor =  "green";
                document.querySelector('.light-2').style.backgroundColor =  "transparent";
            } 
        }
        else{
            anwser_year.innerHTML = `${year} is not a leap year`;
            document.querySelector('.light-2').style.backgroundColor =  "red";
            document.querySelector('.light-1').style.backgroundColor =  "transparent";

        }
    }
})
