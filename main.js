noseX= 0;
noseY= 0;
leftWristX= 0;
rightWristX= 0;
difference= 0;

function preload() {}

function setup() {
  video = createCapture(VIDEO);
  video.size(550, 500);

  canvas = createCanvas(550, 500);
  canvas.position(750, 150);

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);

}

function modelLoaded() {
  console.log("Model is working");
}
function gotPoses(results) {
  if (results.length > 0) {
    console.log(results);
    noseX= results[0].pose.nose.x;
    nosey= results[0].pose.nose.y;

    console.log("nose X = "+ noseX + "nose Y = " + noseY);

    leftWristX= results[0].pose.leftWrist.x;
    rightWristX= results[0].pose.rightWrist.x;

difference= Math.floor(leftWristX - rightWristX);

console.log("left wrist X = "+ leftWristX+ " right wrist x = "+rightWristX+ " difference = "+ difference);

  }
}

function draw() {

    background("pink");
    document.getElementById("squareSides").innerHTML= 
    "Width and Height of square will be : "+ difference+ " px";

    fill("blue");
    stroke("blue");

    square(noseX, noseY, difference);
}
