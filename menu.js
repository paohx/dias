function abrirProduto(nome) {
    window.location.href = "produto.html?produto=" + encodeURIComponent(nome);
}