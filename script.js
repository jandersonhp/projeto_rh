const form = document.getElementById("formRequisicao");
const resultado = document.getElementById("resultado");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const uca = document.getElementById("uca").value;
  const setor = document.getElementById("setor").value;
  const turno = document.getElementById("turno").value;
  const tipo = document.getElementById("tipo").value;

  resultado.innerHTML = `
    <strong>Requisição registrada (protótipo)</strong><br><br>

    <strong>Matrícula (UCA):</strong> ${uca}<br>
    <strong>Setor:</strong> ${setor}<br>
    <strong>Turno:</strong> ${turno}<br>
    <strong>Tipo de solicitação:</strong> ${tipo}<br><br>

    <strong>Status:</strong>
    <span id="status" class="status">Recebido pelo RH</span>
  `;

  // Simulação de fila e tratativa do RH
  setTimeout(() => {
    document.getElementById("status").innerText = "Em análise pelo RH";
  }, 3000);

  setTimeout(() => {
    document.getElementById("status").innerText = "Respondido / Tratativa realizada";
  }, 6000);

  form.reset();
});
