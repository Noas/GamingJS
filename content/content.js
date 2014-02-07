// Assets to load
var manifest = [
    {src : "assets/images/sol.png", type : createjs.LoadQueue.IMAGE, id : "sol"},
    {src : "assets/images/face.png", type : createjs.LoadQueue.IMAGE, id : "face"},
    {src : "assets/images/sky.png", type : createjs.LoadQueue.IMAGE, id : "sky"},
    {src : "assets/images/ground.png", type : createjs.LoadQueue.IMAGE, id : "ground"},
    {src : "assets/images/clouds.png", type : createjs.LoadQueue.IMAGE, id : "clouds"},
    {src : "assets/images/front-background.png", type : createjs.LoadQueue.IMAGE, id : "front-background"},
    {src : "assets/images/back-background.png", type : createjs.LoadQueue.IMAGE, id : "back-background"},
    {src : "assets/images/title.png", type : createjs.LoadQueue.IMAGE, id : "title"},
    {src : "assets/images/logo.png", type : createjs.LoadQueue.IMAGE, id : "logo"},
    {src : "assets/images/dica.png", type : createjs.LoadQueue.IMAGE, id : "dica"},
    {src : "assets/images/informacoes.png", type : createjs.LoadQueue.IMAGE, id : "informacoes"},
    {src : "assets/images/inicio.png", type : createjs.LoadQueue.IMAGE, id : "inicio"},
    {src : "assets/images/instrucoes.png", type : createjs.LoadQueue.IMAGE, id : "instrucoes"},
    {src : "assets/images/mais.png", type : createjs.LoadQueue.IMAGE, id : "mais"},
    {src : "assets/images/mais-informacoes.png", type : createjs.LoadQueue.IMAGE, id : "maisInformacoes"},
    {src : "assets/images/menu.png", type : createjs.LoadQueue.IMAGE, id : "menu"},
    {src : "assets/images/music-off.png", type : createjs.LoadQueue.IMAGE, id : "musicOff"},
    {src : "assets/images/music-on.png", type : createjs.LoadQueue.IMAGE, id : "musicOn"},
    {src : "assets/images/sound-off.png", type : createjs.LoadQueue.IMAGE, id : "soundOff"},
    {src : "assets/images/sound-on.png", type : createjs.LoadQueue.IMAGE, id : "soundOn"},
    {src : "assets/images/noas.png", type : createjs.LoadQueue.IMAGE, id : "logoNoas"},
    {src : "assets/images/time.png", type : createjs.LoadQueue.IMAGE, id : "time"},
    {src : "assets/animation/lisa.png", type : createjs.LoadQueue.IMAGE, id:"lisa"},
    {src : "assets/sound/creation.mp3", type : createjs.LoadQueue.SOUND, id:"creation"},
    {src : "assets/sound/pop.mp3", type : createjs.LoadQueue.SOUND, id:"pop"}
];

// Informations
var JSONInformations = {
	"title":"Mais Informações",
	"teacherLabel":"Professor responsável", 
	"teacherText":"Marcos Cardoso", 
	"areaLabel":"Área de concentração",
	"areaText":"Matemática",
	"yearLabel":"Anos recomendados",
	"yearText":"9º ano do Ensino Fundamental a 3º ano do Ensino Médio",
	"descriptionLabel":"Descrição da atividade",
	"descriptionText":"Nesta atividade, os alunos jogarão o Matix. Um jogo muito conhecido onde é preciso fazer mais pontos do que o adversário, unindo estratégia e raciocínio rápido.",
	"provideLabel":"O que proporciona ao aluno",
	"provideText":"Permite que os alunos façam cálculos matemáticos e raciocinem sobre as escolhas a serem feitas."
};

// Help
var JSONHelp = {
	"title":"Ajuda",
	"text":"Ao iniciar o jogo, você deverá escolher se quer jogar contra o computador ou contra outro adversário no mesmo computador. \nEm seguida, deverá escolher a quantidade de peças que quer que o tabuleiro tenha. \nDepois, deverá digitar os nomes dos oponentes. \nO jogo consiste em fazer um número de pontos maior do que o adversário. As jogadas devem ser planejadas de modo que o adversário pegue a menor peça possível. \n\nBoa sorte!"
};