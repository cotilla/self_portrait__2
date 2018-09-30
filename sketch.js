function setup() {
	createCanvas(640, 360);
}

function draw() {
	background(220);
    
    var r = 0; // red;
	var g = map(mouseX, 0, width, 0, 255); // green
	var b = map(mouseY, 0, height, 0, 255); // blue
	//fill(r, g, b);
    
	var earsy = 150;
    var earshgit = 100;
    var earswith = 100;
    
    var eyebrowsy = 80;
    var eyebrowshgit = 50;
    var eyebrowswith = 5;
    
    var eyesy = 150;
    var eyeshgit = 50;
    var eyeswith = 100;
    
    var eye_pupily = 150;
    var eye_pupilhgit = 40;
    var eye_pupilwith = 40;
    
    var x = mouseX;
    var y = mouseY;
    
    
	// ears
	fill(r, g, b);
	ellipse(x-225, y, earshgit, earswith);//R
	ellipse(x-20, y, earshgit, earswith);//L
	
	// face
	fill(r, g, b);
	rect(x-225, y-120, 200, 250);
	
	// eyebrows
	fill(r, g, b);
	rect(x-100, y-80, eyebrowshgit, eyebrowswith);//L
	rect(x-200, y-80, eyebrowshgit, eyebrowswith);//R
	
	// eyes
	fill("white");
	ellipse(x-180, y, eyeshgit, eyeswith);//R
	ellipse(x-70, y, eyeshgit, eyeswith);//L
	
	// eyes_pupil
	fill(r, g, b);
	ellipse(x-180, y, eye_pupilhgit, eye_pupilwith);//L
	ellipse(x-70, y, eye_pupilhgit, eye_pupilwith);//R
	
	// nose
	fill(r, g, b);
	ellipse(x-125, y+50, 20, 20);

	// mouth
	fill("pink");
	rect(x-170, y+100,100 ,10);
	
	
	
	}
	
	