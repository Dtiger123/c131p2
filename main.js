img="";
function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
}
function preload(){
    img = loadImage("iphone-13-blue-select-2021.jpg");
}
function draw(){
    image(img,0,0,640,420);
    fill("#FF0000");
    text("IPhone",45,75);
    noFill();
    stroke("#FF0000");
    rect(30,60,450,350);
}