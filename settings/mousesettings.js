var MouseSettings = function(){}

MouseSettings.settings = function(button, type)
{
	if (type == "normal")
	{
		button.addEventListener("mouseover", MouseSettings.overButton);
		button.addEventListener("mouseout", MouseSettings.outButton);
	}	
	else if (type == "color")
	{
		button.addEventListener("mouseover", MouseSettings.overButtonColor);
		button.addEventListener("mouseout", MouseSettings.outButtonColor);
	}	
	else if (type == "singleColor")
	{
		button.addEventListener("mouseover", MouseSettings.overButtonSingleColor);
		button.addEventListener("mouseout", MouseSettings.outButtonSingleColor);
	}
	
	button.cursor = "pointer";
}

MouseSettings.overButton = function(event)
{
	event.currentTarget.scaleX = 1.05;
    event.currentTarget.scaleY = 1.05;
}

MouseSettings.outButton = function(event)
{
	event.currentTarget.scaleX = 1;
    event.currentTarget.scaleY = 1;
}

/**
* Métodos disparados para over e out dos botões
* São responsáveis pela troca de cores dos botões
*/
MouseSettings.overButtonColor = function(event)
{
    var shape = event.currentTarget.getChildAt(1);
    Graphic.changeShapeColor(shape, {fillColors:["#BB0000", "#990000"], strokeColor:null, strokeStyle:0.5}, {width:30, height:32, roundness:3});
}

MouseSettings.outButtonColor = function(event)
{
    var shape = event.currentTarget.getChildAt(1);
    Graphic.changeShapeColor(shape, {fillColors:["#990000", "#660000"], strokeColor:null, strokeStyle:0.5}, {width:30, height:32, roundness:3});
}

/**
* Métodos disparados para over e out dos botões
* São responsáveis pela troca de cores dos botões
*/
MouseSettings.overButtonSingleColor = function(event)
{
    var shape = event.currentTarget.getChildAt(0);
    Graphic.changeShapeColor(shape, {fillColors:["#CCCCCC", "#AAAAAA"], strokeColor:null, strokeStyle:0.5}, {width:28, height:28, roundness:3});
}

MouseSettings.outButtonSingleColor = function(event)
{
    var shape = event.currentTarget.getChildAt(0);
    Graphic.changeShapeColor(shape, {fillColors:["#333333", "#111111"], strokeColor:null, strokeStyle:0.5}, {width:28, height:28, roundness:3});
}