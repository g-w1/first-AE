
async function getData(inputs,sliders){
    const response = await fetch("https://g-w1.github.io/first-AE/weights_biases.json");
    const mydata = await response.json();
    var weights = mydata.weights;
    var biases = mydata.biases;
    var inputs = [];
    for (var i = 0; i<length(sliders);i++){
        inputs.push(sliders);
    }
    output = sigmoid(math.add(math.multiply(weights[1],inputs),biases[1]));
    output = math.reshpe(output,[625,625]);
    for (var i = 0; i<25; i++){
        for (var h = 0; h<25; h++){
            rect(h,i,20,20);
        }
    }
    }



  function setup() {
    var sliders = [];
    for (var i = 0; i<10; i++){
        sliders.push(createSlider(0,100,50));
    }
    var canv = createCanvas(500, 500);
    canv.parent("canvasbox");
    background(0);
    let guessButton = select('#guess');
    guessButton.mousePressed(function() {
      let inputs = []
      let img = get();
      img.resize(25, 25);
      img.loadPixels();
      for (let i = 0; i <625; i++) {
        let bright = img.pixels[i * 4];
        inputs.push([bright/255.0]);
  
      }
  console.log(predict(inputs))
  })
    let clearButton = select("#clear");
    clearButton.mousePressed(function(){
        background(0);
        document.getElementById("header").innerHTML = "Draw a Smiley face or a Frowney face and hit guess to make the computer classify it";
    })
  }
  function draw() {
    getData(inputs,sliders);
  }
  function predict(inputs){
    
        
  }
  function sigmoid(z){
  
          return math.map(z,function(value){
              return 1/(1+math.exp(value*-1))
          })
  }
  