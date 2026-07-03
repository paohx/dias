//LOGIN

function entrar() {

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
    const erro = document.getElementById("erroUsuario");

    if (usuario !== "eliza") {

        erro.style.display = "block";
        erro.innerHTML = "💡 Dica: o usuário é <b>eliza</b>.";
        return;
    }

    if (senha !== "1002") {

        erro.style.display = "block";
        erro.innerHTML = "💡 Dica: a senha é <b>1002</b>.";
        return;
    }

    erro.style.display = "none";

    window.location.href = "menu.html";
}

//FIGURINHAS
const figurinhas = document.getElementById("figurinhas");

function criarFigurinha() {

    const figura = document.createElement("div");
    figura.classList.add("figurinha");

    const img = document.createElement("img");

    const imagens = [
        "img/figurinha.png",
        "img/figurianha2.png"
    ];

    img.src = imagens[Math.floor(Math.random() * imagens.length)];

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