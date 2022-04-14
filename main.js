noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(600, 100);

    PoseNet = ml5.poseNet(video, modelLoaded);
    PoseNet.on('pose', gotPoses);
}
function draw(){
    background("#949A94")
    fill("#F90093");
    stroke("#F90093");
    textSize(difference);
    text("akilan",noseX,noseY);
    document.getElementById("square_sides").innerHTML = "the size of the text is" + difference + " px";
}
function modelLoaded(){
console.log("pose net model is initialised");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = "+ noseX + " noseY = " + noseY);
        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = "+ leftWristX + " rightWristX = " + rightWristX + " difference = " + difference);
    }
}