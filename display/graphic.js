/**
 * @author Marcos Cardoso
 * @description construtor do objeto Graphic
 */
var Graphic = function() {};

/**
 * Cria um gráfico para qualquer finalidade. De acordo com os parâmetros passados
 * @param {Object} [colors=null] Cores utilizadas para preencher o gráfico. Representa tanto as cores internas quanto as presentes nas bordas.
 * @param {Object} [bounds=null] Medidas que o shape terá.
 * @return createjs.Shape
 */
Graphic.createRoundedRect = function(colors, bounds)
{
	var graphic = new createjs.Graphics();
    graphic.setStrokeStyle(colors.strokeStyle);
    graphic.beginStroke(colors.strokeColor);
    graphic.beginLinearGradientFill(colors.fillColors, [0, 1], 0, 0, 0, bounds.height);
    graphic.drawRoundRect(0, 0, bounds.width, bounds.height, bounds.roundness);
    
	var shape = new createjs.Shape(graphic);
	
	return shape;
}

Graphic.createRect = function(colors, bounds)
{
    var graph = new createjs.Graphics();
    graph.setStrokeStyle(colors.strokeStyle);
    graph.beginStroke(colors.strokeColor);
    //graph.beginFill(bounds.fillColor);
    graph.beginLinearGradientFill(colors.fillColors, [0, 1], 0, 0, 0, bounds.height);
    graph.drawRect(0, 0, bounds.width, bounds.height);
    
    return graph;
}

Graphic.changeShapeColor = function(shape, colors, bounds)
{
    shape.graphics.clear();
    shape.graphics.setStrokeStyle(colors.strokeStyle);
    shape.graphics.beginStroke(colors.strokeColor);
    shape.graphics.beginLinearGradientFill(colors.fillColors, [0, 1], 0, 0, 0, bounds.height * 1);
    shape.graphics.drawRoundRect(0, 0, bounds.width, bounds.height, bounds.roundness);
}