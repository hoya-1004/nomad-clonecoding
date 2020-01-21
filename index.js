const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";


//toggle은 했던 모든걸 요약하는것
function handleClick() {
    title.classList.toggle(CLICKED_CLASS);
}

function init() { 
    title.addEventListener("click", handleClick);
}
init();