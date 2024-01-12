const input = document.querySelector("input");
input.addEventListener("keyup", fonctionResponse);
input.addEventListener("keyup", fonctionResponse2);

function fonctionResponse(){
    const div = document.querySelector("div");
    div.innerHTML = "Voici ce que vous avez saisi : <br>" + this.value;
}

function fonctionResponse2(){
    if(this.value ==="Bonjour"){
        input.classList.toggle("GREEN");
    }
    else{
        input.classList.toggle("RED");
    }
}