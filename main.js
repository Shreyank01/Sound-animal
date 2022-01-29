function startClassification()  {
 navigator.mediaDevices.getUserMedia({ audio: true});
 classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/lgDl2BOuc/model.json', modelReady); 
}

 function modelReady() { 
    classifier.classify( gotResults); 
}

function gotResults(error,results) {
    if (error){
        console.error(error);
    }
    else {
        console.log(results);

        
        random_number_r = Math.floor(Math.random()* 255) + 1;
        random_number_g = Math.floor(Math.random()* 255) + 1;
        random_number_b = Math.floor(Math.random()* 255) + 1;

        document.getElementById("text_confidence").innerHTML = "Sound Matching -" + 
        (results[0].confidence * 100 ).toFixed(2) + "%";
        document.getElementById("text_name").innerHTML = "It's " + 
        results[0].label ;
        document.getElementById("text_name").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
        document.getElementById("text_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";

        img1 = document.getElementById("main_img");
        
        if(results[0].label == 'Roaring') {
            img1.src = "lion-roar-clipart-11.jpg";
        }
        else if(results[0].label == 'Barking') {
            img1.src = "barking.png";  
        }
           else if(results[0].label == 'Mooing') {
            img1.src = "mooing.png";
        }
           else{
            img1.src = "mwowing.png";
        }
    }
}
