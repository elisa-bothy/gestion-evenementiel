const input = document.querySelector("input");
input.addEventListener("keyup", fonctionResponse);
const div = document.createElement("div");
document.body.insertBefore(div, document.querySelector("script"));

function fonctionResponse(){
    div.textContent = this.value;
}