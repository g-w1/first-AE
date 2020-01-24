
async function getData(inputs){
    //console.log(inputs);
    const response = await fetch("https://g-w1.github.io/first-AE/weights_biases.json");
    const mydata = await response.json();
    var weights = mydata.weights;
    var biases = mydata.biases;
    inputs = math.reshape(inputs,[10,1])
    inputs = math.multiply(inputs,1);
    // console.log(weights[1]);
    output = sigmoid(math.add(math.multiply(weights[1],inputs),biases[1]));
    output = math.reshape(output,[25,25]);
    for (var i = 0; i<25; i++){
        for (var h = 0; h<25; h++){
            fill(output[i][h]*255);
            rect(h*25,i*25,25,25);
        }
    // console.log(output);
    }
    }


    var sliders = [];  
  function setup() {
    
    for (var i = 0; i<20; i++){
        sliders.push(createSlider(0,30,0,.5));
    }
    let canv = createCanvas(500, 500);
    canv.parent("canvasbox");
    background(0);
    
  }
  
  function draw() {
    inputs = [];
    for (let i = 0;i<10;i++){
      inputs.push(sliders[i].value());
    }
    getData(inputs);
  }
  function sigmoid(z){
  
          return math.map(z,function(value){
              return 1/(1+math.exp(value*-1))
          })
  }
  
