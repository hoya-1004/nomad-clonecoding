const clockContainer = document.querySelector(".js-clock"),//js-clock가져오기
clockTitle = clockContainer.querySelector("h1");//html에 h1에 다가 쓴다?

function getTime(){//시간 함수 설정 
    const date = new Date();//Date라는 new Date선언
    const minutes = date.getMinutes();//분
    const hours = date.getHours();//시간
    const seconds = date.getSeconds();//초
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours }:${minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}` : seconds}`;//시간이나 분 초에서 59가 끝나면 01이 아닌 1로 표현되기때문에 삼항연산 조건을 걸어서 10미만일경우 0을 붙여준다.
}

function init(){
    getTime();//함수 사용
    setInterval(getTime, 1000);//1000는 1초이다 1초씩 인터벌 상승 
}

init();//화면에 출력