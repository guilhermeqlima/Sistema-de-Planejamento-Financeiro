var categorias = [
  { nome: "Alimentação", cor: "#FF6B6B" },
  { nome: "Transporte", cor: "#4D96FF" },
  { nome: "Moradia", cor: "#6BCF63" },
  { nome: "Lazer", cor: "#FFC75F" },
  { nome: "Saúde", cor: "#C77DFF" },
  { nome: "Educação", cor: "#FF8FAB" },
  { nome: "Investimentos", cor: "#4ECDC4" },
  { nome: "Assinaturas", cor: "#A0AEC0" },
  { nome: "Compras", cor: "#FF9F1C" },
  { nome: "Outros", cor: "#2EC4B6" },
];

const coresDisponiveis = [
  "#FF6B6B", // Vermelho suave
  "#4D96FF", // Azul
  "#6BCF63", // Verde
  "#FFC75F", // Amarelo
  "#C77DFF", // Roxo
  "#FF8FAB", // Rosa
  "#4ECDC4", // Turquesa
  "#A0AEC0", // Cinza
  "#FF9F1C", // Laranja
  "#2EC4B6", // Verde água
];

window.onload = () => {
  const liCategorias = document.getElementById("li_Categorias");
  if (liCategorias) liCategorias.classList.add("active");
  carregarConteudo();
};
function carregarConteudo() {
  var conteudo = document.getElementById("conteudo");
  conteudo.innerHTML = `
          <div class="topo">
            <h2>Gerenciar Categorias</h2>
            <button onclick="novaCategoria()"><i class="bi bi-plus-circle"></i> Nova Categoria</button>
          </div>
          <div class="categorias" id="categorias">
         
          </div>`;

  carregarCategorias();
}

function carregarCategorias() {
  const containerCategorias = document.getElementById("categorias");
  containerCategorias.innerHTML = "";

  var categoriasHTML = "";
  categorias.forEach((categorias , i) => {
    categoriasHTML += `
        <div class="cardCategoria">
              <div id="corCategoria" class="corCategoria" style="background-color: ${categorias.cor};"></div>
              <h3> ${categorias.nome}</h3>
              <div class="botoesCategoria">
                <button class="editar" onclick="editarCategoria(${i})"> <i class="bi bi-pencil"></i></button>
                <button class="excluir" onclick="excluirCategoria('${categorias.nome}')"><i class="bi bi-trash"></i></button>
              </div>

            </div>
    `;
  });

  containerCategorias.innerHTML += categoriasHTML;
}

function novaCategoria() {
  const coresHTML = coresDisponiveis
    .map(
      (cor) => `
        <div 
          class="cor" 
          style="background-color: ${cor};"
          onclick="selecionarCor(this, '${cor}')"
        ></div>
      `
    )
    .join("");

  const conteudoHTML = `
    <div class="topo">
      <h2>Nova Categoria</h2>
      <button onclick="fecharModalConteudo()">
        <i class="bi bi-x-lg"></i>
      </button>
    </div>

    <div class="campo">
      <h2>Nome da Categoria</h2>
      <input id="nomeCategoria" type="text" placeholder="Ex: Alimentação">
    </div>

    <div class="cores">
      <h2>Escolha uma cor:</h2>
      <div class="opcoesCores">
        ${coresHTML}
      </div>
      <div class="corEscolhidaAtual" id="corEscolhidaAtual"></div>
    </div>

    

    <button onclick="AdicionarCategoria()">Adicionar</button>
  `;

  abrirModalConteudo(conteudoHTML);
}

var corSelecionada = "";

function selecionarCor(elemento, cor) {
  var corEscolhidaAtual = document.getElementById("corEscolhidaAtual");
  corEscolhidaAtual.style.backgroundColor = cor;

  corSelecionada = cor;

  const outrasCores = document.querySelectorAll(".cor");
  for(let i = 0; i < outrasCores.length; i++) {
    outrasCores[i].classList.remove("selecionada");
  }

  elemento.classList.add("selecionada");
}

function AdicionarCategoria() {
  var nomeCategoria = document.getElementById("nomeCategoria").value;

  if (nomeCategoria.trim() === "" || corSelecionada === "") {
    carregarModalSucessoErro(
      "erro",
      "Por favor, preencha o nome da categoria e selecione uma cor."
    );
    return;
  }

  for(let i = 0; i < categorias.length; i++) {

    if(categorias[i].nome.toLowerCase() === nomeCategoria.toLowerCase()) {
      carregarModalSucessoErro(
        "erro",
        `A categoria "${nomeCategoria}" já existe. Por favor, escolha outro nome.`
      );
      return;
    }
  }
  categorias.push({ nome: nomeCategoria, cor: corSelecionada });

  carregarModalSucessoErro(
    "sucesso",
    `Categoria "${nomeCategoria}" adicionada com sucesso!`
  );

  fecharModalConteudo();
  carregarConteudo();
}

function excluirCategoria(nomeCategoria) {
  categorias = categorias.filter(categoria => categoria.nome !== nomeCategoria);

  carregarModalSucessoErro(
    "sucesso",
    `Categoria "${nomeCategoria}" excluída com sucesso!`
  );
  carregarCategorias();

}

var indiceCategoriaEditando = null;

function editarCategoria(indice) {
  indiceCategoriaEditando = indice;

  const categoria = categorias[indice];
  corSelecionada = categoria.cor;

  const coresHTML = coresDisponiveis
    .map(
      (cor) => `
        <div 
          class="cor ${cor === categoria.cor ? 'selecionada' : ''}"
          style="background-color: ${cor};"
          onclick="selecionarCor(this, '${cor}')"
        ></div>
      `
    )
    .join("");

  const conteudoHTML = `
    <div class="topo">
      <h2>Editar Categoria</h2>
      <button onclick="fecharModalConteudo()">
        <i class="bi bi-x-lg"></i>
      </button>
    </div>

    <div class="campo">
      <h2>Nome da Categoria</h2>
      <input 
        id="nomeCategoria" 
        type="text" 
        value="${categoria.nome}"
      >
    </div>

    <div class="cores">
      <h2>Escolha uma cor:</h2>
      <div class="opcoesCores">
        ${coresHTML}
      </div>
      <div 
        class="corEscolhidaAtual" 
        id="corEscolhidaAtual"
        style="background-color: ${categoria.cor};"
      ></div>
    </div>

    <button onclick="atualizarCategoria()">Atualizar</button>
  `;

  abrirModalConteudo(conteudoHTML);
}
function atualizarCategoria() {
  const nomeCategoria = document.getElementById("nomeCategoria").value;

  if (nomeCategoria.trim() === "" || corSelecionada === "") {
    carregarModalSucessoErro(
      "erro",
      "Por favor, preencha o nome da categoria e selecione uma cor."
    );
    return;
  }

  // Evitar duplicados (exceto a própria categoria)
  for (let i = 0; i < categorias.length; i++) {
    if (
      i !== indiceCategoriaEditando &&
      categorias[i].nome.toLowerCase() === nomeCategoria.toLowerCase()
    ) {
      carregarModalSucessoErro(
        "erro",
        `A categoria "${nomeCategoria}" já existe.`
      );
      return;
    }
  }

  categorias[indiceCategoriaEditando] = {
    nome: nomeCategoria,
    cor: corSelecionada
  };

  carregarModalSucessoErro(
    "sucesso",
    `Categoria "${nomeCategoria}" atualizada com sucesso!`
  );

  fecharModalConteudo();
  carregarCategorias();
}
