song1 = "";
song2 = "";
song3 = "";
song4 = "";
song5 = "";

function preload()
{
    song1 = loadSound("Dhinka Chika.mp3");
    song2 = loadSound("Cham Cham .mp3");
    song3 = loadSound("Abhi Toh Party Shuru Hui Hai.mp3");
    song4 = loadSound("Raataan Lambiyan - Shershaah.mp3");
    song5 = loadSound("Lift Teri Bandh Hai.mp3");
}

function setup()
{
    canvas = createCanvas(500,400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video ,0 ,0 ,500 ,400);
}