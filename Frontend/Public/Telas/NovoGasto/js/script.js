/* =========================
   DADOS FIXOS
========================= */
const opcoesCategoria = [
  { value: 'Alimentacao', text: 'Alimentação' },
  { value: 'Transporte', text: 'Transporte' },
  { value: 'Saude', text: 'Saúde' },
  { value: 'Educacao', text: 'Educação' },
  { value: 'Lazer', text: 'Lazer' },
  { value: 'Moradia', text: 'Moradia' },
  { value: 'Outros', text: 'Outros' }
];

/* =========================
   DATA ATUAL (ISO)
========================= */
const todayISO = () => {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
};

/* =========================
   ONLOAD
========================= */
window.onload = () => {
  const liNovoGasto = document.getElementById('li_NovoGasto');
  if (liNovoGasto) liNovoGasto.classList.add('active');

  popularFormNovoGasto();
};

/* =========================
   FORMULÁRIO NOVO GASTO
========================= */
function popularFormNovoGasto() {
  const conteudo = document.getElementById('conteudo');

  let optionsCategoriaHTML =
    `<option selected disabled>Selecione uma categoria</option>`;

  opcoesCategoria.forEach(cat => {
    optionsCategoriaHTML += `
      <option value="${cat.value}">
        ${cat.text}
      </option>
    `;
  });

  conteudo.innerHTML = `
    <div class="card">
      <h2>Adicionar Novo Gasto</h2>

      <div class="campo">
        <h3>Descrição <span>*</span></h3>
        <input type="text" id="descricao" placeholder="Ex: Compra no supermercado">
      </div>

      <div class="campo">
        <h3>Valor Total <span>*</span></h3>
        <input type="number" id="valor" step="0.01" placeholder="0.00">
      </div>

      <div class="campo">
        <h3>Categoria <span>*</span></h3>
        <select id="select_categoria">
          ${optionsCategoriaHTML}
        </select>
      </div>

      <div class="campo">
        <h3>Data da Compra <span>*</span></h3>
        <input type="date" id="dataCompra" value="${todayISO()}">
      </div>

      <div class="campo">
        <h3>Método de Pagamento <span>*</span></h3>
        <select id="select_metodo_pagamento">
          <option selected disabled>Escolha uma opção</option>
          <option value="CartaoCredito">Cartão de Crédito</option>
          <option value="CartaoDebito">Cartão de Débito</option>
          <option value="Dinheiro">Dinheiro</option>
          <option value="Pix">Pix</option>
        </select>
      </div>

      <div class="parcelamento">
        <div class="perguntaParcelamento">
          <label class="switch">
            <input type="checkbox" id="checkParcelado" onclick ="ativarParcelamento()">
            <span class="slider"></span>
          </label>
          <h3>Este gasto foi parcelado?</h3>
        </div>

        <div class="informacoesParcelamento">
          <div class="campoParcelamento">
            <h3>Número de Parcelas <span>*</span></h3>
            <input type="number" id="numParcelas" min="2" placeholder="Ex: 3">
          </div>

          <div class="campoParcelamento">
            <h3>Mês início <span>*</span></h3>
            <input type="date" id="inicioParcelamento" value="${todayISO()}">
          </div>
        </div>
      </div>

      <button onclick="AdicionarGasto()">Adicionar Gasto</button>
    </div>

  
  `;

 
}


function ativarParcelamento() {
var checkbox = document.getElementById('checkParcelado');
var informacoesParcelamento = document.querySelector('.informacoesParcelamento');
if(checkbox.checked){
informacoesParcelamento.style.display = 'flex';
}else{
  informacoesParcelamento.style.display = 'none';
}
}


function AdicionarGasto() {
  const descricao = document.getElementById('descricao').value.trim();
  const valor = document.getElementById('valor').value;
  const categoria = document.getElementById('select_categoria').value;
  const data = document.getElementById('dataCompra').value;
  const metodo = document.getElementById('select_metodo_pagamento').value;
  const parcelado = document.getElementById('checkParcelado').checked;

  if (!descricao || !valor || !categoria || !data || !metodo) {
  carregarModal("erro", "Por favor, preencha todos os campos obrigatórios.");
    return;
  }

  const gasto = {
    descricao,
    valor: Number(valor),
    categoria,
    data,
    metodo,
    parcelado
  };

  if (parcelado) {
    gasto.parcelas = Number(document.getElementById('numParcelas').value);
    gasto.inicioParcelamento =
      document.getElementById('inicioParcelamento').value;
  }

  console.log('Gasto cadastrado:', gasto);
  carregarModal("sucesso", "Gasto adicionado com sucesso!");
}

