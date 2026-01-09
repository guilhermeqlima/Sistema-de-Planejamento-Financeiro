const categorias = [
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
            <button><i class="bi bi-plus-circle"></i> Nova Categoria</button>
          </div>
          <div class="categorias" id="categorias">
         
          </div>`;

  carregarCategorias();
}

function carregarCategorias() {
  const containerCategorias = document.getElementById("categorias");

  var categoriasHTML = "";
  categorias.forEach((categorias) => {
    categoriasHTML += `
        <div class="cardCategoria">
              <div id="corCategoria" class="corCategoria" style="background-color: ${categorias.cor};"></div>
              <h3> ${categorias.nome}</h3>
              <div class="botoesCategoria">
                <button class="editar" onclick="editarCategoria('${categorias.nome}')"><i class="bi bi-pencil"></i></button>
                <button class="excluir" onclick="excluirCategoria()"><i class="bi bi-trash"></i></button>
              </div>

            </div>
    `;
  });

  containerCategorias.innerHTML += categoriasHTML;
}
