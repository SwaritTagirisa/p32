const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;

var bg = "sunrise.png";

function preload() {
    getBackgroundImg();
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
        background(backgroundImg);

    Engine.update(engine);

    fill("black");
    textSize(30);
    
    //if(hour=0){
        //text("Time :14PM", 50,100);
    //}else if(hour==0){
        //text("Time : 11 AM",100,100);
    //}else{
        //text("Time : "+ hour%12 + " AM", 50,100);
    //}

}

async function getBackgroundImg(){

    // write code to fetch time from API
    
 
    //change the data in JSON format and store it in variable responseJSON
    

    
    //fetch datetime from responseJSON
    
    

    // slice the datetime to extract hour
async function getBackgroundImg(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Pacific/Auckland");
    var responseJSON = await response.json();
    
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
        
    if(hour>=06 && hour<=19){
        bg = "sprites/bg.png";
        }
    else{
        bg = "sprites/bg2.jpg";
    }
    
        backgroundImg = loadImage(bg);
        console.log(backgroundImg);
}
    

    
    if(hour>=0 && hour<18 ){
        bg = "sunrise.png";
    }
    else{
        bg="sunset.png"
    }
    
    backgroundImg = loadImage(bg);
}

function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  
  function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
    t = setTimeout(function() {
      startTime()
    }, 500);
  }
  startTime();
