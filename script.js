let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

//When user loads the webpage, it will first show the neutral face
drawFace();
drawNeutral();

//Face without features (mouths, eyes, nose etc)
function drawFace(){
  context.beginPath();
  context.lineWidth = 3;
  context.strokeStyle = "black";
  context.rect(100, 100, 300, 300);
  context.fillStyle = "#FFF200";
  context.fill();
  context.stroke();

  // up left to right then down left to right
  // blobs in face
  // top left
  context.beginPath();
  context.fillStyle = "#B09B12";
  context.ellipse(135, 140, 20, 15, Math.PI / 2.2, 0, 2 * Math.PI);
  context.fill();
  
  context.beginPath();
  context.fillStyle = "#9B870D";
  context.ellipse(120, 170, 7, 5, Math.PI / 1.8, 0, 2 * Math.PI);
  context.fill();
  
  // top right
  context.beginPath();
  context.fillStyle = "#C4AF18";
  context.ellipse(370, 140, 14, 12, Math.PI / 3, 0, 2 * Math.PI);
  context.fill();
  
  // bottom left
  context.beginPath();
  context.fillStyle = "#D9C21D";
  context.ellipse(130, 370, 17, 14, Math.PI / 1.8, 0, 2 * Math.PI);
  context.fill();
  
  context.beginPath();
  context.fillStyle = "#B09B12";
  context.ellipse(120, 340, 9, 7, Math.PI / 1.8, 0, 2 * Math.PI);
  context.fill();
  
  // bottom right
  context.beginPath();
  context.fillStyle = "#9B870D";
  context.ellipse(360, 380, 8, 5, Math.PI / 1.8, 0, 2 * Math.PI);
  context.fill();
  context.beginPath();
  context.fillStyle = "#9B870D";
  context.ellipse(370, 345, 17, 12, Math.PI / 1.8, 0, 2 * Math.PI);
  context.fill();
}

// Original hair 
function drawHair(){
  context.beginPath();
  context.strokeStyle = "black"
  context.lineWidth = 10;
  context.moveTo(200, 120);
  context.lineTo(170, 40);
  context.moveTo(250, 120);
  context.lineTo(250, 40);
  context.moveTo(300, 120);
  context.lineTo(340, 40);
  context.stroke();
}

//New hairstyle when user clicks on hair
function drawHairStyle2(){
  context.beginPath();
  context.storkeStyle = "black"
  context.fillStyle = "black"
  context.rect(120, 38, 280, 83); 
  context.ellipse(100, 170, 20, 21, Math.PI / 1.8, 0, 2 * Math.PI);
  context.ellipse(110, 65, 30, 25, Math.PI / 1.8, 0, 2 * Math.PI);
  context.fill();
  context.beginPath();
  context.rect(98, 80, 22, 90); 
  context.fill();
  context.beginPath();
  context.ellipse(400, 70, 52, 55, Math.PI / 1.8, 0, 2 * Math.PI);
  context.fill(); 
}

// Neutral hair
function neutralHair(){
  context.strokeStyle = "white";
  context.beginPath();
  context.lineWidth = 7;
  context.arc(405, 75, 30, Math.PI * 1.55, Math.PI * 2.6, false);
  context.stroke();
  context.beginPath();
  context.lineWidth = 5;
  context.arc(405, 80, 17, Math.PI * 1.7, Math.PI * 2.5, false);
  context.stroke();
  context.beginPath();
  context.lineWidth = 3;
  context.arc(408, 84, 5, Math.PI * 1.4, Math.PI * 2.5, false);
  context.stroke();
}

// Happy hair
function happyHair(){
  context.strokeStyle = "#ffe57d";
  context.beginPath();
  context.lineWidth = 7;
  context.arc(405, 75, 30, Math.PI * 1.55, Math.PI * 2.6, false);
  context.stroke();
  context.beginPath();
  context.lineWidth = 5;
  context.arc(405, 80, 17, Math.PI * 1.7, Math.PI * 2.5, false);
  context.stroke();
  context.beginPath();
  context.lineWidth = 3;
  context.arc(408, 84, 5, Math.PI * 1.4, Math.PI * 2.5, false);
  context.stroke();
}

