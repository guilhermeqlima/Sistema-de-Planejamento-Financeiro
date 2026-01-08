const todayISO = () => {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
};

window.onload = () => {
  const liNovaReceita = document.getElementById("li_NovaReceita");
  if (liNovaReceita) liNovaReceita.classList.add("active");
  popularFormNovaReceita();
};

function popularFormNovaReceita() {
  const conteudo = document.getElementById("conteudo");
  const mensagem = `
    <div class="formNovaReceita">
      <h2>Adicionar Nova Receita</h2>

      <div class="campo">
        <label for="descricao">Descrição <span>*</span></label>
        <input id="descricao" type="text" placeholder="Ex: Salário de Janeiro">
      </div>

      <div class="campo">
        <label for="valor">Valor <span>*</span></label>
        <input id="valor" type="number" step="0.01" placeholder="0.00">
      </div>

      <div class="campo">
        <label for="fonte">Fonte <span>*</span></label>
        <input id="fonte" type="text" placeholder="Ex: Salário, Freelance, Investimentos">
      </div>

      <div class="campo">
        <label for="data">Data <span>*</span></label>
        <input id="data" type="date" value="${todayISO()}">
      </div>

      <div class="campo tipo-receita">
        <label>Tipo de Receita <span>*</span></label>
        <div class="options">
          <div class="opt">
            <input id="receita_fixa" name="tipo_receita" type="radio" value="fixa">
            <label for="receita_fixa">
              <strong>Receita Fixa</strong>
              <div class="desc">Aparecerá automaticamente nos próximos meses</div>
            </label>
          </div>
          <div class="opt">
            <input id="receita_variavel" name="tipo_receita" type="radio" value="variavel" checked>
            <label for="receita_variavel">
              <strong>Receita Variável</strong>
              <div class="desc">Aparecerá apenas no mês selecionado</div>
            </label>
          </div>
        </div>
      </div>

      <button id="btnAdicionarReceita" class="btnAdicionar">Adicionar Receita</button>
    </div>
  `;

  conteudo.innerHTML = mensagem;

  const btn = document.getElementById("btnAdicionarReceita");
  if (btn) btn.addEventListener("click", handleAdicionarReceita);
}

function handleAdicionarReceita(e) {
  e.preventDefault();
  const descricao = document.getElementById("descricao").value.trim();
  const valor = parseFloat(document.getElementById("valor").value);
  const fonte = document.getElementById("fonte").value.trim();
  const data = document.getElementById("data").value;
  const tipoEl = document.querySelector('input[name="tipo_receita"]:checked');
  const tipo = tipoEl ? tipoEl.value : null;

  if (!descricao || isNaN(valor) || !fonte || !data || !tipo) {
    alert("Preencha todos os campos obrigatórios.");
    return;
  }

  const novaReceita = { descricao, valor, fonte, data, tipo };
  console.log("Nova receita adicionada:", novaReceita);
  alert("Receita adicionada com sucesso.");

  document.getElementById("descricao").value = "";
  document.getElementById("valor").value = "";
  document.getElementById("fonte").value = "";
  document.getElementById("data").value = todayISO();
  const variavel = document.getElementById("receita_variavel");
  if (variavel) variavel.checked = true;
}
