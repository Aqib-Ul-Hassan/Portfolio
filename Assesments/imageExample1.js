//Set and load the source image
var mySrcImg = new Image();
mySrcImg.src = "flower.jpg";

mySrcImg.addEventListener('load', function(){
	//processImg();
}, false);

//Add source image to the "srcImgDiv" div
function srcImg(){
	document.getElementById("srcImgDiv").appendChild(mySrcImg);
	document.writeln("Src Image from var");
}

function Effect(){

	 var tmpInput = document.getElementById("imgeffect").value;

	 alert(tmpInput);



	 if(tmpInput == "Greyscale") {
		 Greyscale();
	 }

	if(tmpInput == "Invert") {
		 Invert();
	 }

	 if(tmpInput == "RedHue") {
		 RedHue();
	 }

	 if(tmpInput == "GreenHue") {
		 GreenHue();
	 }

	 if(tmpInput == "BlueHue") {
		 BlueHue();
	 }

	 if(tmpInput == "Blur") {
		 Blur();
	 }

	 if(tmpInput == "Thresholding") {
		 Thresholding();
	 }

	 if(tmpInput == "Sharpen") {
		 Sharpen();
	 }

	 if(tmpInput == "EdgeDetection") {
		 EdgeDetection();
	 }
 }

 //============GREYSCALE================
// Image processing function
function Greyscale(){
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");

	//canvas.width = mySrcImg.width;
	//canvas.height = mySrcImg.height;
	context.fillStyle = "rgb(0,200,0)";
	context.fillRect (0, 0, 300, 300);

	//Copy the image contents to the canvas
	context.drawImage(mySrcImg, 0, 0);

	//Get your image data
	var myImageData;
	try {
		myImageData = context.getImageData(0, 0, canvas.width, canvas.height);
	} catch (e){
		netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
		myImageData = context.getImageData(0, 0, canvas.width, canvas.height);
	}

	//Loop over each pixel and invert colours
	var pixelComponents = myImageData.data;
	var n = pixelComponents.length;
	for (var i = 0; i < n; i += 4){

		//Black & White
		var avg = (pixelComponents[i ]
					+ pixelComponents[i+1]
					  + pixelComponents[i+2]) / 3;
		pixelComponents[i ] = avg;
		pixelComponents[i+1] = avg;
		pixelComponents[i+2] = avg;

	}

	//Draw the ImageData object at the given (x,y) coordinates
	context.putImageData(myImageData, 0,0);
}

//==============INVERT=================
function Invert(){
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");

	//canvas.width = mySrcImg.width;
	//canvas.height = mySrcImg.height;
	context.fillStyle = "rgb(0,200,0)";
	context.fillRect (0, 0, 300, 300);

	//Copy the image contents to the canvas
	context.drawImage(mySrcImg, 0, 0);

	//Get your image data
	var myImageData;
	try {
		myImageData = context.getImageData(0, 0, canvas.width, canvas.height);
	} catch (e){
		netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
		myImageData = context.getImageData(0, 0, canvas.width, canvas.height);
	}

	//Loop over each pixel and invert colours
	var pixelComponents = myImageData.data;
	var n = pixelComponents.length;
	for (var i = 0; i < n; i += 4){

	//Invert
		  pixelComponents[i  ] = 255 - pixelComponents[i  ]; // red
          pixelComponents[i+1] = 255 - pixelComponents[i+1]; // green
          pixelComponents[i+2] = 255 - pixelComponents[i+2]; // blue
        // i+3 is alpha (the fourth element)
	}
	context.putImageData(myImageData, 0,0);
}