// Sad Hair
function sadHair(){
  context.strokeStyle = "#a0b0bb";
  context.beginPath();
  context.lineWidth = 7;
  context.arc(405, 75, 30, Math.PI * 1.55, Math.PI * 2.6, false);
  context.stroke();
  context.beginPath();
  context.lineWidth = 5;
  context.arc(405, 80, 17, Math.PI * 1.7, Math.PI * 2.5, false);
  context.stroke();
  context.beginPath();
  context.lineWidth = 3;
  context.arc(408, 84, 5, Math.PI * 1.4, Math.PI * 2.5, false);
  context.stroke();
}

// Beard when user clicks on chin
function drawBeard(){
context.beginPath();
context.fillStyle = "black"
context.moveTo(165, 360);
context.lineTo(265, 360);
context.lineTo(215, 450);
context.moveTo(235, 360);
context.lineTo(335, 360);
context.lineTo(285, 450);
context.moveTo(200, 350);
context.lineTo(300, 350);
context.lineTo(250, 500);
context.fill();
}

// Neutral beard
function drawNeutralBeard(){
  context.lineWidth = 3;
  context.strokeStyle = "white"
  context.beginPath();
  context.moveTo(215, 390);
  context.lineTo(225, 410);
  context.lineTo(235, 390);
  context.moveTo(240, 430);
  context.lineTo(250, 460);
  context.lineTo(260, 430);
  context.moveTo(265, 390);
  context.lineTo(275, 410);
  context.lineTo(285, 390);
  context.stroke();
  context.beginPath();
  context.moveTo(215, 410);
  context.lineTo(225, 390);
  context.lineTo(235, 410);
  context.moveTo(240, 450);
  context.lineTo(250, 425);
  context.lineTo(260, 450);
  context.moveTo(265, 410);
  context.lineTo(275, 390);
  context.lineTo(285, 410);
  context.stroke();
}

// Happy beard
function drawHappyBeard(){
  context.lineWidth = 3;
  context.strokeStyle = "#ffe57d"
  context.beginPath();
  context.moveTo(210, 390);
  context.lineTo(225, 410);
  context.lineTo(240, 390);
  context.moveTo(240, 430);
  context.lineTo(250, 460);
  context.lineTo(260, 430);
  context.moveTo(260, 390);
  context.lineTo(275, 410);
  context.lineTo(290, 390);
  context.stroke();
}

// Sad beard
function drawSadBeard(){
  context.lineWidth = 3;
  context.strokeStyle = "#a0b0bb"
  context.beginPath();
  context.moveTo(215, 410);
  context.lineTo(225, 390);
  context.lineTo(235, 410);
  context.moveTo(240, 450);
  context.lineTo(250, 425);
  context.lineTo(260, 450);
  context.moveTo(265, 410);
  context.lineTo(275, 390);
  context.lineTo(285, 410);
  context.stroke();
}

// Eyes for sad and happy face
function eyesForSadHappy(){
  context.beginPath();
  context.strokeStyle = "black";
  context.fillStyle = "white";
  context.arc(200, 200, 50, 0, Math.PI * 2, true); // Left eye
  context.fill();
  context.stroke();
  
  context.beginPath();
  context.strokeStyle = "black";
  context.arc(300, 200, 50, 0, Math.PI * 2, true); // Right eye
  context.fill();
  context.stroke();
  
  context.beginPath();
  context.strokeStyle = "black";
  context.fillStyle = "lightblue";
  context.arc(205, 200, 40, 0, Math.PI * 2, true); // left small eye
  context.moveTo(335, 205);
  context.arc(295, 200, 40, 0, Math.PI * 2, true); // Right small eye
  context.fill();
  context.stroke();
  
  context.beginPath();
  context.fillStyle= "black";
  context.moveTo(210, 207);
  context.arc(210, 200, 30, 0, Math.PI * 2, true); // Left smallest eye
  context.moveTo(307, 207);
  context.arc(290, 200, 30, 0, Math.PI * 2, true); // Right smallest eye
  context.fill();
  context.stroke();
  
  context.beginPath();
  context.strokeStyle = "black";
  context.fillStyle = "white";
  context.arc(215, 190, 10, 0, Math.PI * 2, true); // left large eye dot 
  context.fill();
  context.stroke();
  context.beginPath();
  context.arc(280, 190, 10, 0, Math.PI * 2, true); // Right large eye dot
  context.fill();
  context.stroke();
  
  context.beginPath();
  context.strokeStyle = "black";
  context.fillStyle = "white";
  context.arc(210, 208, 5, 0, Math.PI * 2, true); // Left small eye dot
  context.fill();
  context.stroke();
  context.beginPath();
  context.arc(285, 208, 5, 0, Math.PI * 2, true); // Right small eye dot
  context.fill();
  context.stroke();
}

