/**
 * @author Marcos Cardoso
 * @description construtor do objeto Informations
 */

var infoContainer;
var helpContainer;
var barContainer;

/**
 * Construtor do objeto Informations
 */
var Informations = function()
{
	infoContainer = this.createInfoBox();
	helpContainer = this.createHelpBox();
	barContainer = this.createIdentificationBar();
	
	this.homeButton;
	
	this._json;
	
	this.informationContainer = Container.createContainer("informations", {width:stage.width, height:stage.height, x:stage.width * 0.5, y:stage.height * 0.5});
	this.informationContainer.addChild(barContainer, helpContainer, infoContainer);
    
    stage.addChild(this.informationContainer);
}

/**
 * Cria o quadro de mais informações.
 * @method createInfoBox
 */
Informations.prototype.createInfoBox = function()
{
    var shape = this.createBG(stage.width, stage.height, 0.75);
    
    var container = Container.createContainer("infobox", {width:stage.width, height:stage.height, x:stage.width * 0.5, y:-stage.height * 0.5});
    container.addChild(shape, this.createTextBox("informations"));
    
    return container;
}

/**
 * Cria o quadro de ajuda.
 */
Informations.prototype.createHelpBox = function()
{
    var shape = this.createBG(stage.width, stage.height, 0.75);
    
    helpContainer = Container.createContainer("helpbox", {width:stage.width, height:stage.height, x:-stage.width * 0.5, y:stage.height * 0.5});
    helpContainer.addChild(shape, this.createTextBox("help"));
    
    return helpContainer;
}

/**
 * Cria a barra de identificação
 * @method createIdentificationBar
 */
Informations.prototype.createIdentificationBar = function()
{
    var shape = this.createBG(stage.width, 70, 0.75);

    barContainer = Container.createContainer("identificationbar", {width:stage.width, height:70, x:stage.width * 0.5, y:stage.height - 35});
    
    var helpButton = this.createButton("help", "AJUDA");
	this.settings(helpButton);
    helpButton.addEventListener("click", this.switchHelp);
   	
    var infoButton = this.createButton("info", "+ INFORMAÇÕES");
	this.settings(infoButton);
    infoButton.addEventListener("click", this.switchInfo);
    
    this.homeButton = this.createButton("home", "INÍCIO");
    this.settings(this.homeButton);
    this.homeButton.addEventListener("click", this.homeHandler);
    
    var str = "Área de Concentração:";
    var str2 = "CIÊNCIAS";
    var concentracaoContainer = this.createIndication("concentracaoContainer", str, str2, 210, 60);
    
    str = "Recomendado para:";
    str2 = "ENS. FUND. 2 | ENSINO. MÉDIO";
    var recomendacaoContainer = this.createIndication("recomendacaoContainer", str, str2, 420, 60);
    
    var logo = Bitmap.getBitmap("logoNoas", {x:barContainer.width - 230, y:barContainer.height - 55}, preloader.queue);
    
	barContainer.addChild(shape, concentracaoContainer, recomendacaoContainer, logo, helpButton, infoButton, this.homeButton);
    
    return barContainer;
}

Informations.prototype.settings = function(button)
{
	button.addEventListener("mouseover", this.overButtonColor);
	button.addEventListener("mouseout", this.outButtonColor);
	button.cursor = "pointer";
}

/**
* Métodos disparados para over e out dos botões
* São responsáveis pela troca de cores dos botões
*/
Informations.prototype.overButtonColor = function(event)
{
    var shape = event.currentTarget.getChildAt(1);
    Graphic.changeShapeColor(shape, {fillColors:["#BB0000", "#990000"], strokeColor:null, strokeStyle:0.5}, {width:30, height:32, roundness:3});
}

Informations.prototype.outButtonColor = function(event)
{
    var shape = event.currentTarget.getChildAt(1);
    Graphic.changeShapeColor(shape, {fillColors:["#990000", "#660000"], strokeColor:null, strokeStyle:0.5}, {width:30, height:32, roundness:3});
}