//===============RED HUE===================
function RedHue(){
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");

	//canvas.width = mySrcImg.width;
	//canvas.height = mySrcImg.height;
	context.fillStyle = "rgb(0,200,0)";
	context.fillRect (0, 0, 300, 300);

	//Copy the image contents to the canvas
	context.drawImage(mySrcImg, 0, 0);

	//Get your image data
	var myImageData;
	try {
		myImageData = context.getImageData(0, 0, canvas.width, canvas.height);
	} catch (e){
		netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
		myImageData = context.getImageData(0, 0, canvas.width, canvas.height);
	}

	//Loop over each pixel and invert colours
	var pixelComponents = myImageData.data;
	var n = pixelComponents.length;
	for (var i = 0; i < n; i += 4){
		//One Pixel:
		pixelComponents[i ] = pixelComponents[i ] + 100; //red
		pixelComponents[i+1] = pixelComponents[i+1]; //green
		pixelComponents[i+2] = pixelComponents[i+2]; //blue
		//i+3 is alpha (fourth element)
	}

	//Draw the ImageData object at the given (x,y) coordinates
	context.putImageData(myImageData, 0,0);
}


//=============GREEN HUE======================

function GreenHue(){
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");

	//canvas.width = mySrcImg.width;
	//canvas.height = mySrcImg.height;
	context.fillStyle = "rgb(0,200,0)";
	context.fillRect (0, 0, 300, 300);

	//Copy the image contents to the canvas
	context.drawImage(mySrcImg, 0, 0);

	//Get your image data
	var myImageData;
	try {
		myImageData = context.getImageData(0, 0, canvas.width, canvas.height);
	} catch (e){
		netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
		myImageData = context.getImageData(0, 0, canvas.width, canvas.height);
	}

	//Loop over each pixel and invert colours
	var pixelComponents = myImageData.data;
	var n = pixelComponents.length;
	for (var i = 0; i < n; i += 4){
		//One Pixel:
		pixelComponents[i ] = pixelComponents[i ]; //red
		pixelComponents[i+1] = pixelComponents[i+1] + 100; //green
		pixelComponents[i+2] = pixelComponents[i+2]; //blue
		//i+3 is alpha (fourth element)
	}

	//Draw the ImageData object at the given (x,y) coordinates
	context.putImageData(myImageData, 0,0);
}


//===============BLUE HUE=================

function BlueHue(){
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");

	//canvas.width = mySrcImg.width;
	//canvas.height = mySrcImg.height;
	context.fillStyle = "rgb(0,200,0)";
	context.fillRect (0, 0, 300, 300);

	//Copy the image contents to the canvas
	context.drawImage(mySrcImg, 0, 0);

	//Get your image data
	var myImageData;
	try {
		myImageData = context.getImageData(0, 0, canvas.width, canvas.height);
	} catch (e){
		netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
		myImageData = context.getImageData(0, 0, canvas.width, canvas.height);
	}

	//Loop over each pixel and invert colours
	var pixelComponents = myImageData.data;
	var n = pixelComponents.length;
	for (var i = 0; i < n; i += 4){
		//One Pixel:
		pixelComponents[i ] = pixelComponents[i ]; //red
		pixelComponents[i+1] = pixelComponents[i+1]; //green
		pixelComponents[i+2] = pixelComponents[i+2] + 100; //blue
		//i+3 is alpha (fourth element)
	}

	//Draw the ImageData object at the given (x,y) coordinates
	context.putImageData(myImageData, 0,0);
}


//====================BLUR================

//JavaScript - Pixel group Processing
//Function that displays the source images
function Blur(){

	filterImg();
}

//Convolution width and height
var convolutionWidth = 3;
var convolutionHeight = 3;

var  factor = 1.0;
var bias = 0.0;

//Convolution Mask
var convolutionMask = new Array(convolutionHeight);
	for (i=0; i < convolutionHeight; i++){
		convolutionMask[i]=new Array(convolutionWidth);
}

convolutionMask[0][0] = 0.1111111111; convolutionMask[1][0] = 0.1111111111; convolutionMask[2][0] = 0.1111111111;
convolutionMask[0][1] = 0.1111111111; convolutionMask[1][1] = 0.1111111111; convolutionMask[2][1] = 0.1111111111;
convolutionMask[0][2] = 0.1111111111; convolutionMask[1][2] = 0.1111111111; convolutionMask[2][2] = 0.1111111111;
//End Convolution Mask

