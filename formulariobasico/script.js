const formulario = document.getElementById("formulario");
const mensagem = document.getElementById("mensagem");

if (formulario && mensagem) {
  formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const dados = new FormData(formulario);
    const nome = dados.get("name");

    mensagem.textContent = `Mensagem enviada com sucesso, ${nome}!`;
    formulario.reset();
  });
}
