nose_x=0;
nose_y=0;
function preload(){
clown_nose=loadImage('https://i.postimg.cc/BvpdcnFG/clown-nose-clipart-2.png');
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}
function draw(){
image(video,0,0,300,300);
image(clown_nose,nose_x,nose_y,35,35);
}
function take_snapshot(){
 save('clown_nose.png')
}
function modelLoaded(){
    console.log("Model is loaded");
}
function gotPoses(results){
if(results.length>0){
    console.log(results);
    nose_x=results[0].pose.nose.x-15;
    nose_y=results[0].pose.nose.y-15;
    console.log("nose x= "+nose_x);
    console.log("nose y= "+nose_y);
}
}