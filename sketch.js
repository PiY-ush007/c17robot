var head,body,neck;




function setup() {
  createCanvas(400, 400);
 body=createSprite(200,300,100,150);
 body.shapeColor=("black");
 neck=createSprite(200,170,5,100);
 neck.shapeColor=("blue");
 head=createSprite(neck.x,neck.y-50,50,50)
 leg1=createSprite(180,385,20,20);
 leg1.shapeColor=("red")
 leg2=createSprite(220,385,20,20);
 leg2.shapeColor=("red")
 arm1=createSprite(100,250,100,20);
 arm2=createSprite(300,250,100,20);
}

function draw() {
  background(220);
  text(mouseX + ',' + mouseY, 10, 15);

  if(keyDown("SPACE")){
    neck.height=50;
    neck.y=200;
   head.y=neck.y-25;
   head.shapeColor=("purple")
   arm1.width=50;
   arm2.width=50;
   arm1.x=body.x+30;
   arm2.x=body.x-30;

    

    
  }
  else{
    neck.height=100;
    neck.y=175;
    head.y=neck.y-50
    head.shapeColor=("red");
    arm1.width=100;
    arm2.width=100;
    arm1.x=100;
    arm2.x=300;

    
  }



  drawSprites();

  textSize(18);
  textFont("Georgia");
  textStyle(BOLD);
  
  fill("black");
  
  text("Press SPACE to change robot!!!",45,50);


}