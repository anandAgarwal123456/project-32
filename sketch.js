const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var world,engine;
var ground1,ground2,ground3;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,
block14,block15,block16;
var block17,block18,block19,block20,block21,block22,block23,block24,block25;
var polygon_img,backImg,backImg2;
var polygon;
var slingShot;

var score=0;

var bg="sprites/bg1.png";

function preload() {
polygon_img=loadImage("polygon.png");
backImg=loadImage("sprites/bg1.png")
backImg2=loadImage("sprites/bg2.jpg")

getBackground();
}

function setup() {
  createCanvas(800,500);

  engine = Engine.create();
	world = engine.world;

  ground1= new Ground(400,480,800,30);

  ground2= new Ground(390,350,240,20);
  ground3= new Ground(680,265,180,20);
  // level 1
  block1= new Block(300,320,30,40);
  block2= new Block(330,320,30,40);
  block3= new Block(360,320,30,40);
  block4= new Block(390,320,30,40);
  block5= new Block(420,320,30,40);
  block6= new Block(450,320,30,40);
  block7= new Block(480,320,30,40);

  block8= new Block(330,280,30,40);
  block9= new Block(360,280,30,40);
  block10= new Block(390,280,30,40);
  block11= new Block(420,280,30,40);
  block12= new Block(450,280,30,40);

  block13= new Block(360,240,30,40);
  block14= new Block(390,240,30,40);
  block15= new Block(420,240,30,40);

  block16= new Block(390,200,30,40);
  
  // level two
  block17= new Block(620,235,30,40);
  block18= new Block(650,235,30,40);
  block19= new Block(680,235,30,40);
  block20= new Block(710,235,30,40);
  block21= new Block(740,235,30,40);

  block22= new Block(650,195,30,40);
  block23= new Block(680,195,30,40);
  block24= new Block(710,195,30,40);

  block25= new Block(680,155,30,40);

  // polygon body
  polygon= Bodies.circle(100,200,20);
  World.add(world,polygon);

  slingShot= new Sling(this.polygon,{x:100,y:200});

}

function draw() {
  background(0); 

  Engine.update(engine);
  
  ground1.display();
  ground2.display();
  ground3.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();
  block23.score();
  block24.score();
  block25.score();

  imageMode(CENTER);
  image(polygon_img,polygon.position.x,polygon.position.y,40,40);

  slingShot.display();
  
  text("SCORE:"+ score,700,60);
}

function mouseDragged() {
  
  Matter.Body.setPosition(this.polygon,{x:mouseX, y:mouseY});
}

function mouseReleased() {
  slingShot.fly();
}

async function getBackground() {
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=18){
        bg = "sprites/bg.png";
    }
    else if(hour>=18 && hour<=06) {
        bg = "sprites/bg2.jpg";
    }
  }


