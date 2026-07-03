setTimeout(()=>{

window.location.href="login.html";

},3000);

const figurinhas = document.getElementById("figurinhas");

function criarFigurinha(){

    const figura = document.createElement("div");
    figura.classList.add("figurinha");

    const img = document.createElement("img");

   const imagens = [
       
    "figurinha.png",
    "figurianha2.png",
];

img.src = imagens[Math.floor(Math.random() * imagens.length)]; // troque pela sua imagem

    figura.appendChild(img);

    figura.style.left = Math.random() * window.innerWidth + "px";

    const tamanho = Math.random() * 40 + 40;

    img.style.width = tamanho + "px";

    const tempo = Math.random() * 4 + 4;

    figura.style.animationDuration = tempo + "s";

    figurinhas.appendChild(figura);

    setTimeout(() => {
        figura.remove();
    }, tempo * 1000);

}

setInterval(criarFigurinha, 300);
