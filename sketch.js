let imageWidth = 1312;
let imageHeight = 1524;

let horizontalBlocks = 8;
let verticalBlocks = 12;

let horizontalPixel = 0;
let verticalPixel = 0;

let segment;
let segment_Width = imageWidth / horizontalBlocks;
let segment_Height = imageHeight / verticalBlocks;

let img;

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

    if ( (horizontalPixel + segment_Width) <= imageWidth) {
        segment = img.get(horizontalPixel, (imageHeight / 2), segment_Width, segment_Height);
        image(segment, horizontalPixel, verticalPixel, segment_Width, segment_Height);
        horizontalPixel += segment_Width;
    } else if ((horizontalPixel + segment_Width) >= imageWidth ) {
        horizontalPixel = 0;
        verticalPixel += segment_Height;
    }

    img = get();
}