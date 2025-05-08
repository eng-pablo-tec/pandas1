const form = document.getElementById("form-produto");
const tabela = document.querySelector("#tabela-produtos tbody");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const codigo = document.getElementById("codigo").value;
  const marca = document.getElementById("marca").value;
  const tipo = document.getElementById("tipo").value;
  const categoria = document.getElementById("categoria").value;
  const preco = document.getElementById("preco").value;
  const custo = document.getElementById("custo").value;
  const obs = document.getElementById("obs").value;

  const novaLinha = document.createElement("tr");

  novaLinha.innerHTML = `
    <td>${codigo}</td>
    <td>${marca}</td>
    <td>${tipo}</td>
    <td>${categoria}</td>
    <td>R$ ${parseFloat(preco).toFixed(2)}</td>
    <td>R$ ${parseFloat(custo).toFixed(2)}</td>
    <td>${obs}</td>
  `;

  tabela.appendChild(novaLinha);
  form.reset();
});
