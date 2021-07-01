const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var backgroundImage;
var Ground;
var stand1,stand2;
var polygon_img;
var slingshot,ball;
function preload(){
 backgroundImage = loadImage("sprites/background.png");
 polygon_img = loadImage("sprites/polygon.png");
}

function setup() {
  createCanvas(1500,600);
  engine = Engine.create();
  world = engine.world;

    
  ground_0 = new ground(750,600,1500,20);
  ground1 = new ground(630,540,400,20);
  ground2 = new ground(1170,260,300,20);

  block1 = new block(540,510,30,40);
  block2 = new block(570,510,30,40); 
  block3 = new block(600,510,30,40); 
  block4 = new block(630,510,30,40);
  block5 = new block(660,510,30,40);
  block6 = new block(690,510,30,40);
  block7 = new block(720,510,30,40);
   //level two
   block8 = new block(570,470,30,40); 
   block9 = new block(600,470,30,40); 
   block10 = new block(630,470,30,40);
   block11 = new block(660,470,30,40);
   block12 = new block(690,470,30,40); 
   //level three
   block13 = new block(600,430,30,40);
   block14 = new block(630,430,30,40);
   block15 = new block(660,430,30,40);
    //top
   block16 = new block(630,390,30,40);
  //set 2 for second stand 
  //level one
   blocks1 = new block(1100,230,30,40);
   blocks2 = new block(1130,230,30,40);
   blocks3 = new block(1160,230,30,40); 
   blocks4 = new block(1190,230,30,40); 
   blocks5 = new block(1220,230,30,40);
      //level two 
   blocks6 = new block(1130,190,30,40);
   blocks7 = new block(1160,190,30,40); 
   blocks8 = new block(1190,190,30,40); 
       //top 
   blocks9 = new block(1160,150,30,40);
      //ball holder with slings
   ball = Bodies.circle(50,100,20); 
   World.add(world,ball); 
   slingshot = new slingShot(this.ball,{x:50,y:100});
  
  
 
}

function draw() {
  background(backgroundImage);  
  drawSprites();

 
 ground_0.display();
 ground1.display();
 ground2.display();
 fill("#581845");
 block1.display();
 block2.display();  
 block3.display();
 block4.display();
 block5.display();
 block6.display();
 block7.display();
 fill("#900C3F")
 block8.display();
 block9.display();
 block10.display();
 block11.display();
 block12.display();
 fill("#C70039")
 block13.display();
 block14.display();
 block15.display();
 fill("#FF5733")
 block16.display();
 fill("#581845");
 blocks1.display();
 blocks2.display();
 blocks3.display();
 blocks4.display();
 blocks5.display();
 fill("#900C3F");
 blocks6.display();
 blocks7.display();
 blocks8.display();
 fill("#C70039");
 blocks9.display();
 fill("#FF5733");
 imageMode(CENTER) 
 image(polygon_img ,ball.position.x,ball.position.y,40,40);
 slingshot.display();

}
function mouseDragged(){ 
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
 }


function mouseReleased(){
  slingshot.fly();
}