//Convolution kernel - Output
//Size is convolution kernel width * height * 4
var convolutionKernel_OutputArraySize = ((convolutionWidth * convolutionHeight)* 4);
var convolutionKernel_Output = new Array(convolutionKernel_OutputArraySize);
//END convolution kernel - Output

//Filter the image
function filterImg(){
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");

//canvas.width = mySrcImg.width;
//canvas.height = mySrcImg.height;

context.fillStyle = "rgb(0,200,0)";
context.fillRect (0, 0, 300, 300);

//Copy image content to canvas
context.drawImage(mySrcImg, 0, 0);

//Get image data
var myImageData;
var newImageData;

try{
	myImageData = context.getImageData(0, 0, canvas.width, canvas.height);
	newImageData = context.createImageData(canvas.width, canvas.height);
} catch (e) {
	//netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
	myImageData = context.getImageData(0, 0, canvas.width, canvas.height);
	newImageData = context.createImageData(canvas.width, canvas.height);
}

alert("Starting group pixel processing");

//Loop over each pixel on canvas
for (var x = 0; x < canvas.width; x++){
	for (var y = 0; y < canvas.height; y++){
		//Index of the pixel in the array
		var idx = (x + y * canvas.width) * 4;

		//Indexes for convolution kernel (in screen coordinates
		for (var filterx = 0; filterx < convolutionWidth; filterx++){
			for (var filtery = 0; filtery < convolutionHeight; filtery++){
				var tmpX = ((x - Math.floor(convolutionWidth / 2)) +filterx + canvas.width) % canvas.width;
				var tmpy = ((y - Math.floor(convolutionHeight / 2)) +filtery + canvas.height) % canvas.height;
				var convolutionKernel_Index = (tmpX + tmpy * canvas.width) * 4;

				var outputIndex = (filterx + filtery * convolutionWidth) * 4;
				convolutionKernel_Output[outputIndex ] = (convolutionMask[filterx][filtery] * factor) *
																	myImageData.data[convolutionKernel_Index ];

				convolutionKernel_Output[outputIndex+1] = (convolutionMask[filterx][filtery] * factor) *
																	myImageData.data[convolutionKernel_Index+1];

				convolutionKernel_Output[outputIndex+2] = (convolutionMask[filterx][filtery] * factor) *
																	myImageData.data[convolutionKernel_Index+2];

				convolutionKernel_Output[outputIndex+3] = 255;
			}
		}

//Loop through the output values. Add together
var newPixel = new Array(4);
for (i=0; i < 4; i++){
	newPixel[i] = 0;
}
for (i=0; i < convolutionKernel_OutputArraySize; i+=4){
	newPixel[0] = newPixel[0] + convolutionKernel_Output[i ] + bias;
	newPixel[1] = newPixel[1] + convolutionKernel_Output[i+1] + bias;
	newPixel[2] = newPixel[2] + convolutionKernel_Output[i+2] + bias;
	newPixel[3] = newPixel[3] + convolutionKernel_Output[i+3] + bias;
}

//Set the new pixel colour
newImageData.data[idx ] = Math.min( Math.max(newPixel[0], 0), 255); //red
newImageData.data[idx+1] = Math.min( Math.max(newPixel[1], 0), 255); //green
newImageData.data[idx+2] = Math.min( Math.max(newPixel[2], 0), 255); //blue
newImageData.data[idx+3] = Math.min( Math.max(newPixel[3], 0), 255); //alpha
	}
}

//Draw the imageDate object at the given (x,y) coordinates
context.putImageData(newImageData, 0,0);

alert("Finished group pixel processing");
}


//=================THRESHOLDING===================

