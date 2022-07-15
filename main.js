function preload() {

}
function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color="";
}
function draw() {
    image(video, 100, 100, 400,400);
fill(255,0,0);
stroke(255,0,0);
 circle(50,40,80);
 

 fill(255,0,0);
stroke(255,0,0);
 circle(600,40,80);

 fill(255,0,0);
stroke(255,0,0);
 circle(50,430,80);

 fill(255,0,0);
stroke(255,0,0);
 circle(600,430,80);

   tint (tint_color);
}

function take_snapshot(){
    save('student_name.png');
}
function filter_tint(){
    tint_color = document.getElementById("color_name").value;
}