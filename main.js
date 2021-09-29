canvas=document.getElementById('bt21_playground');
ctx=canvas.getContext("2d");

nasa_mars_images_array=["nasa_1.jpg","nasa_2.jpg","nasa_3.jpg","nasa_4.jpg"];

random_number=Math.floor(Math.random() * 4);
console.log(random_number);

background_image= nasa_mars_images_array[random_number];
console.log("background_image="+background_image);

rover_width=100;
rover_height=90;

rover_image="rover.png";

rover_x=10;
rover_y=10;

function add(){
    xiao=new Image();
    xiao.onload=uploadBackground;
    xiao.src=background_image;

    shilong=new Image();
    shilong.onload=uploadRover;
    shilong.src=rover_image;
}

function uploadBackground(){
    ctx.drawImage(xiao,0,0,canvas.width,canvas.height);
}

function uploadRover(){
    ctx.drawImage(shilong,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
keyPressed=e.keyCode;
console.log(keyPressed);
if(keyPressed=='38'){
    up();
    console.log("up");
}

if(keyPressed=='39'){
    right();
    console.log("right");
}

if(keyPressed=='37'){
    left();
    console.log("left");
}

if(keyPressed=='40'){
    down();
    console.log("down");
}


}

function up(){
if (rover_y >= 0){
    rover_y=rover_y - 10;
    console.log("When up arrow is pressed,x = "+rover_x+"| y = "+rover_y);
    uploadBackground();
    uploadRover();
}
}

function right(){
    if (rover_x <= 700){
        rover_x=rover_x + 10;
        console.log("When right arrow is pressed,x = "+rover_x+"| y = "+rover_y);
        uploadBackground();
        uploadRover();
    }
    }

    function left(){
        if (rover_x >= 0){
            rover_x=rover_x-10;
            console.log("When left arrow is pressed,x = "+rover_x+"| y = "+rover_y);
            uploadBackground();
            uploadRover();
        }
        }

        function down(){
            if (rover_y <= 500){
                rover_y=rover_y + 10;
                console.log("When down arrow is pressed,x = "+rover_x+"| y = "+rover_y);
                uploadBackground();
                uploadRover();
            }
            }
