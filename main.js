document.addEventListener('DOMContentLoaded', () => {
  const campoPesquisa = document.getElementById('pesquisa');
  const botoesCategoria = document.querySelectorAll('.categoria');
  const produtos = document.querySelectorAll('.produto');

  let categoriaAtual = 'Todos';

  function aplicarFiltros() {
    const textoPesquisa = campoPesquisa.value.toLowerCase().trim();

    produtos.forEach(produto => {
      const nomeProduto = produto.textContent.toLowerCase();
      const categoriaProduto = produto.getAttribute('data-categoria');

      const combinaTexto = nomeProduto.includes(textoPesquisa);
      const combinaCategoria = (categoriaAtual === 'Todos') || (categoriaProduto === categoriaAtual);

      if (combinaTexto && combinaCategoria) {
        produto.style.display = '';
      } else {
        produto.style.display = 'none';
      }
    });
  }

  campoPesquisa.addEventListener('input', aplicarFiltros);

  botoesCategoria.forEach(botao => {
    botao.addEventListener('click', () => {
      categoriaAtual = botao.getAttribute('data-categoria');

      botoesCategoria.forEach(b => b.classList.remove('ativo'));
      botao.classList.add('ativo');

      aplicarFiltros();
    });
  });
});