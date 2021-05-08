var bg1,bg2,bg3,bg4,bg5,bg6,bg7,bg8,bg9;
var pl1,pl2,pl3;
var b1,b2,b3,b4,b5,b6,b6,b8,b9;
var p1,p2,p3;
var player
var pool,poolimg;
var a=0;

function preload()
{
	bg1 = loadImage("amphouse.jpg")
	bg2 = loadImage("bed.jpg")
	bg3 = loadImage("cafe.jpg")
	bg4 = loadImage("golf.jpg")
	bg5 = loadImage("gym.jpg")
	bg6 = loadImage("house1.jpg")
	bg7 = loadImage("park.jpg")
	bg8 = loadImage("shoot.jpg")
	bg9 = loadImage("shop.jpg")
	pl1 = loadImage("ben.png")
	pl2 = loadImage("brent.png")
	pl3 = loadImage("lexi.png")
	poolimg = loadImage("pool.png")
}

function setup() 
{
	createCanvas(800, 400);
	
	
	start();
	
}

	


function draw() {
	rectMode(CENTER);
	
	//background("black");
	if(mousePressedOver(b1)){
		shoot()
	}

	
	drawSprites();
	text(mouseX + "," + mouseY ,20,20)
	fill("red")
	textSize(20)
	text("Here's a sneak-peak into my life.. Use the cursur to conrol me.",10,35)
	
	
	
}

function start(){

	b1 = createSprite(400,155,800,400)
	b1.addImage(bg1)
	b1.scale = 0.7
	
	
	
	p1 = createSprite(110,278,20,20)
	p1.addImage(pl1)
	p1.scale= 0.4

	p2 = createSprite(750,290,20,20)
	p2.addImage(pl2)
	p2.scale=1.25

	p3 = createSprite(380,260,20,20)
	p3.addImage(pl3)
	p3.scale= 0.5

	if(mousePressedOver(p1)){
		
		shoot()
		a=1;
	}

	if(mousePressedOver(p2)){
		
		shoot()
		a=2
	}


	if(mousePressedOver(p3)){
		
		shoot()
		a=3
	}


	drawSprites()
	
	
}

function shoot(){


	b2 = createSprite(400,155,800,400)
	b2.addImage(bg8)
	b2.scale = 1.5

	pool = createSprite(110,330,20,20)
	pool.addImage(poolimg)
	pool.scale = 0.5

	player = createSprite(690,270,20,20)
	player.addImage(pl3)
	player.scale=0.5
	player.setCollider("circle",0,0,100)

	player.x=mouseX
	player.y=mouseY

	if (player.isTouching(pool)){
		player.x=100
		player.y=300
		player.scale=0.2
		park()
	}
	

	drawSprites()
}

function park(){
	b3 = createSprite(400,155,800,400)
	b3.addImage(bg7)
	b3.scale = 1.5

	player = createSprite(690,270,20,20)
	player.addImage(pl1)
	player.scale=0.4
	player.setCollider("circle",0,0,100)

	player.x=mouseX
	player.y=mouseY


}