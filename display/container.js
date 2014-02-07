/**
 * @author Marcos Cardoso
 * @description construtor do objeto Container
 */
var Container = function(){}

/**
 * Cria um container nos moldes do objeto createjs.Container.
 * @method createContainer
 * @param {String} [nome=""] O nome do container. Utilizado para buscar por nome no stage.
 * @param {Object} [bounds=null] As dimensões e posições que o botão receberá (x, y, width, height, roundness).
 * @returns {container} Um container vazio.
 */
Container.createContainer = function(nome, bounds)
{
	var container = new createjs.Container();
    container.name = nome;
    container.width = bounds.width;
    container.height = bounds.height;
    container.x = bounds.x; 
    container.y = bounds.y; 
    container.regX = container.width * 0.5;
    container.regY = container.height * 0.5;
    
    return container;
}