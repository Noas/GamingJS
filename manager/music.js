/**
 * @author Marcos Cardoso
 * @description construtor do objeto MusicButton
 */
var MusicManager = function() 
{
	this.instance;
};

MusicManager.prototype.playMusic = function(str)
{
	//this.instance = createjs.Sound.play(str, {loop:-1});
	document.getElementById(str).play();
}

MusicManager.prototype.off = function()
{
	if (this.instance)
		this.instance.volume = 0;
}

MusicManager.prototype.on = function()
{
	if (this.instance)
		this.instance.volume = 1;
}

MusicManager.prototype.stopMusic = function()
{
	if (this.instance)
		this.instance.stop();
}