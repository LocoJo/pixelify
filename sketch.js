let imageWidth = 1312;
let imageHeight = 1524;

let horizontalBlocks = 8;
let verticalBlocks = 12;

let horizontalPixel = 0;
let verticalPixel = 0;

let segment;
let segment_Width = imageWidth / horizontalBlocks;
let segment_Height = imageHeight / verticalBlocks;
let segment_avgColour;

let img;
let modImg;

let mouseClick;

function mouseClicked() {
    mouseClick = true;
}

function averageColour(inPixels) {
    var colour  = [0, 0, 0];
    var pixelIndex = 0;

    while ( (pixelIndex * 4) <  (inPixels.length)) {
        for( i = 0; i < 3; i++) {
            colour[i] += inPixels[ (pixelIndex * 4) + i ];
            pixelIndex ++;
        }
    }

    console.log("averageColour: After sum colour is: " + colour);
    console.log("averageColour: After sum pixelIndex is: " + pixelIndex);

    for( i = 0; i < 3; i++) {
        colour[i] /= pixelIndex;
    }    

    return colour;
}

function preload() {
    console.log("in preload");

    img = loadImage('images/joeBustStoneHenge.jpg');  
}

function setup(){
    createCanvas(imageWidth, imageHeight);

    let ar = img.width / img.height;
    console.log(ar);
}

function draw() {
    image(img, 0, 0, imageWidth, imageHeight);

    if ( mouseClick ) {
        if ( (horizontalPixel + segment_Width) <= imageWidth) {
            segment = img.get(horizontalPixel, verticalPixel, segment_Width, segment_Height);
            image(segment, 0, 0, imageWidth, imageHeight, 0, 0, segment_Width, segment_Height);
            loadPixels();

            segment_avgColour = averageColour(pixels);
            console.log("segment_avgColour is: " + segment_avgColour);

            console.log("first pixel colour is" + pixels[0]);
            console.log("pixels length is: " + pixels.length);

            //image(segment, horizontalPixel, verticalPixel, segment_Width, segment_Height);
            horizontalPixel += segment_Width;
        } else if ((horizontalPixel + segment_Width) >= imageWidth ) {
            horizontalPixel = 0;
            verticalPixel += segment_Height;
        }
    }

    modImg = get();

    mouseClick = false;
}