// JavaScript - Pixel point processing.
function Thresholding() {
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");

  	if (!context || !context.getImageData || !context.putImageData || !context.drawImage) {
    	return;
  	}

	//canvas.width = mySrcImg.width;
    	//canvas.height = mySrcImg.height;
	context.fillStyle = "rgb(0,200,0)";
 	context.fillRect (0, 0, 300, 300);

	// Copy the image contents to the canvas
    context.drawImage(mySrcImg, 0, 0);

	// Get your image data.
	var myImageData;
	try {
      	myImageData = context.getImageData(0, 0, canvas.width, canvas.height);
    } catch (e) {
      	netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
      	myImageData = context.getImageData(0, 0, canvas.width, canvas.height);
    }

	// Loop over each pixel and invert the colours.
	var pixelComponents = myImageData.data;
	var n = pixelComponents.length;
	for (var i = 0; i < n; i += 4) {
		// One pixel:
		var average = (pixelComponents[i  ] + pixelComponents[i+1] + pixelComponents[i+2]) / 3;
		if(average > 127.5){
			average = 255;
		} else {
			average = 0;
		}

  		pixelComponents[i  ] = average; // red
  		pixelComponents[i+1] = average; // green
  		pixelComponents[i+2] = average; // blue
  		// i+3 is alpha (the fourth element)
	}

	// Draw the ImageData object at the given (x,y) coordinates.
	context.putImageData(myImageData, 0,0);

}


//============SHARPEN===============

//Pixel Group Processing
function Sharpen(){
}



//Convolution width and height
var convolutionWidth = 3;
var convolutionHeight = 3;

var  factor = 1.0;
var bias = 0.0;

//Convolution Mask
var convolutionMask1 = new Array(convolutionHeight);
	for (i=0; i < convolutionHeight; i++){
		convolutionMask1[i]=new Array(convolutionWidth);
}

convolutionMask1[0][0] = -1.0; convolutionMask1[1][0] = -1.0; convolutionMask1[2][0] = -1.0;
convolutionMask1[0][1] = -1.0; convolutionMask1[1][1] = 9.0; convolutionMask1[2][1] = -1.0;
convolutionMask1[0][2] = -1.0; convolutionMask1[1][2] = -1.0; convolutionMask1[2][2] = -1.0;
//End Convolution Mask


//Convolution kernel - Output
//Size is convolution kernel width * height * 4
var convolutionKernel_OutputArraySize = ((convolutionWidth * convolutionHeight)* 4);
var convolutionKernel_Output = new Array(convolutionKernel_OutputArraySize);
//END convolution kernel - Output

