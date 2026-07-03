// ELEMENTOS
const nome = document.getElementById("nomeProduto");
const foto = document.getElementById("fotoProduto");
const descricao = document.getElementById("descricao");
const preco = document.getElementById("preco");

// PRODUTOS
const produtos = {
    "shopping estação ou goiabeiras": {
        nome: "Shopping Estação ou Goiabeiras",
        foto: "img/shopping.jpg",
        preco: "R$ Um abraço",
        descricao: "olha o shopping estação nao sei oq tem la de legau no goiabeiras tem lugar para jogar e um lugar cheio de pula pula."
    },

    "parques": {
        nome: "Parques",
        foto: "img/parq.jpg",
        preco: "R$ Ver você",
        descricao: "parque normal ou com agua ou qual quer outra coisa olha se for um Olha esse por um Acqua park pelo menos vou ver você de biquíni (tô brincando piada provavelmente aí fica com vergonha e ia ficar no canto falando um monte de coisa de Net e olhando para o chão ou encarando vc)."
    },

    "assistir homem aranha um novo dia": {
        nome: "Assistir Homem-Aranha: Um Novo Dia",
        foto: "img/aranha.jpg",
        preco: "R$ abraço",
        descricao: "homem aranha muito bom so alegria."
    },

    "Espresso": {
        nome: "cara vou colocar varia locais na decrição so ir no + para ver",
        foto: "img/museus.jpg",
        preco: "R$ ver você",
        descricao: "olha temos muitos lugares uma cafeteria  teria que ser de amanha ai fica mais dificil mais eu dou um jeito temos museu sepre quis ir com alg diferente e legal hamburgueria tematica tbm e muito tope ."
    }
};

// PEGA O NOME DA URL
const produto = new URLSearchParams(window.location.search).get("produto");

// PROCURA O PRODUTO
const data = produtos[produto];

// SE NÃO EXISTIR
if (!data) {
    nome.innerText = "Produto não encontrado";
} else {

    nome.innerText = data.nome;
    foto.src = data.foto;
    preco.innerText = data.preco;
    descricao.innerText = data.descricao;

}

// TAMANHO
let tamanho = "M";

document.querySelectorAll("#tamanhos button").forEach(btn => {
    btn.onclick = () => {
        document.querySelectorAll("#tamanhos button").forEach(b => b.classList.remove("ativo"));
        btn.classList.add("ativo");
        tamanho = btn.innerText;
    };
});

// TEMPERATURA
let temperatura = "🔥 Hot";

document.querySelectorAll("#temp button").forEach(btn => {
    btn.onclick = () => {
        document.querySelectorAll("#temp button").forEach(b => b.classList.remove("ativo"));
        btn.classList.add("ativo");
        temperatura = btn.innerText;
    };
});

// FORMULÁRIO
document.querySelector("form").onsubmit = () => {

    document.getElementById("produtoInput").value = data.nome;
    document.getElementById("precoInput").value = data.preco;
    document.getElementById("qtdInput").value = 1;

};

//fig

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