// Neutral face when user clicks neutral button
function drawNeutral(){
  clearCanvas();
  drawFace();
  drawHair();

  // Neutral nose
  context.beginPath();
  context.storkeStyle = "#C4AF18";
  context.lineWidth = 2;
  context.ellipse(250, 255, 35, 8, Math.PI / 2,  1.3 * Math.PI, 2.7 * Math.PI);
  context.stroke();
  
  //No smile
  context.beginPath();
  context.moveTo(175, 310);
  context.lineTo(325, 310);
  context.stroke();
  context.stroke();
  
  // Neutral Teeth
  context.beginPath();
  context.strokeStyle = "black";
  context.fillStyle = "white"
  context.rect(210, 310, 30, 40);
  context.rect(260, 310, 30, 40);
  context.fill();
  context.stroke();
  
  //Eyes for neutral face
  context.beginPath();
  context.fillStyle = "white";
  context.arc(200, 200, 50, 0, Math.PI * 2, true); // Left eye
  context.fill();
  context.stroke();
  context.beginPath();
  context.arc(300, 200, 50, 0, Math.PI * 2, true); // Right eye
  context.fill();
  context.stroke();
  
  context.beginPath();
  context.fillStyle = "lightblue";
  context.moveTo(235, 205);
  context.arc(205, 205, 30, 0, Math.PI * 2, true); // left small eye
  context.moveTo(335, 205);
  context.arc(305, 205, 30, 0, Math.PI * 2, true); // Right small eye
  context.fill();
  context.stroke();
  
  context.beginPath();
  context.fillStyle= "black";
  context.moveTo(210, 207);
  context.arc(210, 207, 10, 0, Math.PI * 2, true); // Left smallest eye
  context.moveTo(307, 207);
  context.arc(300, 207, 10, 0, Math.PI * 2, true); // Right smallest eye
  context.fill();
  context.stroke();
  
  // Neutral eyebrows
  context.beginPath();
  context.lineWidth = 5;
  context.moveTo(270, 130);
  context.lineTo(340, 130);
  context.moveTo(160, 130);
  context.lineTo(230, 130);
  context.stroke();
  
  // Neutral cheek
  //left
  context.beginPath();
  context.strokeStyle = "#A30000";
  context.lineWidth = 2;
  context.arc(140, 275, 20, Math.PI * 1.5, Math.PI * 2.9, false);
  context.stroke();
  //right
  context.beginPath();
  context.lineWidth = 2;
  context.arc(360, 275, 20, Math.PI * 0.1, Math.PI * 1.7, false);
  context.stroke();

  // Setting neutral expression to 1
  expression = 1;
}

// Happy face when user clicks happy button
function drawHappy(){
  clearCanvas();
  drawFace();
  eyesForSadHappy();
  drawHair();

  // NOSE
  context.beginPath();
  context.storkeStyle = "#C4AF18";
  context.lineWidth = 2;
  context.ellipse(250, 248, 22, 8, Math.PI / 2,  1.3 * Math.PI, 2.7 * Math.PI);
  context.stroke();

  // Smile
  context.beginPath();
  context.strokeStyle = "black";
  context.arc(250, 275, 105, 0, Math.PI, false);
  context.closePath();
  context.fillStyle = "#A30000";
  context.fill();
  context.stroke();

  // Teeth
  context.beginPath();
  context.strokeStyle = "black";
  context.fillStyle = "white"
  context.rect(210, 275, 35, 45);
  context.rect(260, 275, 35, 45);
  context.fill();
  context.stroke();

  // eyebrows
  context.beginPath();
  context.lineWidth = 4;
  context.arc(195, 180, 50, Math.PI * 1.1, Math.PI * 1.8, false);
  context.stroke();
  context.beginPath();
  context.lineWidth = 4;
  context.arc(305, 180, 50, Math.PI * 1.2, Math.PI * 1.9, false);
  context.stroke();

  // cheek
  context.beginPath();
  context.strokeStyle = "#A30000";
  context.lineWidth = 2;
  context.arc(140, 275, 20, Math.PI * 0.6, Math.PI * 1.9, false);
  context.stroke();
  context.beginPath();
  context.lineWidth = 2;
  context.arc(360, 275, 20, Math.PI * 1.1, Math.PI * 2.4, false);
  context.stroke();

  //Setting neutral happy expression to 2
  expression = 2;
}

