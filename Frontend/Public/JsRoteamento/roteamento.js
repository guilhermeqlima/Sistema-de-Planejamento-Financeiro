function IrParaPagina(pagina) {
  switch (pagina) {
    case 'PlanejamentoEVisao':
      window.location.href = '../PlanejamentoEVisao/index.html';
      break;

    case 'NovoGasto':
      window.location.href = '../NovoGasto/index.html';
      break;

    case 'NovaReceita':
      window.location.href = '../NovaReceita/index.html';
      break;

    case 'Investimentos':
      window.location.href = '../Investimentos/index.html';
      break;

    case 'Categorias':
      window.location.href = '../Categorias/index.html';
      break;

    case 'Configuracoes':
      window.location.href = '../Configuracoes/index.html';
      break;

    default:
      console.error('Página não encontrada:', pagina);
      break;
  }
}


// FUNÇÃO PARA CARREGAR MODAL DE ERRO OU SUCESSO
function carregarModalSucessoErro(tipo, mensagem) {
  const modal = document.getElementById('modalSucessoErro');

  
  modal.classList.remove('sucesso', 'erro', 'ativo');


  modal.innerHTML = `
    <div class="modalSucessoErro-conteudo">
      <i class="bi ${tipo === 'sucesso' ? 'bi-check-circle' : 'bi-x-circle'}"></i>
      <span>${mensagem}</span>
    </div>
  `;


  if (tipo === 'sucesso') {
    modal.classList.add('sucesso');
  } else {
    modal.classList.add('erro');
  }


  modal.classList.add('ativo');


  setTimeout(() => {
    modal.classList.remove('ativo');
  }, 4000);
}


//FUNÇÃO PARA ABRIR E FECHAR MODAL DE ALGUM CONTEUDO, COMO NOVA CATEGORIA, EDITAR CATEGORIA, ETC.
function abrirModalConteudo(conteudoHTML) {
  const overlay = document.getElementById("overlayModal");
  const modalConteudo = document.querySelector(".modalConteudoNecessario");
  modalConteudo.innerHTML = conteudoHTML;
  overlay.classList.add("ativo");
}

function fecharModalConteudo() {
  const overlay = document.getElementById("overlayModal");
  overlay.classList.remove("ativo");
}
