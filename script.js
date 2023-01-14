var entrada = document.getElementById("entrada");
var saida = document.getElementById("saida");
var botEnviar = document.getElementById("enviar");

function copiarEntrada() {
	saida.textContent = entrada.value;
}

botEnviar.addEventListener("click", copiarEntrada);