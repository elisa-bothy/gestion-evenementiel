const input = document.querySelector("input");
input.addEventListener("keyup", fonctionResponse);
input.addEventListener("keyup", fonctionResponse2);

function fonctionResponse(){
    const div = document.querySelector("div");
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