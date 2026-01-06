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