// Sad face when user clicks sad button
function drawSad(){
  clearCanvas();
  drawFace();
  eyesForSadHappy();
  drawHair();

  // NOSE
  context.beginPath();
  context.storkeStyle = "#C4AF18";
  context.lineWidth = 2;
  context.ellipse(250, 255, 35, 8, Math.PI / 2,  1.3 * Math.PI, 2.7 * Math.PI);
  context.stroke();
  
  // Crying face
  context.beginPath();
  context.storkeStyle = "#C4AF18";
  context.lineWidth = 3;
  context.ellipse(250, 370, 70,60, Math.PI / 2,  Math.PI * 0.55,  1.45 * Math.PI);
  context.stroke();
  
  context.beginPath();
  context.storkeStyle = "#C4AF18";
  context.lineWidth = 2.5;
  context.ellipse(250, 350, 40,30, Math.PI / 2,  Math.PI * 0.65,  1.35 * Math.PI);
  context.stroke();
  
  // Sad eyebrows
  context.beginPath();
  context.lineWidth = 4;
  context.arc(180, 100, 45, 0.5, Math.PI * 0.7 , false);
  context.stroke();

  context.beginPath();
  context.lineWidth = 4;
  context.arc(320, 100, 45, 0.9, Math.PI * 0.82 , false);
  context.stroke();
  
  // Sad cheek
  context.beginPath();
  context.strokeStyle = "#A30000";
  context.lineWidth = 2;
  context.arc(140, 275, 20, Math.PI * 1.5, Math.PI * 2.9, false);
  context.stroke();

  context.beginPath();
  context.lineWidth = 2;
  context.arc(360, 275, 20, Math.PI * 0.1, Math.PI * 1.7, false);
  context.stroke();

  //Setting neutral sad expression to 3
  expression = 3;
}

//Neutral button 
let neutralButton = document.getElementById("neutralbutton");
neutralButton.addEventListener("click", drawNeutral);
//Happy button
let happyButton = document.getElementById("happybutton");
happyButton.addEventListener("click", drawHappy);
//Sad button
let sadButton = document.getElementById("sadbutton");
sadButton.addEventListener("click", drawSad);

//To get the coordinates of the mouse
function getMouseXY(e) {
  let canvas = document.getElementById('myCanvas');
  let boundingRect = canvas.getBoundingClientRect();
  let offsetX = boundingRect.left;
  let offsetY = boundingRect.top;
  let w = (boundingRect.width-canvas.width)/2;
  let h = (boundingRect.height-canvas.height)/2;
  offsetX += w;
  offsetY += h;
  // use clientX and clientY as getBoundingClientRect is used above
  let mx = Math.round(e.clientX-offsetX);
  let my = Math.round(e.clientY-offsetY);
  return {x: mx, y: my};
}

// Area of the chin that will make beard appear
function checkArea(x, y, chin){
  return ((x >= chin.x) && (x <= chin.x + chin.w) &&
      (y >= chin.y) && (y <= chin.y + chin.h)
  )
}

//Area of the head that will make hair appear
function checkArea(x, y, hair){
  return ((x >= hair.x) && (x <= hair.x + hair.w) &&
      (y >= hair.y) && (y <= hair.y + hair.h)
  )
}

