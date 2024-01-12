const input = document.querySelector("input");
input.addEventListener("keyup", fonctionResponse);
input.addEventListener("keyup", fonctionResponse2);
const div = document.createElement("div");
document.body.insertBefore(div, document.querySelector("script"));

function fonctionResponse(){
    div.innerHTML = "Voici ce que vous avez saisi : <br>" + this.value;
}

function fonctionResponse2(){
    if(this.value.includes("Bonjour")){
        input.classList.remove("RED");
        input.classList.add("GREEN");
    }
    else{
        input.classList.remove("GREEN");
        input.classList.add("RED");
    }
}