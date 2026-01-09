const todayISO = () => {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
};
var dispesaFixa = false;
var dispesaVariavel = true;

window.onload = () => {
  const liNovaReceita = document.getElementById("li_NovaReceita");
  if (liNovaReceita) liNovaReceita.classList.add("active");
  popularFormNovaReceita();
};

function popularFormNovaReceita() {
  const conteudo = document.getElementById("conteudo");
  const mensagem = `
   <div class="card">
            <h2>Adicionar Nova Receita</h2>

            <div class="campo">
              <h3>Descrição <span>*</span></h3>
              <input
                id="descricao"
                type="text"
                placeholder="Ex: Salário de Janeiro"
              />
            </div>

            <div class="campo">
              <h3>Valor <span>*</span></h3>
              <input id="valor" type="number" step="0.01" placeholder="0.00" />
            </div>

            <div class="campo">
              <h3>Fonte <span>*</span></h3>
              <input
                id="fonte"
                type="text"
                placeholder="Ex: Salário, Freelance, Investimentos"
              />
            </div>

            <div class="campo">
              <label for="data">Data <span>*</span></label>
              <input id="data" type="date" value="${todayISO()}" />
            </div>

            <div class="tipo-receita">

              <h3>Tipo de Receita <span>*</span></h3>

              <div class="receitaVariavel ativo" onclick="selecionarTipoReceita('variavel')">
                <h4>Receita Variável</h4>
                <p>Aparecerá apenas no mês selecionado</p>
              </div>

             <div class="receitaFixa " onclick="selecionarTipoReceita('fixa')">
              <h4>Receita Fixa</h4>
              <p>Aparecerá automaticamente nos próximos meses</p>
             </div>
           

            <button id="btnAdicionarReceita" class="btnAdicionar" onclick="adicionarNovaReceita()">
              Adicionar Receita
            </button>
          </div>

        </div>
  `;

  conteudo.innerHTML = mensagem;

}

function selecionarTipoReceita(tipo) {
  const receitaFixa = document.querySelector(".receitaFixa");
  const receitaVariavel = document.querySelector(".receitaVariavel");
  if (tipo === "fixa") {
    dispesaFixa = true;
    dispesaVariavel = false;
    receitaFixa.classList.add("ativo");
    receitaVariavel.classList.remove("ativo");
  } else if (tipo === "variavel") {
    dispesaFixa = false;
    dispesaVariavel = true;
    receitaVariavel.classList.add("ativo");
    receitaFixa.classList.remove("ativo");
  }
}
function adicionarNovaReceita() {
  const descricao = document.getElementById("descricao").value;
  const valor = parseFloat(document.getElementById("valor").value);
  const fonte = document.getElementById("fonte").value;
  const data = document.getElementById("data").value;
  const tipoReceita = null;
  if (dispesaFixa) {
    tipoReceita = "Fixa";
  } else if (dispesaVariavel) {
    tipoReceita = "Variável";
  }
  if (!descricao || isNaN(valor) || !fonte || !data || !tipoReceita) {
   carregarModalSucessoErro( "erro", "Por favor, preencha todos os campos obrigatórios.");
    return;
  }

  carregarModalSucessoErro( "sucesso", "Receita adicionada com sucesso!");
}