//Filter the image
function Sharpen(){
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");

//Copy image content to canvas
context.drawImage(mySrcImg, 0, 0);

//Get image data
var myImageData;
var newImageData;

try{
	myImageData = context.getImageData(0, 0, canvas.width, canvas.height);
	newImageData = context.createImageData(canvas.width, canvas.height);
} catch (e) {
	netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
	myImageData = context.getImageData(0, 0, canvas.width, canvas.height);
	newImageData = context.createImageData(canvas.width, canvas.height);
}

var threshold = 100;

//Pixel Group Processing
var convolutionMask = convolutionMask1;
alert("Starting group pixel processing");

//Loop over each pixel on canvas
for (var x = 0; x < canvas.width; x++){
	for (var y = 0; y < canvas.height; y++){
		//Index of the pixel in the array
		var idx = (x + y * canvas.width) * 4;

		//Indexes for convolution kernel (in screen coordinates
		for (var filterx = 0; filterx < convolutionWidth; filterx++){
			for (var filtery = 0; filtery < convolutionHeight; filtery++){
				var tmpX = ((x - Math.floor(convolutionWidth / 2)) + filterx + canvas.width) % canvas.width;
				var tmpy = ((y - Math.floor(convolutionHeight / 2)) + filtery + canvas.height) % canvas.height;
				var convolutionKernel_Index = (tmpX + tmpy * canvas.width) * 4;

				var outputIndex = (filterx + filtery * convolutionWidth) * 4;
				convolutionKernel_Output[outputIndex ] = convolutionMask[filterx][filtery] *
																	myImageData.data[convolutionKernel_Index ];

				convolutionKernel_Output[outputIndex+1] = convolutionMask[filterx][filtery] *
																	myImageData.data[convolutionKernel_Index+1];

				convolutionKernel_Output[outputIndex+2] = convolutionMask[filterx][filtery] *
																	myImageData.data[convolutionKernel_Index+2];

				convolutionKernel_Output[outputIndex+3] = 255;
			}
		}

	//Loop through the output values. Add together
var newPixel = new Array(4);
for (i=0; i < 4; i++){
	newPixel[i] = 0;
}
for (i=0; i < convolutionKernel_OutputArraySize; i+=4){
	newPixel[0] = newPixel[0] + convolutionKernel_Output[i ] + bias;
	newPixel[1] = newPixel[1] + convolutionKernel_Output[i+1] + bias;
	newPixel[2] = newPixel[2] + convolutionKernel_Output[i+2] + bias;
	newPixel[3] = newPixel[3] + convolutionKernel_Output[i+3] + bias;
}

//Set the new pixel colour
newImageData.data[idx ] = Math.min( Math.max( (newPixel[0] * factor + bias), 0), 255); //red
newImageData.data[idx+1] = Math.min( Math.max( (newPixel[1]* factor + bias), 0), 255); //green
newImageData.data[idx+2] = Math.min( Math.max( (newPixel[2]* factor + bias), 0), 255); //blue
newImageData.data[idx+3] = Math.min( Math.max( newPixel[3], 0), 255); //alpha
	}
}

//Draw the imageDate object at the given (x,y) coordinates
context.putImageData(newImageData, 0,0);

alert("Finished group pixel processing");
}


//===============EDGE DETECTION==================

//function that displays source images
function EdgeDetection(){
}

//Convolution width & height
var convolutionWidth = 3;
var convolutionHeight = 3;

var factor = 1.0;
var bias = 0.0;

//Sobel edge detection
//variables to set
var processX = true;
var processY = true;
var threshold = 0;

//Convolution mask - 1 (x)
var convolutionMask1 = new Array(convolutionHeight);
for (i=0; i < convolutionHeight; i++){
	convolutionMask1[i]=new Array(convolutionWidth);
}
convolutionMask1[0][0] = -1;	convolutionMask1[1][0] = 0;		convolutionMask1[2][0] = 1;
convolutionMask1[0][1] = -2;	convolutionMask1[1][1] = 0;		convolutionMask1[2][1] = 2;
convolutionMask1[0][2] = -1;	convolutionMask1[1][2] = 0;		convolutionMask1[2][2] = 1;
//End convolution mask

//Convolution mask - 2(y)
var convolutionMask2 = new Array(convolutionHeight);
for (i=0; i < convolutionHeight; i++){
	convolutionMask2[i]=new Array(convolutionWidth);
}
convolutionMask2[0][0] = 1;	convolutionMask2[1][0] = 2;		convolutionMask2[2][0] = 1;
convolutionMask2[0][1] = 0;	convolutionMask2[1][1] = 0;		convolutionMask2[2][1] = 0;
convolutionMask2[0][2] = -1;	convolutionMask2[1][2] = -2; 		convolutionMask2[2][2] = -1;
//End convolution mask

//Convolution kernel - output
//size is convolution kernel width * height * 4
var convolutionKernel_OutputArraySize = ((convolutionWidth * convolutionHeight) * 4);
var convolutionKernel_Output = new Array(convolutionKernel_OutputArraySize);
//End convolution kernel - output

