/**
 * @author Marcos Cardoso
 * @description construtor do objeto Button
 */
var Button = function() {};

/**
 * Cria um botão totalmente digital e sem qualquer tipo de bitmap
 * @method createShapeButton
 * @param {String} [label=""] O texto que será colocado dentro do botão.
 * @param {String} [textFormat=""] O formato que o label irá ter. Ex.: "bold 14px Arial".
 * @param {Object} [bounds=null] As dimensões e posições que o botão receberá (x, y, width, height, roundness).
 * @param {Object} [colors=null] As cores e estilos que compõem o botão (fillColors, strokeColor, strokeStyle).
 * @returns {container} Um container contendo o shape e o label do botão.
 */
Button.createShapeButton = function(label, textFormat, bounds, colors)
{
	// O método createRoundedRect cria um gráfico com os parâmetros passados e retorna um shape
	var shape = Graphic.createRoundedRect(colors, bounds);
	
	var label = Label.createLabel(label.toUpperCase(), textFormat, "#EEEEEE");
    label.x = bounds.width * 0.5;
    label.y = bounds.height * 0.5;
    
    container = Container.createContainer(label, bounds);
    MouseSettings.settings(container, "normal");
    container.addChild(shape, label);
    
    return container;
}