function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("indicações-resultado");

    let caixinhaPesquisa = document.getElementById("caixinha-pesquisa").value
    
    // se o campoPesquisa for uma string sem nada
    if (!caixinhaPesquisa) {
        section.innerHTML = "<p> Nada foi encontrado.</p>"
        return
    }

    caixinhaPesquisa = caixinhaPesquisa.toLowerCase()
    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre os dados e cria o HTML para cada item
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLocaleLowerCase()
        // se titulo includes na caixinhaPesquisa
        if (titulo.includes(caixinhaPesquisa) || descricao.includes(caixinhaPesquisa) || tags.includes(caixinhaPesquisa)) {
        // cria um novo elemento    
            resultados += `
            <div class="item-resultado">
              <h2>${dado.titulo}</h2>
              <p class="descricao-meta">${dado.descricao}</p>
              <a href=${dado.link} target="_blank">Saiba mais</a>
            </div>
          `;
        }
    }

    if (!resultados) {
        resultados = "<p> Nada foi encontrado </p>"

    }

    // Atualiza o conteúdo HTML da seção com os resultados
    section.innerHTML = resultados;
}
