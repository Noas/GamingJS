/**
 * @author Marcos Cardoso
 * @description Objeto responsável pela manipulação de Bitmaps junto ao Createjs
 */
function Bitmap() {}

/**
 * Cria um botão totalmente digital e sem qualquer tipo de bitmap
 * @method createShapeButton
 * @param {String} 				[_name=""] O nome do Bitmap.
 * @param {Object} 				[_position=null] As posições x e y do Bitmap.
 * @param {createjs.LoadQueue} 	[_queue=null] A lista onde o Bitmap será buscado.
 * @returns {Bitmap} Um Bitmap pronto para ser adicionado a um container.
 */
Bitmap.getBitmap = function(_name, _position, _queue)
{
	var temp 	= _queue.getResult(_name);
    var img 	= new createjs.Bitmap(temp);
	img.x 		= _position.x; 
	img.y 		= _position.y;
	img.width 	= temp.width; 
	img.height 	= temp.height;
    img.name 	= _name;
    
    return img;
}