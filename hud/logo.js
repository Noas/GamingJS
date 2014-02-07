/**
 * @author Marcos Cardoso
 * @description construtor do objeto Logo
 */

var Logo = function()
{
	this.logoBitmap = Bitmap.getBitmap("logo", {x:25, y:-250}, preloader.queue);
    this.switchLogo();
    stage.addChild(this.logoBitmap);
};

Logo.prototype.switchLogo = function()
{
    if (this.logoBitmap.y < 0)
        createjs.Tween.get(this.logoBitmap, {override:true}).to({y:25}, 500, createjs.Ease.quartOut);
    else
        createjs.Tween.get(this.logoBitmap, {override:true}).to({y:-250}, 500, createjs.Ease.quartOut);
}