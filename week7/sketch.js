var capture;
var small;
var kolor, jasnosc;
var index = 0;


var img1;
var img2;

var img4;
var img5;
var img6;
var img7;

var img9;
var img10;
var img11;
var img12;
var img13;
var img14;
var img15;
var img16;
var img17;
var img18;
var img19;
var img20;
var img21;

var img23;
var img24;
var img25;
var img26;
var img27;
var img28;
var img29;
var img30;
var img31;
var img32;


var imgRed;

function preload() {
	img1 = loadImage("1.jpg");
	img2 = loadImage("2.jpg");

	img4 = loadImage("4.jpg");
	img5 = loadImage("5.jpg");
	img6 = loadImage("6.jpg");
	img7 = loadImage("7.jpg");

	img9 = loadImage("9.jpg");
	img10 = loadImage("10.jpg");
	img11 = loadImage("11.jpg");
	img12 = loadImage("12.jpg");
	img13 = loadImage("13.jpg");
	img14 = loadImage("14.jpg");
	img15 = loadImage("15.jpg");
	img16 = loadImage("16.jpg");
	img17 = loadImage("17.jpg");
	img18 = loadImage("18.jpg");
	img19 = loadImage("19.jpg");
	img20 = loadImage("20.jpg");
	img21 = loadImage("21.jpg");

	img23 = loadImage("23.jpg");
	img24 = loadImage("24.jpg");
	img25 = loadImage("25.jpg");
	img26 = loadImage("26.jpg");
	img27 = loadImage("27.jpg");
	img28 = loadImage("28.jpg");
	img29 = loadImage("29.jpg");
	img30 = loadImage("30.jpg");
	img31 = loadImage("31.jpg");
	img32 = loadImage("32.jpg");
	print("loaded");
}



function setup() {




	createCanvas(windowWidth, windowHeight);
	capture = createCapture(VIDEO);
	capture.size(250, 160);
	capture.hide();

	frameRate(50);



}

function draw() {
	background(0);
	colorMode(RGB, 255);
	noStroke();

	capture.loadPixels();
	for (var cy = 0; cy < capture.height; cy += 10) {
		for (var cx = 0; cx < capture.width; cx += 10) {
			var offset = ((cy * capture.width) + cx) * 4;
			var xpos = (cx / capture.width) * width;
			var ypos = (cy / capture.height) * height;
			
			
			tint(capture.pixels[offset],capture.pixels[offset+1],capture.pixels[offset+2]);
			
			var imagenum = int(random(1, 32));
			
			if (imagenum == 1){image(img1,xpos, ypos, 40,40);} 		
			if (imagenum == 2){image(img2,xpos, ypos, 40,40);} 		
 		

			if (imagenum == 4){image(img4,xpos, ypos, 40,40);} 		
			if (imagenum == 5){image(img5,xpos, ypos, 40,40);} 		
			if (imagenum == 6){image(img6,xpos, ypos, 40,40);} 		
			if (imagenum == 7){image(img7,xpos, ypos, 40,40);} 		
			
			if (imagenum == 9){image(img9,xpos, ypos, 40,40);} 		
			if (imagenum == 10){image(img10,xpos, ypos, 40,40);} 		
			if (imagenum == 11){image(img11,xpos, ypos, 40,40);} 		
			if (imagenum == 12){image(img12,xpos, ypos, 40,40);} 		
			if (imagenum == 13){image(img13,xpos, ypos, 40,40);} 		
			if (imagenum == 14){image(img14,xpos, ypos, 40,40);} 		
			if (imagenum == 15){image(img15,xpos, ypos, 40,40);} 		
			if (imagenum == 16){image(img16,xpos, ypos, 40,40);} 		
			if (imagenum == 17){image(img17,xpos, ypos, 40,40);} 		
			if (imagenum == 18){image(img18,xpos, ypos, 40,40);} 		
			if (imagenum == 19){image(img19,xpos, ypos, 40,40);} 		
			if (imagenum == 20){image(img20,xpos, ypos, 40,40);} 		
			if (imagenum == 21){image(img21,xpos, ypos, 40,40);} 		

			if (imagenum == 23){image(img23,xpos, ypos, 40,40);} 		
			if (imagenum == 24){image(img24,xpos, ypos, 40,40);} 		
			if (imagenum == 25){image(img25,xpos, ypos, 40,40);} 		
			if (imagenum == 26){image(img26,xpos, ypos, 40,40);} 		
			if (imagenum == 27){image(img27,xpos, ypos, 40,40);} 		
			if (imagenum == 28){image(img28,xpos, ypos, 40,40);} 		
			if (imagenum == 29){image(img29,xpos, ypos, 40,40);} 		
			if (imagenum == 30){image(img30,xpos, ypos, 40,40);} 		
			if (imagenum == 31){image(img31,xpos, ypos, 40,40);} 		
			if (imagenum == 32){image(img32,xpos, ypos, 40,40);} 		
			
			
		}
	}



}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}