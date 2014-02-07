var Game = new function() {}

//Game.prototype.deploy = function()
function deploy()
{
	//console.log("inicia game");
	regressivo = new Regressivo();
	regressivo.startTime(30);
	
	/**
	* MovieClips
	*/
	var mc = new createjs.MovieClip(null, 0, true, {start:20});
	stage.addChild(mc);
	
	var child1 = new createjs.Shape(new createjs.Graphics().beginFill("#999999").drawCircle(30,30,30));
	var child2 = new createjs.Shape(new createjs.Graphics().beginFill("#5a9cfb").drawCircle(30,30,30));
	
	mc.timeline.addTween(createjs.Tween.get(child1).to({x:0}).to({x:60}, 50).to({x:0}, 50));
	mc.timeline.addTween(createjs.Tween.get(child2).to({x:60}).to({x:0}, 50).to({x:60}, 50));
	
	mc.gotoAndPlay("start");
	
	/**
	* Animation
	*/
	var data = {
		images: ["assets/animation/lisa.png"],
		frames: {width:172, height:172},
		animations: {run:[0,14], speed: 1}
	};
	var spriteSheet = new createjs.SpriteSheet(data);
	var animation = new createjs.Sprite(spriteSheet, "run");
	animation.x = 200;
	animation.y = 200;
	
	stage.addChild(animation);
}