function EdgeDetection() {
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");

//copy the image contents to the canvas
context.drawImage(mySrcImg, 0, 0);

//Get your image data
var myImageData;
var newImageData;
try{
	myImageData = context.getImageData(0, 0, canvas.width, canvas.height);
	newImageData = context.createImageData(canvas.width, canvas.height);
} catch (e) {
	netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
	myImageData = context.getImageData(0, 0, canvas.width, canvas.height);
	newImageData = context.createImageData(canvas.width, canvas.height);
}

//pixel group processing x
if(processX == true){
		alert("Starting group pixel processing X");
		pixelGroupProcessing(myImageData, newImageData, convolutionMask1, canvas, context);
		alert("Finished group pixel processing X");
	}

//pixel group processing y
if(processY == true){
		alert("Starting group pixel processing Y");
		pixelGroupProcessing(myImageData, newImageData, convolutionMask2, canvas, context);
		alert("Finished group pixel processing Y");
	}
}


//pixel group processing
function pixelGroupProcessing(myImageData, newImageData, convolutionMask, canvas, context){

	//loop over each pixel on the canvas
	for (var x = 0; x < canvas.width; x++){
		for (var y = 0; y < canvas.height; y++){
			//index of the pixel in the array
			var idx = (x + y * canvas.width) * 4;

			//indexes for the convolution kernel (in screen co-ordinates)
			for (var filterx = 0; filterx <convolutionWidth; filterx++){
				for (var filtery = 0; filtery < convolutionHeight; filtery++){
					var tmpX = ((x - Math.floor(convolutionWidth / 2)) + filterx + canvas.width) % canvas.width;
					var tmpy = ((y - Math.floor(convolutionHeight / 2)) + filtery + canvas.height) % canvas.height;
					var convolutionKernel_Index = (tmpX + tmpy * canvas.width) * 4;

					var outputIndex = (filterx + filtery * convolutionWidth) * 4;
					convolutionKernel_Output[outputIndex ] = convolutionMask[filterx][filtery] *
																myImageData.data[convolutionKernel_Index ];

					convolutionKernel_Output[outputIndex+1] = convolutionMask[filterx][filtery] *
																myImageData.data[convolutionKernel_Index+1];

					convolutionKernel_Output[outputIndex+2] = convolutionMask[filterx][filtery] *
																myImageData.data[convolutionKernel_Index+2];

					convolutionKernel_Output[outputIndex+3] = 255;
				}
			}

			//loop through output values. Add together and divide by size of the kernel
			var newPixel = new Array(4);
			for (i=0; i < 4; i++){
				newPixel[i] = 0;
			}

			for (i=0; i < convolutionKernel_OutputArraySize; i+=4){
				newPixel[0] = newPixel[0] + convolutionKernel_Output[i ];
				newPixel[1] = newPixel[1] + convolutionKernel_Output[i+1];
				newPixel[2] = newPixel[2] + convolutionKernel_Output[i+2];
				newPixel[3] = newPixel[3] + convolutionKernel_Output[i+3];

			}

			//get average gradient value
			newPixel[0] = Math.abs(newPixel[0]);
			newPixel[1] = Math.abs(newPixel[1]);
			newPixel[2] = Math.abs(newPixel[2]);
			var avgGradient = (newPixel[0] + newPixel[1] + newPixel[2]) / 3;

			newPixel[0] = avgGradient;
			newPixel[1] = avgGradient;
			newPixel[2] = avgGradient;

			//if pixel below the threshold then make it 0(black)

			if(newPixel[0] < threshold){
				newPixel[0] = 0;
				newPixel[1] = 0;
				newPixel[2] = 0;
			}

			//Set the new pixel colour
			newImageData.data[idx ] = Math.min( Math.max( ((newPixel[0] * factor + bias) +
																newImageData.data[idx ]), 0), 255); //red

			newImageData.data[idx+1] = Math.min( Math.max( ((newPixel[1] * factor + bias) +
																newImageData.data[idx+1]), 0), 255); //green


			newImageData.data[idx+2] = Math.min( Math.max( ((newPixel[2] * factor + bias) +
																newImageData.data[idx+2]), 0), 255); // blue

			newImageData.data[idx+3] = Math.min( Math.max( newPixel[3], 0), 255); //Alpha

		}
	}

	//Draw the ImageData object at the given (x,y) co-ordinates
	context.putImageData(newImageData, 0,0);
}
