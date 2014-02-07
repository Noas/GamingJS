/**
 * @author Marcos Cardoso
 * @description construtor do objeto Label
 */
var Label = function() {};

/**
 * Cria um Label nos moldes do objeto createjs.Label.
 * @method createLabel
 * @param {String} [label=""] O texto que o label irá conter.
 * @param {Object} [args=null] Diversos parâmetros que configuram o label (format, color, name, align, baseLine, w, h).
 * Ex.: format:"bold italic 14px Roboto", color:"#FFF", name:"label", align:"center", baseLine:"middle", w:100, h:50.
 * @returns {label} Um Label.
 */
Label.createLabel = function(label, args) 
{
	var label = new createjs.Text(label, args.format, args.color);
    label.name = args.name;
    label.textAlign = args.align;
    label.textBaseline = args.baseLine;
    label.width = label.lineWidth = args.w;
    label.height = args.h;
    
    if (args.lineHeight == null)
        label.lineHeight = args.h;
    else 
        label.lineHeight = args.lineHeight;
    
    return label;
}