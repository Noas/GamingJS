/**
 * @author Marcos Cardoso
 * @description Construtor do método Regressivo
 */

var Regressivo = function() {
	this.time;
	this.interval;
};

Regressivo.prototype.startTime = function(time)
{
	createTimeLabel(time);
	
	this.interval = setInterval(timerHandler, 1000, this);
	
	function timerHandler(scope)
	{
		if (stage.getChildByName("timer")) 
			stage.removeChild(stage.getChildByName("timer"));
		
		if (time-- == 1) {
			scope.stopInterval();
		}
		
		createTimeLabel(time);
	}
	
	function createTimeLabel(time)
	{	
		var bg = Graphic.createRoundedRect({fillColors:["#FFFFFF", "#DDDDDD"],strokeColor:null, strokeStyle:null}, {width:150, height:50, roundness: 6});
		bg.x = stage.width * 0.5 - 75;
		bg.y = 10;
		
		var label = Label.createLabel(time + " seg.", {format:"bold 18px Roboto", color:"#111111", name:"timer", align:"center", baseLine:"middle", w:300, h:30});
    	label.x = stage.width * 0.5 + 10; label.y = 37;
		
		if (stage.getChildByName("time")) 
			stage.removeChild(stage.getChildByName("time"));
		
		var clock = Bitmap.getBitmap("time", {x:bg.x + 20, y:20}, preloader.queue);
		
		stage.addChild(bg, label, clock);
	}
}

Regressivo.prototype.stopInterval = function()
{
	clearInterval(this.interval);
}