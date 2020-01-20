/* String
const what = "Ho";
*/
/*
Boolean
const wat = ture;
*/
/*
Number
const wat = 666;
*/

/*
Float(double)
const wat = 55.1;
*/

//console.log('Im Working. Im JS. Im Beautiful. Im worth it');

//Array
/*const daysOfWeek = ["Mon","Tue","Wen","Thu","Fri",true];

console.log(daysOfWeek[2]);
*/
/*
const hoInfo = {
    name:"Ho",
    age:33,
    gender:"Male",
    isHandsome :true,
    favMovies :["About Time", "LOTR"],
    favFood : [
        {  
            name : "Kimchi",
            fatty : false
        },
        {
            name : "CheeseBurger",
            fatty : true
        }
    ]
}
console.log(hoInfo);
*/
/*
function sayHello(){
    console.log('Hello!');
}

sayHello();
*/
/*
function sayHello(name, age){
    console.log('Hello!',name, "You have", age,"years fo age.");
}

sayHello("HO",26);
*/

/*
function sayHello(name, age){
    console.log(`Hello! ${name} You have ${age} years fo age.`);
}

sayHello("HO",26);
*/
/*
function sayHello(name, age){
    return `Hello! ${name} You have ${age} years fo age.`;
}

const greetHo = sayHello("Ho", 26)

console.log(greetHo)
*/
/*
const calculator ={
plus : function(a,b){
    return a +b;
}
}
//console.log(greetHo)
const plus = calculator.plus(5,5)
console.log(plus)
*/
/*
const title = document.querySelector("#title");
title.innerHTML = "Hi! From JS";// HTML을 DOM으로 
title.style.color = 'red';

document.title = "I own you now!";
*/
/*
const title = document.querySelector("#title");

function handleResize(event){
    //console.log("I have been resized")
    console.log(event);
}

window.addEventListener("resize", handleResize); //handleResize()를 쓴다면 즉시 바꾼다. 그게 아니고 지금 처럼 되어있는 경우는 즉시 호출하지 않고 윈도우 사이즈가 변경될때 함수를 호출한다.
*/
/*
const title = document.querySelector("#title");

function handleClick(){
    title.style.color = "blue";
}
title.addEventListener("click", handleClick);
*/
/*
if("10" === 10){ //===는 값을 할당하는게 아니라 just 체크
    console.log("HI");
}else if ("10"==="10"){
    console.log("lalala");
}else{
    console.log("ho");
} */
/*
if(20 > 5 ||"h" === "ho")
{
    console.log("yes");
}
else{
    console.log("no");
} 
|| && 기타 연습
 */

/*
const age = prompt("How old are you");

if(age >= 18 && age <=21){
    console.log("you can drink but you should not");
}else if(age >21){
    console.log("go ahead");
}
else{
    console.log("too young");
}
*/

/*const title = document.querySelector("#title");

//색깔이 같은지 확인한다음 색깔을 바꾼다.
const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";


function handClick(){
    //console.log(title.style.color); 
    const currentColor = title.style.color;
    if(currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    }
    else{
        title.style.color = BASE_COLOR; 
    }
}

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handClick);
}
init();
*/
/* 인터넷 연결이 연결되거나 끊겼을때 console
function handleOffline() {
    console.log("byeybye");
}

function handleOnline() {
    console.log("Welcome back");
}
window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);

*/