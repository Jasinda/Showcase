var trainSpeed = 250;
var trainPosition = 0;
var animation;

var StartButton = document.getElementById("StartButton");
StartButton.addEventListener("click", speedUp);

var stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", stopTrain);

function speedUp() {
    if (trainSpeed > 10) {
        trainSpeed -= 10;
    }
    console.log("train speed: " + trainSpeed);

    clearInterval(animation);
    animation = setInterval(frame, trainSpeed);


    function frame() {
        trainPosition += 2;
        train.style.left = trainPosition + 'px';
        console.log(trainPosition);
        checkPosition(trainPosition);
    }
}

function checkPosition(currentPosition) {
    if (currentPosition > 900) {
        alert("Crash!");
        console.log("Crash!");
        clearInterval(animation);
    }
}

function stopTrain() {
        clearInterval(animation);
        console.log("Whew! That was close!");
    
}