/**
 * Cria um botão para a barra de identificação
 * @method createButton
 * @param {String} [type=""] O tipo de botão a ser criado.
 * @param {String} [text=""] O texto que o botão irá conter.
 * @returns {Container} O container que representa o botão.
 */
Informations.prototype.createButton = function(type, text)
{
	var back = Graphic.createRoundedRect({fillColors:["#222222"], strokeColor:null, strokeStyle:0.5}, {width:38, height:40, roundness:6}); //createBG(38, 40, 0.5, ["#111111"]);
    var front = Graphic.createRoundedRect({fillColors:["#990000", "#660000"], strokeColor:null, strokeStyle:0.5}, {width:30, height:32, roundness:3}); //createBG(30, 32, 1, ["#00FFFF", "#009999"]);
    front.x = front.y = 4;
   	
    var container;
    var bitmap;
	var color = "#FFFFFF";
    
    if (type == "help")
    {
        bitmap = Bitmap.getBitmap("instrucoes", {x:0, y:0}, preloader.queue);
        container = Container.createContainer("helpButton", {width:38, height:38, x:barContainer.width - 90, y:30});
    }
    else if (type == "info")
    {
        bitmap = Bitmap.getBitmap("maisInformacoes", {x:0, y:0}, preloader.queue);
        container = Container.createContainer("infoButton", {width:38, height:38, x:barContainer.width - 38, y:30});
    }
    else if (type == "home")
    {
        bitmap = Bitmap.getBitmap("inicio", {x:0, y:0}, preloader.queue);
        container = Container.createContainer("homeButton", {width:38, height:38, x:barContainer.width - 38, y:100});
		color = "#111111";
    }
    
    var label = Label.createLabel(text, {format:"bold 8px Roboto", color:color, name:"label", align:"center", baseLine:"middle", w:70, h:10, lineHeight:10});
    label.x = label.width * 0.5 - 16; label.y = 45;
    
    container.addChild(back, front, bitmap, label);
    
    return container;
}

/**
 * Cria o quadro de indicação da barra de identificação
 * @method createIndication
 * @param {String} [name=""] O nome do objeto a ser criado.
 * @param {String} [textUp=""] O texto superior do quadro.
 * @param {String} [textDown=""] O texto inferior do quadro.
 * @param {Number} [px=0] Posição x.
 * @param {Number} [py=0] Posição y.
 * @returns {Container} O container que representa o quadro.
 */
Informations.prototype.createIndication = function(name, textUp, textDown, px, py)
{
    var shape = Graphic.createRoundedRect({fillColors:["#EEEEEE"], strokeColor:null, strokeStyle:null}, {width:200, height:50, roundness:10}); 
    
    var str = textUp;
    var str2 = textDown;
    var label = Label.createLabel(str, {format:"11px Roboto", color:"#333333", name:"title", align:"center", baseLine:"middle", w:200, h:70, lineHeight:25});
    var label2 = Label.createLabel(str2, {format:"bold 12px Roboto", color:"#333333", name:"text", align:"center", baseLine:"middle", w:200, h:70, lineHeight:25});
    label2.y += 20;
    
    var container = Container.createContainer(name, {width:200, height:70, x:px, y:py});
    shape.x = -100; shape.y = -15;
    container.addChild(shape, label, label2);
    
    return container;
}

/**
 * Cria uma caixa de texto.
 * @method createTextBox
 * @param {String} [type=""] O tipo de caixa de texto.
 * @returns {Container} O container que representa o quadro.
 */
