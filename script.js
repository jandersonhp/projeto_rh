const form = document.getElementById("formRequisicao");
const resultado = document.getElementById("resultado");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const tipo = document.getElementById("tipo").value;
  const descricao = document.getElementById("descricao").value;

  resultado.innerHTML = `
    <strong>Requisição enviada!</strong><br>
    Tipo: ${tipo}<br>
    Status: Aguardando análise do RH
  `;

  form.reset();
});
