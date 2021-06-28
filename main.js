canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

key_type_x = 200;
key_type_y = 200;

key_type_width = 300
key_type_height = 100;

var key_pressed_image;

width=screen.width;
    new_width=width-70;
    new_height=screen.height-300;
    if(width <992){
        document.getElementById("myCanvas").width=new_width;
        document.getElementById("myCanvas").height=new_height;
        document.body.style.overflow="hidden";
    }

function add() {
	pressed_key_image= new Image(); 
	pressed_key_image.onload = uploading_key_type_image; 
	pressed_key_image.src = key_pressed_image;   
}

function uploading_key_type_image() {
    ctx.drawImage(pressed_key_image, key_type_x, key_type_y, key_type_width, key_type_height);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
var ASCII_code=e.keyCode;
console.log("The ASCII code for the key pressed is "+ASCII_code);
    if((ASCII_code>=97 && ASCII_code<=122)||(ASCII_code>=65 && ASCII_code<=90)){
		cleartext()
        aplhabetkey()
		console.log("The key you have pressed is a Alphabet.")
		document.getElementById("type_of_key_displayer").innerHTML="You have pressed a Alphabet key."
	}
	if(ASCII_code>=48 && ASCII_code<=57){
		cleartext()
		numberkey()
		console.log("The key you have pressed is a Number.")
		document.getElementById("type_of_key_displayer").innerHTML="You have pressed a Number key."
	}
	if(ASCII_code>=37 && ASCII_code<=40){
        cleartext()
		arrowkey()
		console.log("The key you have pressed is a Arrow key.")
		document.getElementById("type_of_key_displayer").innerHTML="You have pressed a Arrow key."
	}
	if(ASCII_code==17){
		cleartext()
		specialtext()
		console.log("The key you have pressed is Ctrl key")
		document.getElementById("type_of_key_displayer").innerHTML="You have pressed Ctrl key."
	}
	if(ASCII_code==18){
		cleartext()
		specialtext()
		console.log("The key you have pressed is Alt key")
		document.getElementById("type_of_key_displayer").innerHTML="You have pressed Alt key."
	}
	if(ASCII_code==27){
		cleartext()
        specialtext()
		console.log("The key you have pressed is Esc key")
		document.getElementById("type_of_key_displayer").innerHTML="You have pressed Esc key."
	}
	if(ASCII_code==13){
		cleartext()
		otherkey()
		console.log("The key you have pressed is Enter key")
		document.getElementById("type_of_key_displayer").innerHTML="You have pressed Enter key."
    }
	if(ASCII_code==16){
		cleartext()
		otherkey()
		console.log("The key you have pressed is Shift key")
		document.getElementById("type_of_key_displayer").innerHTML="You have pressed Shift key."
    }
	if(ASCII_code==46){
		cleartext()
		otherkey()
		console.log("The key you have pressed is Delete key")
		document.getElementById("type_of_key_displayer").innerHTML="You have pressed Delete key."
    }
}


function aplhabetkey(){
key_pressed_image="Alphabet key.png"
add();
}
function numberkey(){
key_pressed_image="Number key.png"
add();
}
function arrowkey(){
key_pressed_image="Arrow key.png"
add();
}
function otherkey(){
key_pressed_image="Other key.png"
}
add();
function specialtext(){
	ctx.font="75px Comic Sans MS";
	ctx.fillStyle="orange";
	ctx.fillText("Special Key",150,265)
}
function cleartext(){
	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}