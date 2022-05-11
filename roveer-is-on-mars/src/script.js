canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

bg_img = "https://www.freepnglogos.com/uploads/mars-png/mars-transparent-png-stickpng-0.png";
rover_img = "https://cdn.sci.esa.int/documents/33431/35217/1567214832335-ExoMars2020_Rover_20170207_3_625.jpg";

rover_x = 150;
rover_y = 150;

rover_height = 150;
rover_width = 150;

function add()

{
background1 = new Image();
background1.onload = UploadBG;
background1.src = bg_img;

roveer = new Image();
roveer.onload = UploadRoveer;
roveer.src = rover_img;
}

function UploadBG()
{
ctx.drawImage(background1, 0,0, canvas.width, canvas.height);
}


function UploadRoveer()
{
ctx.drawImage(roveer, rover_x, rover_y, rover_width, rover_height);
}

UploadBG();
UploadRoveer();

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{ 
  keyPressed = e.keycode;
  console.log(keyPressed);
  if (keyPressed == "38")
{
  up();
  console.log("UP");
}
  
   if (keyPressed == "40")
{
  down();
  console.log("DOWN");
}
  
   if (keyPressed == "37")
{
  left();
  console.log("LEFT");
}

 if (keyPressed == "39")
{
  right();
  console.log("RIGHT");
}
}
  function up()
  {
    if(rover_y >=0)
    { 
      rover_y = rover_y -10;
      console.log ("up arrow");
      console.log ("x"+rover_x);
      console.log ("y"+rover_y);
      
  UploadBG();
UploadRoveer();
      
    }
  }
   function down()
  {
    if(rover_y <=399)
    { 
      rover_y = rover_y +10;
      console.log ("down arrow");
      console.log ("x"+rover_x);
      console.log ("y"+rover_y);
      
  UploadBG();
UploadRoveer();
      
    }
  }
       function left()
  {
    if(rover_x >=0)
    { 
      rover_x = rover_x -10;
      console.log ("left arrow");
      console.log ("x"+rover_x);
      console.log ("y"+rover_y);
      
  UploadBG();
UploadRoveer();
      
    }
  }
         function right()
  {
    if(rover_x <=599)
    { 
      rover_x = rover_x +10;
      console.log ("right arrow");
      console.log ("x"+rover_x);
      console.log ("y"+rover_y);
      
  UploadBG();
UploadRoveer();
      
    }
  }  
      
      

      
      
      
      
       
    