/**
 * @author Marcos Cardoso
 * @description construtor do objeto Audio
 */
var Audio = function() 
{
	// variavel private
    var musicStr = "musicOn";
    var soundStr = "soundOn";
	
	this.music = Common.music;
    
    var audioContainer = Container.createContainer("audioContainer", {width:100, height:50, x:stage.width - 50, y:25});
	
	// variavel public
    this.btmusic = Bitmap.getBitmap(musicStr, {x:0,y:0}, preloader.queue);
    this.btsound = Bitmap.getBitmap(soundStr, {x:50,y:0}, preloader.queue);
	
	this.btmusic.cursor = "pointer";
	this.btsound.cursor = "pointer";
    
    this.btmusic.addEventListener("click", switchMusic);
    this.btsound.addEventListener("click", switchSound);
	
	var musicLabel = Label.createLabel("MÚSICA", {format:"bold 8px Roboto", color:"#111111", name:"musicLabel", align:"center", baseLine:"middle", w:75, h:15});
	musicLabel.x = this.btmusic.x + this.btmusic.width * 0.5;
	musicLabel.y = this.btmusic.height;
	
	var soundLabel = Label.createLabel("SONS", {format:"bold 8px Roboto", color:"#111111", name:"soundLabel", align:"center", baseLine:"middle", w:75, h:15});
	soundLabel.x = this.btsound.x + this.btsound.width * 0.5;
	soundLabel.y = this.btsound.height;
    
    audioContainer.addChild(this.btmusic, this.btsound, musicLabel, soundLabel);
    
    function switchMusic()
    {
        audioContainer.removeChild(audioContainer.getChildByName(musicStr));
        
        if (musicStr == "musicOff") {
            this.btmusic = Bitmap.getBitmap("musicOn", {x:0,y:0}, preloader.queue); musicStr = "musicOn";
			musicManager.on();
        } else {
            this.btmusic = Bitmap.getBitmap("musicOff", {x:0,y:0}, preloader.queue); musicStr = "musicOff";
			musicManager.off();
        }
        
        this.btmusic.addEventListener("click", switchMusic);
        audioContainer.addChild(this.btmusic);
    }
    
    function switchSound()
    {
        audioContainer.removeChild(audioContainer.getChildByName(soundStr));
        
        if (soundStr == "soundOff") {
            this.btsound = Bitmap.getBitmap("soundOn", {x:50,y:0}, preloader.queue); soundStr = "soundOn";
			soundManager.enable(true);
        } else {
            this.btsound = Bitmap.getBitmap("soundOff", {x:50,y:0}, preloader.queue); soundStr = "soundOff";
			soundManager.enable(false);
        }
        
        this.btsound.addEventListener("click", switchSound);
        audioContainer.addChild(this.btsound);
    }
    
    stage.addChild(audioContainer);
};