const input = document.querySelector("input");
input.addEventListener("keyup", fonctionResponse);
const div = document.createElement("div");
document.body.insertBefore(div, document.querySelector("script"));

function fonctionResponse(){
    div.innerHTML = "Voici ce que vous avez saisi : <br>" + this.value;
}