Informations.prototype.createTextBox = function(type)
{
    if (type == "help")
        this._json = JSONHelp;
    else if (type == "informations")
        this._json = JSONInformations;
    
    var shape = this.createBG(600, 400, 1, ["#FFFFFF"]);
    var titleShape = this.createBG(600, 40, 1, ["#555555"]);
    
    var boxCont = Container.createContainer("boxContainer", {width:600, height:400, x:stage.width * 0.5, y:stage.height * 0.5});
    
    var title = Label.createLabel(this._json.title, {format:"bold 18px Roboto", color:"#FFFFFF", name:"title", align:"center", baseLine:"middle", w:300, h:30});
    title.lineHeight = 30;
    title.x = title.width * 0.5 + 150; title.y = shape.y + 20;
    
    var label;
    
    if (type == "help")
        label = this.createHelpLabel();
    else if (type == "informations")
        label = this.createInformationLabels();
	
	//var btn = Button.createShapeButton("X", Common.getCloseButtonFormatModel(), Common.getCloseButtonBoundsModel, Common.getCloseButtonColorModel);
    var format = Common.getCloseButtonFormatModel();
	var bounds = Common.getCloseButtonBoundsModel();
	var colors = Common.getCloseButtonColorModel();
	var button = Button.createShapeButton("x", format, bounds, colors);
	MouseSettings.settings(button, "singleColor");
	
	if (type == "help")
		button.on("click", this.switchHelp, this);	
	else if (type == "informations")
		button.on("click", this.switchInfo, this);	
	
    boxCont.addChild(shape, titleShape, title, label, button);
    
    return boxCont;
}

/**
* Método que cria os campos da ajuda
* @method createHelpLabel
*/
Informations.prototype.createHelpLabel = function()
{
    var container = Container.createContainer("container", {width:550, height:400, x:550 * 0.5 + 25, y:400 * 0.5});
    
    var label = Label.createLabel(this._json.text, {format:"14px Roboto", color:"#111111", name:"label", align:"center", baseLine:"middle", w:550, h:300, lineHeight:25});
    //label.lineHeight = 25;
    label.x = label.width * 0.5; label.y = label.height * 0.5 - 75;
    container.addChild(label);
    
    return container;
}

/**
* Método que cria os campos das informações
* @method createInformationLabels
*/
Informations.prototype.createInformationLabels = function()
{
    var container = Container.createContainer("container", {width:600, height:400, x:600 * 0.5, y:400 * 0.5});
    
    var pX = container.x - (container.width * 0.5) + 25;
    var pY = container.y - (container.height * 0.5);
    
    var teacherLabel        = Label.createLabel(this._json.teacherLabel,       {format:"bold 12px Roboto", color:"#111111", name:"label", align:"left", baseLine:"middle", w:550, h:30, lineHeight:20});
    teacherLabel.x = pX; teacherLabel.y = pY + 75;
    
    var teacherText         = Label.createLabel(this._json.teacherText,        {format:"12px Roboto", color:"#111111", name:"label", align:"left", baseLine:"middle", w:535, h:30, lineHeight:20});
    teacherText.x = pX + 15; teacherText.y = pY + 95;
    
    var areaLabel           = Label.createLabel(this._json.areaLabel,          {format:"bold 12px Roboto", color:"#111111", name:"label", align:"left", baseLine:"middle", w:550, h:30, lineHeight:20});
    areaLabel.x = pX; areaLabel.y = pY + 115;
    
    var areaText            = Label.createLabel(this._json.areaText,           {format:"12px Roboto", color:"#111111", name:"label", align:"left", baseLine:"middle", w:535, h:30, lineHeight:20});
    areaText.x = pX + 15; areaText.y = pY + 135;
    
    var yearLabel           = Label.createLabel(this._json.yearLabel,          {format:"bold 12px Roboto", color:"#111111", name:"label", align:"left", baseLine:"middle", w:550, h:30, lineHeight:20});
    yearLabel.x = pX; yearLabel.y = pY + 155;
    
    var yearText            = Label.createLabel(this._json.yearText,           {format:"12px Roboto", color:"#111111", name:"label", align:"left", baseLine:"middle", w:535, h:30, lineHeight:20});
    yearText.x = pX + 15; yearText.y = pY + 175;
    
    var descriptionLabel    = Label.createLabel(this._json.descriptionLabel,   {format:"bold 12px Roboto", color:"#111111", name:"label", align:"left", baseLine:"middle", w:550, h:30, lineHeight:20});
    descriptionLabel.x = pX; descriptionLabel.y = pY + 195;
    
    var descriptionText     = Label.createLabel(this._json.descriptionText,    {format:"12px Roboto", color:"#111111", name:"label", align:"left", baseLine:"middle", w:535, h:30, lineHeight:20});
    descriptionText.x = pX + 15; descriptionText.y = pY + 215;
    
    var provideLabel        = Label.createLabel(this._json.provideLabel,       {format:"bold 12px Roboto", color:"#111111", name:"label", align:"left", baseLine:"middle", w:550, h:30, lineHeight:20});
    provideLabel.x = pX; provideLabel.y = pY + 275;
    
    var provideText         = Label.createLabel(this._json.provideText,        {format:"12px Roboto", color:"#111111", name:"label", align:"left", baseLine:"middle", w:535, h:30, lineHeight:20});
    provideText.x = pX + 15; provideText.y = pY + 295;
    
    container.addChild(teacherLabel, teacherText, areaLabel, areaText, yearLabel, yearText, descriptionLabel, descriptionText, provideLabel, provideText);
    
    return container;
}

