canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d"); // Drawing reference of the canvas.

car1_width = 120;
car1_height = 70;

car2_width = 120;
car2_height = 70;

background_img = "bg.png";

car1_img = "blueCar.png";
car2_img = "redCar.png";

car1_x = 10;
car1_y = 10;

car2_x = 10;
car2_y = 85;

function add()
{
    background_imgTag = new Image(); // Defining a variable with a new image.
    background_imgTag.onload = UploadBackground; // Setting a function, onloading this variable.
    background_imgTag.src = background_img; // Load image.

    car1_imgTag = new Image(); // Defining a variable with a new image.
    car1_imgTag.onload = UploadCar; // Setting a function, onloading this variable.
    car1_imgTag.src = car1_img; // Load image.

    car2_imgTag = new Image(); // Defining a variable with a new image.
    car2_imgTag.onload = UploadCar2; // Setting a function, onloading this variable.
    car2_imgTag.src = car2_img; // Load image.
}

function UploadBackground()
{
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function UploadCar()
{
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function UploadCar2()
{
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

/* Key’s ASCII Value
a 65
b 66
c 67
d 68
e 69
f 70
g 71
h 72
i 73
j 74
k 75
l 76
m 77
n 78
o 79
p 80
q 81
r 82
s 83
t 84
u 85
v 86
w 87
x 88
y 89
z 90
Up 38
Down 40
Left 37
Right 39
Alt 18
Ctl 91
Esc 27
*/

window.addEventListener("keydown", Keydown);
function Keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38')
    {
        Car1_Up();
        console.log("up arrow key");
    }
    if (keyPressed == '40')
    {
        Car1_Down();
        console.log("down arrow key");
    }
    if (keyPressed == '37')
    {
        Car1_Left();
        console.log("left arrow key");
    }
    if (keyPressed == '39')
    {
        Car1_Right();
        console.log("right arrow key");
    }

    /* 87 w, 65 a, 83 s, 68 d.
    Was useful copying the list of ASCII values for one :))
    */
    if (keyPressed == '87')
    {
        Car2_Up();
        console.log("w");
    }
    if (keyPressed == '83')
    {
        Car2_Down();
        console.log("s");
    }
    if (keyPressed == '65')
    {
        Car2_Left();
        console.log("a");
    }
    if (keyPressed == '68')
    {
        Car2_Right();
        console.log("d");
    }
}

function Car1_Up()
{
    if (car1_y >= 0.0)
    {
        car1_y = car1_y - 10;
        console.log("When up key is pressed, the value of x is " + car1_x + " and y is " + car1_y);
        UploadBackground();
        UploadCar();
        UploadCar2();
    }
}

function Car1_Down()
{
    if (car1_y <= 500.000)
    {
        car1_y = car1_y + 10;
        console.log("When down key is pressed, the value of x is " + car1_x + " and y is " + car1_y);
        UploadBackground();
        UploadCar();
        UploadCar2();
    }
}

function Car1_Left()
{
    if (car1_x >= 0)
    {
        car1_x -= 10;
        console.log("When left key is pressed, the value of x is " + car1_x + " and y is " + car1_y);
        UploadBackground();
        UploadCar();
        UploadCar2();
    }
}

function Car1_Right()
{
    if (car1_x <= 700)
    {
        car1_x += 10;
        console.log("When right key is pressed, the value of x is " + car1_x + " and y is " + car1_y);
        UploadBackground();
        UploadCar();
        UploadCar2();
    }
}

function Car2_Up()
{
    if (car2_y >= 0.0)
    {
        car2_y -= 10;
        console.log("When w is pressed, the value of x is " + car2_x + " and y is " + car2_y);
        UploadBackground();
        UploadCar();
        UploadCar2();
    }
}

function Car2_Down()
{
    if (car2_y <= 500.000)
    {
        car2_y += 10;
        console.log("When s is pressed, the value of x is " + car2_x + " and y is " + car2_y);
        UploadBackground();
        UploadCar();
        UploadCar2();
    }
}

function Car2_Left()
{
    if (car2_x >= 0)
    {
        car2_x -= 10;
        console.log("When a is pressed, the value of x is " + car2_x + " and y is " + car2_y);
        UploadBackground();
        UploadCar();
        UploadCar2();
    }
}

function Car2_Right()
{
    if (car2_x <= 700)
    {
        car2_x += 10;
        console.log("When d is pressed, the value of x is " + car2_x + " and y is " + car2_y);
        UploadBackground();
        UploadCar();
        UploadCar2();
    }
}

window.addEventListener("keydown", Race);
function Race(e)
{
    keyValuePressed = e.keyCode;
    if (keyValuePressed == '82')
    {
        //for(i=0; i <= 70; i++)
        //{
        setTimeout(() => {  RaceCars(); }, 150);
        //}
    }
}

function RaceCars()
{
    race_state = "started";

    car1_randomSpeedAdditional = Math.floor(Math.random() * 12);
    car1_speed = 10 + car1_randomSpeedAdditional;

    car2_randomSpeedAdditional = Math.floor(Math.random() * 12);
    car2_speed = 10 + car2_randomSpeedAdditional;

    if (car1_x <= 700)
        car1_x += car1_speed;
    if (car2_x <= 700)
        car2_x += car2_speed;

    UploadBackground();
    UploadCar();
    UploadCar2();

    if (car1_x > 699 && race_state == "started")
    {
        race_state = "stopped";
        console.log("The blue car is the winner!");
        document.getElementById("RaceWinner").innerHTML = "The winner of the race is the blue car!"
    }
    else if (car2_x > 699 && race_state == "started")
    {
        race_state = "stopped";
        console.log("The red car is the winner!");
        document.getElementById("RaceWinner").innerHTML = "The winner of the race is the red car!"
    }

    if (race_state == "started")
        setTimeout(() => {  RaceCars(); }, 150);
}

window.addEventListener("keydown", CheckKeyPressed);
function CheckKeyPressed(e)
{
    keyValue = e.keyCode;
    document.getElementById("ASCIIValue").innerHTML = "The value of the key is " + keyValue;
}