// Hair style according with each expression
function hairStyle(e,hair){
  let pos = getMouseXY(e);
  let area = checkArea(pos.x, pos.y, hair);
  // If user clicks on the hair area
  if (area){
    // Neutral expression
    if (expression == 1){
      // If statements to ensure that beard doesn't disappear
      if ((noHair == true) && (noBeard == true)){
        clearCanvas();
        drawNeutral();
        drawHair();
        noHair = false;
      }
      else if ((noHair == false) && (noBeard == true)){
        clearCanvas();
        drawNeutral();
        drawHairStyle2();
        neutralHair();
        noHair = true;
      }
      else if ((noHair == true) && (noBeard == false)){
        clearCanvas();
        drawNeutral();
        drawBeard();
        drawNeutralBeard();
        drawHair();
        noHair = false;
      }
      else if ((noHair == false) && (noBeard == false)){
        clearCanvas();
        drawNeutral();
        drawBeard();
        drawNeutralBeard();
        drawHairStyle2();
        neutralHair();
        noHair = true;
      }
    }
    
    // Happy expression
    else if (expression == 2){
      if ((noHair == true) && (noBeard == true)){
        clearCanvas();
        drawHappy();
        drawHair();
        noHair = false;
      }
      else if ((noHair == false) && (noBeard == true)){
        clearCanvas();
        drawHappy();
        drawHairStyle2();
        happyHair();
        noHair = true;
      }
      else if ((noHair == true) && (noBeard == false)){
        clearCanvas();
        drawHappy();
        drawBeard();
        drawHappyBeard();
        drawHair();
        noHair = false;
      }
      else if ((noHair == false) && (noBeard == false)){
        clearCanvas();
        drawHappy();
        drawBeard();
        drawHappyBeard();
        drawHairStyle2();
        happyHair();
        noHair = true;
      }
    }

    // Sad expression
    else if (expression == 3){
      if ((noHair == true) && (noBeard == true)){
        clearCanvas();
        drawSad();
        drawHair();
        noHair = false;
      }
      else if ((noHair == false) && (noBeard == true)){
        clearCanvas();
        drawSad();
        drawHairStyle2();
        sadHair();
        noHair = true;
      }
      else if ((noHair == true) && (noBeard == false)){
        clearCanvas();
        drawSad();
        drawBeard();
        drawSadBeard();
        drawHair();
        noHair = false;
      }
      else if ((noHair == false) && (noBeard == false)){
        clearCanvas();
        drawSad();
        drawBeard();
        drawSadBeard();
        drawHairStyle2();
        sadHair();
        noHair = true;
      }
    }
  }
}

// function that draw the beard
function beard(e,chin){
  let pos = getMouseXY(e);
  let area = checkArea(pos.x, pos.y, chin);
  // If user clicks on the chin area
  if (area){
    //Neutral expression
    if (expression == 1){
      // If statements to ensure that hair doesn't disappear
      if ((noHair == true) && (noBeard == true)){
        clearCanvas();
        drawNeutral();
        drawHairStyle2();
        neutralHair();
        drawBeard();
        drawNeutralBeard();
        noBeard = false;
      }
      else if ((noHair == false) && (noBeard == true)){
        clearCanvas();
        drawNeutral();
        drawHair();
        drawBeard();
        drawNeutralBeard();
        noBeard = false;
      }
      else if ((noHair == true) && (noBeard == false)){
        clearCanvas();
        drawNeutral();
        drawHairStyle2();
        neutralHair();
        noBeard = true;
      }
      else if ((noHair == false) && (noBeard == false)){
        clearCanvas();
        drawHair();
        drawNeutral();
        noBeard = true;
      }
    }

    // Happy expression 
    else if (expression == 2){
      if ((noHair == true) && (noBeard == true)){
        clearCanvas();
        drawHappy();
        drawHairStyle2();
        happyHair();
        drawBeard();
        drawHappyBeard();
        noBeard = false;
      }
      else if ((noHair == false) && (noBeard == true)){
        clearCanvas();
        drawHappy();
        drawHair();
        drawBeard();
        drawHappyBeard();
        noBeard = false;
      }
      else if ((noHair == true) && (noBeard == false)){
        clearCanvas();
        drawHappy();
        drawHairStyle2();
        happyHair();
        noBeard = true;
      }
      else if ((noHair == false) && (noBeard == false)){
        clearCanvas();
        drawHair();
        drawHappy();
        noBeard = true;
      }
    }

    // Sad expression
    else if (expression == 3){
      if ((noHair == true) && (noBeard == true)){
        clearCanvas();
        drawSad();
        drawHairStyle2();
        sadHair();
        drawBeard();
        drawSadBeard();
        noBeard = false;
      }
      else if ((noHair == false) && (noBeard == true)){
        clearCanvas();
        drawSad();
        drawHair();
        drawBeard();
        drawSadBeard();
        noBeard = false;
      }
      else if ((noHair == true) && (noBeard == false)){
        clearCanvas();
        drawSad();
        drawHairStyle2();
        sadHair();
        noBeard = true;
      }
      else if ((noHair == false) && (noBeard == false)){
        clearCanvas();
        drawHair();
        drawSad();
        noBeard = true;
      }
    }
  }
}

// Cartoon doesn't have much hair at start
let noHair = true;
canvas.addEventListener('click', function(e) { hairStyle(e, hair)});
//Clickable area to make hair appear
let hair = {x:80, y:0, w:370, h:140};

// Cartoon doesn't have beard at start
let noBeard = true;
canvas.addEventListener('click', function(e) { beard(e, chin)});
// Clickable area to make beard appear.
let chin = {x:120, y:340, w:250, h:100};

// Clear canvas function
function clearCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}