/**
 * Cria o quadro de indicação da barra de identificação
 * @method createBG
 * @param {Number} [_width=""] O comprimento do quadro.
 * @param {Number} [_height=""] A altura do quadro.
 * @param {Number} [_alpha=""] A transparência.
 * @param {Number} [_color=0] Posição x.
 * @returns {Shape} O shape contendo o background.
 */
Informations.prototype.createBG = function(_width, _height, _alpha, _color)
{
    if (_alpha == null)
        _alpha = 1;
    
    if (_color == null)
        _color = ["#000000"];
    
    var bg = Graphic.createRect({fillColors:_color}, {width:_width, height:_height});
    var s = new createjs.Shape(bg);
    s.alpha = _alpha;
    
    return s;
}

/**
 * Este método apresenta ou esconde o quadro de informações dependendo 
 * de sua posição. 
 * @method switchInfo
 */
Informations.prototype.switchInfo = function(event)
{
    if (infoContainer.y < 0)
        createjs.Tween.get(infoContainer, {override:true}).to({y:stage.height * 0.5}, 500, createjs.Ease.quartOut);
    else
        createjs.Tween.get(infoContainer, {override:true}).to({y:-stage.height * 0.5}, 500, createjs.Ease.quartOut);
}

/**
 * Este método apresenta ou esconde o quadro de ajuda dependendo 
 * de sua posição. 
 * @method switchHelp
 */
Informations.prototype.switchHelp = function(event)
{
    if (helpContainer.x < 0)
        createjs.Tween.get(helpContainer, {override:true}).to({x:stage.width * 0.5}, 500, createjs.Ease.quartOut);
    else
        createjs.Tween.get(helpContainer, {override:true}).to({x:-stage.width * 0.5}, 500, createjs.Ease.quartOut);
}

/**
 * Este método leva a aplicação para o início
 * @method homeHandler
 */
Informations.prototype.homeHandler = function(event)
{
	resetGame();
    //createjs.Tween.get(homeButton, {override:true}).to({y:-45}, 500, createjs.Ease.quartOut);
}

/**
 * Este método apresenta ou esconde a barra de identificação dependendo 
 * de sua posição. 
 * @method switchIdentification
 */
Informations.prototype.switchIdentification = function(event)
{
    if (barContainer.y < stage.height)
    {
        createjs.Tween.get(this.homeButton, {override:true}).to({y:-45}, 500, createjs.Ease.quartOut);
        createjs.Tween.get(barContainer, {override:true}).to({y:stage.height + 35}, 500, createjs.Ease.quartOut);
    }
    else
    {
        createjs.Tween.get(this.homeButton, {override:true}).to({y:100}, 500, createjs.Ease.quartOut);
        createjs.Tween.get(barContainer, {override:true}).to({y:stage.height - 35}, 500, createjs.Ease.quartOut);
    }
}