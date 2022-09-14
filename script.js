/* Obtendo os elementos da página HTML.*/
var box_preview = document.getElementById("box-preview");

var top_esquerdo = document.getElementById("superior-esquerdo");
var top_direito = document.getElementById("superior-direito");
var bottom_direito = document.getElementById("inferior-direito");
var bottom_esquerdo = document.getElementById("inferior-esquerdo");

var btn_copiar = document.getElementById("btn-copiar");

var btn_igualar = document.getElementById("btn-igualar");

/* Atribuindo a função `atualizarPreview` ao evento `onchange` dos elementos.*/
top_esquerdo.onchange = atualizarPreview;
top_direito.onchange = atualizarPreview;
bottom_direito.onchange = atualizarPreview;
bottom_esquerdo.onchange = atualizarPreview;

/* Atribuindo a função `copiarPropriedade` ao evento `onclick` do elemento `btn_copiar`. */
btn_copiar.onclick = copiarPropriedade;

/**
 * Ele valida os campos de entrada, depois cria uma string com a propriedade border-radius e seu
 * valores, então ele define o valor do campo de entrada com o id "input-prop" para a string e
 * finalmente ele define o estilo da caixa com o id "box-preview" para a string.
 */
function atualizarPreview(){
	validarCampos();

	var propriedade = "border-radius: " + 
		top_esquerdo.value + "px " + top_direito.value + "px " + 
		bottom_direito.value + "px " + bottom_esquerdo.value + "px";

	console.log("Propriedade: " + propriedade);

	document.getElementById("input-prop").value = propriedade;

	box_preview.style = propriedade;
}

/**
 * Verifica se o valor da entrada está vazio ou menor que 0, se sim, define o valor como 0,
 * caso contrário, se o valor for maior que 1000, ele define o valor como 1000.
 */
function validarCampos(){
	var inputs = [
		top_esquerdo,
		top_direito,
		bottom_direito,
		bottom_esquerdo
	];
	for(valor of inputs){
		if(valor.value.length === 0 || valor.value < 0)
			valor.value = 0;
		else if(valor.value > 1000)
			valor.value = 1000;
	}
}

/**
 * Se a entrada estiver vazia, retorne. Caso contrário, selecione a entrada, copie-a e alerte o usuário.
 * @retorna o valor do inputProp.value.
 */
function copiarPropriedade(){
	var inputProp = document.getElementById("input-prop");
	if(inputProp.value.length === 0) return;

	inputProp.select();
	inputProp.setSelectionRange(0, 99999);

	document.execCommand("copy");

	alert("Propriedade copiada: " + inputProp.value);

    atualizarPreview();
}

