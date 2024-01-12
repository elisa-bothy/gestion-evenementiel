const input = document.querySelector("input");
input.addEventListener("keyup", fonctionResponse);

function fonctionResponse(){
    console.log(this.value);
}