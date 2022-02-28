song = "";
song1= "";
song2 = "";
function setup()
{
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video,0,0,600,500);
}

function preload()
{
    song = loadSound("music.mp3");
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function play()
{
    song.play();
}

function play_one()
{
    song1.play();
}
function play_two()
{
    song2.play();
}



