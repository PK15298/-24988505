canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

rover_x = 10;
rover_y = 10;

bg_img = "image1.png";
rover_img = "image2.jpg";

rover_height = 100;
rover_width = 90;

function add()

{
  background_imgTag = new Image(); //defining a variable with a new image
	background_imgTag.onload = UploadBG; // setting a function, onloading this variable
	background_imgTag.src = bg_img;   // load image

	rover_imgTag = new Image(); //defining a variable with a new image
	rover_imgTag.onload = UploadRoveer; // setting a function, onloading this variable
	rover_imgTag.src = rover_img;   // load image
}


function UploadBG() {
  ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}


function UploadRoveer() {
  ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
  keyPressed = e.keyCode;
  console.log(keyPressed);
  if (keyPressed == "38") {
    up();
    console.log("UP");
  }

  if (keyPressed == "40") {
    down();
    console.log("DOWN");
  }

  if (keyPressed == "37") {
    left();
    console.log("LEFT");
  }

  if (keyPressed == "39") {
    right();
    console.log("RIGHT");
  }
}

function up() {
  if (rover_y >= 0) {
    rover_y = rover_y - 10;
    console.log("up arrow");
    console.log("x" + rover_x);
    console.log("y" + rover_y);

    UploadBG();
    UploadRoveer();

  }
}

function down() {
  if (rover_y <= 399) {
    rover_y = rover_y + 10;
    console.log("down arrow");
    console.log("x" + rover_x);
    console.log("y" + rover_y);

    UploadBG();
    UploadRoveer();

  }
}

function left() {
  if (rover_x >= 0) {
    rover_x = rover_x - 10;
    console.log("left arrow");
    console.log("x" + rover_x);
    console.log("y" + rover_y);

    UploadBG();
    UploadRoveer();

  }
}

function right() {
  if (rover_x <= 599) {
    rover_x = rover_x + 10;
    console.log("right arrow");
    console.log("x" + rover_x);
    console.log("y" + rover_y);

    UploadBG();
    UploadRoveer();

  }
}