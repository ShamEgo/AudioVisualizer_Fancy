var sound, amp, freq1,freq2,freq3;
function preload() {

	sound = loadSound('Sound.mp3');

}



function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	//colorMode(HSB);
	sound.play();

	amp = new p5.Amplitude();
	amp.setInput(sound);
	rectMode(CORNER);
	// rotation = shape degree
	angleMode(DEGREES)

	//create FFT object 1
	freq1 = new p5.FFT(0.5,64);
	freq1.setInput(sound);
	
	//create FFT object 2
	freq2 = new p5.FFT(0.9,64);
	freq2.setInput(sound);
	
	//create FFT object 3
	freq3 = new p5.FFT(0.5,16);
	freq3.setInput(sound);
	
}

function draw() {
	background(102,25,255);
	//Get the sound level
	var vol = amp.getLevel();	
	//get the spectrum
  var spectrum_a = freq1.analyze();
	//get the spectrum
  var spectrum_b = freq2.analyze();
	//get the spectrum
  var spectrum_c = freq3.analyze();
	
	// surrounding
  var spectrum_a = freq1.analyze();
	push();
  stroke(255,255,255,200);
	strokeWeight(1);
	ellipse(width/2 - 600,100*6,vol*700,vol*700);
	ellipse(width/2 - 600,100*6,vol*800,vol*800);
	ellipse(width/2 - 600,100*6,vol*900,vol*900);
	ellipse(width/2 - 600,100*6,vol*1000,vol*1000);
	ellipse(width/2 - 600,100*6,vol*1100,vol*1100);
	ellipse(width/2 - 600,100*6,vol*1200,vol*1200);
	ellipse(width/2 - 600,100*6,vol*1300,vol*1300);
	ellipse(width/2 - 600,100*6,vol*1400,vol*1400);
	ellipse(width/2 - 600,100*6,vol*1500,vol*1500);
	
	ellipse(width/2 + 600,100*6-550,vol*700,vol*700);
	ellipse(width/2 + 600,100*6-550,vol*800,vol*800);
	ellipse(width/2 + 600,100*6-550,vol*900,vol*900);
	ellipse(width/2 + 600,100*6-550,vol*1000,vol*1000);
	ellipse(width/2 + 600,100*6-550,vol*1100,vol*1100);
	ellipse(width/2 + 600,100*6-550,vol*1200,vol*1200);
	ellipse(width/2 + 600,100*6-550,vol*1300,vol*1300);
	ellipse(width/2 + 600,100*6-550,vol*1400,vol*1400);
	ellipse(width/2 + 600,100*6-550,vol*1500,vol*1500);
	
	ellipse(width/2 - 50,100*6-230,vol*700,vol*700);
	ellipse(width/2 - 50,100*6-230,vol*800,vol*800);
	ellipse(width/2 - 50,100*6-230,vol*900,vol*900);
	ellipse(width/2 - 50,100*6-230,vol*1000,vol*1000);
	ellipse(width/2 - 50,100*6-230,vol*1100,vol*1100);
	
	ellipse(width/2 + 50,100*6-310,vol*700,vol*700);
	ellipse(width/2 + 50,100*6-310,vol*800,vol*800);
	ellipse(width/2 + 50,100*6-310,vol*900,vol*900);
	ellipse(width/2 + 50,100*6-310,vol*1000,vol*1000);
	ellipse(width/2 + 50,100*6-310,vol*1100,vol*1100);

	pop();
	

	//core circles
	for(var i=0; i<spectrum_b.length;i++) {
  push();
  
	fill(255,255,255);
	ellipse(width/2,height/2,vol*450,vol*450);
	pop();
	push();
	ellipse(width/2,height/2,vol*500,vol*500);
	ellipse(width/2,height/2,vol*520,vol*520);
	ellipse(width/2,height/2,vol*560,vol*560);
	strokeWeight(15);
	ellipse(width/2,height/2,vol*700,vol*700);
	pop();
	}
	
	//random rect background
	push();
	for(var i=0; i<spectrum_c.length;i++) {
	
	stroke(255,255,255,1000);
	var r1 = random(width*2,-1000)
	var r2 = random(height*2,-1000)
	var vr1 = random(vol*150, vol*50)
	
  rect(r1,r2,vr1,vr1);
  noFill();
	}

  //rect
	for(var i=0; i<spectrum_a.length;i++) {
		//top
		var x = width / spectrum_a.length * i;
		var y = 0;
		var w = width / spectrum_a.length;
		var h = spectrum_a[i];
		
		//bot
		var a = width / spectrum_b.length * i;
		var s = 520;
		var d = width / spectrum_b.length;
		var f = spectrum_b[i];
		push();
		fill(0,255,255);
		stroke(150);
		noStroke();
	  translate(width, height+525);
	  rotate(180);
	  rect(a,s,d-10,f);
	  pop();
		
		push();
		fill(255,50,255);
		noStroke();
		rect(x,y,w-10,h);
		pop();
	

	}

	}