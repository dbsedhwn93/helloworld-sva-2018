
var pA, pB;
var pAV, pBV;
var pAS, pBS;
var ball, ballV;

function setup() {
	createCanvas(1150,650);

	pA = pB = height / 2 - 50;

	pAV = pBV = 0;
	pAS = pBS = 0;

	ball = createVector(width / 2, height / 2);
	ballV = createVector(random(-1, 1), random(-1, 1));
	ballV.setMag(3);

	textAlign(CENTER);
	textSize(30);
	fill(255);
}
function draw() {
 background(100);
 rect(10, pA, 20, 100);
 rect(width - 30, pB, 20, 100);

 pA = constrain(pA, 0, height - 100);
 pB = constrain(pB, 0, height - 100);

 ellipse(ball.x, ball.y, 20);

text(pAS + " : " + pBS, width / 2, 50);

 Move();

 Ball();
}

function Ball() {

	ball.x += ballV.x;
	ball.y += ballV.y;

	if (ball.y > height || ball.y < 0) 
		ballV.y *= -1;



	if (ball.x <= 30) {

		if (ball.x <= 10) {
			pBS++;
			reset();
			return;
		}

		if (ball.y > pA && ball.y < pA + 100) {

			ballV.x *= -1;
			ballV.mult(random(1, 1.1));
		}
	

	} else if (ball.x >= width - 30 ) {

		if (ball.x >= width - 10){

			pAS++;
			reset();
			return;
		}
		if (ball.y > pB && ball.y < pB + 100) {
			ballV.x *= -1;
			ballV.mult(random(1, 1.1));
		}
		
	}
}	

function reset() {

	ballV.setMag(3);
	ball = createVector(width / 2, height / 2);
}

function Move() {
	if (keyIsDown(38)){
		pAV -= 5;


	} else if (keyIsDown(40)){ 
		pAV += 5;
	}
	if (keyIsDown(65)){
		pBV -= 5;
	} else if (keyIsDown(83)){ 
		pBV += 5;
	}

	pA += pAV;
	pB += pBV;

	pAV *= 0.4;
	pBV *= 0.4;



	pA = constrain(pA, 0, height - 100);
	pB = constrain(pB, 0, height - 100);
}