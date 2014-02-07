/**
 * @author Marcos Cardoso
 * @description construtor do objeto SoundButton
 */
var SoundManager = function() 
{
	this.allow = true;
};

SoundManager.prototype.enable = function(boo)
{
	this.allow = boo;
}

SoundManager.prototype.playSound = function(str)
{
	if (this.allow)
		createjs.Sound.play(str);
}