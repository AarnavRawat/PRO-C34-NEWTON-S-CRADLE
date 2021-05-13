
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var bob,bob2,bob3,bob4,bob5;
var sling,sling2,sling3,sling4,sling5;
var userEngine,userWorld;
var canvas;
 
function setup(){
    canvas= createCanvas(windowWidth / 2, windowHeight/1.5);
    userEngine = Engine.create;
    userWorld = userEngine.world;

    bob = new Bob((windowWidth / 4)-80, (windowHeight/1.5)/1.5,"red");
    bob2 = new Bob((windowWidth / 4)-40, (windowHeight/1.5)/1.5,"red");
    bob3 = new Bob((windowWidth / 4), (windowHeight/1.5)/1.5,"red");
    bob4 = new Bob((windowWidth / 4)+40, (windowHeight/1.5)/1.5,"red");
    bob5 = new Bob((windowWidth / 4)+80, (windowHeight/1.5)/1.5,"red");

    sling1 = new Sling(bob,{x:windowWidth / 4,y:((windowHeight/1.5)/1.5) - 40});
    sling2 = new Sling(bob2,{x:windowWidth / 4,y:((windowHeight/1.5)/1.5) - 40});
    sling3 = new Sling(bob3,{x:windowWidth / 4,y:((windowHeight/1.5)/1.5) - 40});
    sling4 = new Sling(bob4,{x:windowWidth / 4,y:((windowHeight/1.5)/1.5) - 40});
    sling5 = new Sling(bob5,{x:windowWidth / 4,y:((windowHeight/1.5)/1.5) - 40});
}

function draw(){
    background(255);
    Engine.update(userEngine);

    bob.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();

    sling.display();
    sling2.display();
    sling3.display();
    sling4.display();
    sling5.display();
}


function MouseDragged(){
    Matter.Body.setPosition(bob.body, {x:mouseX,y:mouseY});
}