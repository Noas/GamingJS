/**
 * ...
 * @author Marcos Cardoso
 * @description Arquivo responsável pelos objetos e variáveis comuns utilizados no projeto
 */
var Common = function(){}

/**
 * Retorna as configurações do label do botão.
 * @method getButtonFormatModel
 * @returns {object} Um objeto contendo dados sobre o formato do label do botão.
 */
Common.getButtonFormatModel = function()
{
	return {format:"bold italic 14px Roboto", color:"#FFF", name:"label", align:"center", baseLine:"middle", w:100, h:50};
}

/**
 * Retorna as configurações das cores do botão.
 * @method getButtonColorModel
 * @returns {object} Um objeto contendo dados sobre as cores do botão.
 */
Common.getButtonColorModel = function()
{
	return {fillColors:["#555555", "#000000"], strokeColor:"#555555", strokeStyle:0.5};
}

/**
 * Retorna as configurações das medidas e limites do botão.
 * @method getButtonBoundsModel
 * @returns {object} Um objeto contendo dados sobre as coordenadas do botão.
 */
Common.getButtonBoundsModel = function()
{
	return {x:0, y:0, width:100, height:35, roundness:6};
}

Common.getCloseButtonFormatModel = function()
{
	return {name:"close", format:"bold 14px Roboto", color:"#FFFFFF", align:"center", baseLine:"middle", w:50, h:50};
}

Common.getCloseButtonColorModel = function()
{
	return {fillColors:["#333333", "#111111"], strokeColor:null, strokeStyle:0.5};
}

Common.getCloseButtonBoundsModel = function()
{
	return {x:580, y:20, width:28, height:28, roundness:3};
}

Common.setMusic = function()
{
	Common.music = preloader.queue.getResult("creation");
}