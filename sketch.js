var starImg,bgImg;
var star, starBody;
var music;
//create variable for fairy sprite and fairyImg
var fairysprite,fairyimage;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");

	//load animation for fairy here
	fairyimage=loadAnimation("fairyimage1.png","fairyimage2.png");
	
	//load sound here
	music=loadSound("JoyMusic.mp3");

	
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
    music.play();

	//create fairy sprite and add animation for fairy
    fairysprite=createSprite(130,520);
	fairysprite.addAnimation("fairyanimation",fairyimage);
	fairysprite.scale=0.3;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy
  if(
  star.y>470 &&	starBody.position.y>470  
  )
  {
	  Matter.Body.setStatic(starBody,true);
  }


  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	if (keyCode === LEFT_ARROW) {
		fairysprite.x=fairysprite.x-3; 
	}

	if (keyCode === RIGHT_ARROW) {
	fairysprite.x=fairysprite.x+10;
	}
	
}
